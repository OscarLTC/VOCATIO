import { useEffect, useState, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './surveys-person.scss';
import axios from 'axios';
import { environment } from '../../../environments/environment';
import { surveyProgrammingPerson } from '../../models/surveyProgrammingPerson.model';
import { Controller, useForm } from 'react-hook-form';
import { Question } from '../../models/question.model';
import { QuestionAlternative } from '../../models/questionAlternative.model';
import { QuestionCategory } from '../../models/questionCategory.model';
import toast, { Toaster } from 'react-hot-toast';
import { BsArrowDownShort } from 'react-icons/bs';
import { useSetRecoilState } from 'recoil';
import { surveyPersonState } from '../../store/people/surveyPerson';

/* eslint-disable-next-line */
export interface SurveysPersonProps {}

export function SurveysPerson(props: SurveysPersonProps) {
  const [surveyPerson, setSurveyPerson] = useState<
    surveyProgrammingPerson | undefined
  >();
  const [surveyQuestions, setSurveyQuestions] = useState<any>([]);
  const [surveyQuestionsType, setSurveyQuestionsType] = useState<any>([]);
  const [surveyId, setSurveyId] = useState();
  const setSurveyPersonState = useSetRecoilState(surveyPersonState);

  const [unansweredQuestions, setUnansweredQuestions] = useState<number[]>([]);

  const submitButtonRef = useRef(null);
  const navigate = useNavigate();

  const { id } = useParams();

  const {
    control,
    handleSubmit,
    register,
    getValues,
    watch,
    formState: { errors },
  } = useForm();

  const scrollToLastSection = () => {
    if (submitButtonRef.current) {
      (submitButtonRef.current as HTMLDivElement).scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  const onSendSurveyClick = () => {
    let unansweredQuestionsArray: number[] = [];
    if (surveyId == 1) {
      surveyQuestionsType?.map((item: any, index: number) => {
        item.questions.map((question: any) => {
          const questionCategory = question.questionCategory;
          const isQuestionAnswered = watch(`${questionCategory}`);
          if (!isQuestionAnswered) {
            unansweredQuestionsArray.push(index + 1);
          }
        });
      });
    } else {
      surveyQuestions?.question?.map((question: Question, index: number) => {
        const questionCategory = question.question_category[0]?.id;
        const isQuestionAnswered = watch(`${questionCategory}`);
        if (!isQuestionAnswered) {
          unansweredQuestionsArray.push(index + 1);
        }
      });
    }

    if (unansweredQuestionsArray.length > 0) {
      unansweredQuestionsArray = [...new Set(unansweredQuestionsArray)];
      toast.error(
        `Responde las preguntas: ${
          unansweredQuestionsArray.length > 10
            ? `${unansweredQuestionsArray.slice(0, 10).toString()}, ...`
            : unansweredQuestionsArray.toString()
        }`
      );
      setUnansweredQuestions(unansweredQuestionsArray);
      // console.log('Preguntas sin contestar:', unansweredQuestionsArray);
    } else {
      setUnansweredQuestions([]);
      console.log('Todas las preguntas han sido contestadas.');
    }
  };

  const onSubmit = async (data: any) => {
    axios
      .post(`${environment.apiUrl}/answers/save`, {
        id: surveyPerson?.id,
        answers: Object.entries(data).map(([key, value]: any) => {
          const [group] = key.split('_');
          return [parseInt(group), parseInt(value)];
        }),
      })
      .then(() => {
        setSurveyPersonState({
          idPdf: id as unknown as number,
          surveyId: surveyId as unknown as number,
        });
        navigate('/encuestas/register/');
      });
    // console.log({
    //   id: surveyPerson?.id,
    //   answers: Object.entries(data).map(([key, value]: any) => {
    //     const [group] = key.split('_');
    //     return [parseInt(group), parseInt(value)];
    //   }),
    // });
  };

  useEffect(() => {
    const getSurveyPerson = async () => {
      await axios
        .get(`${environment.apiUrl}/surveyProgrammingPerson/${id}`)
        .then((res) => {
          setSurveyId(res.data.survey_programming?.survey?.id);
          setSurveyPerson(res.data);
          axios
            .get(
              `${environment.apiUrl}/survey/${res.data.survey_programming?.survey?.id}`
            )
            .then((res) => {
              if (res.data.id == 1) {
                const questionsCategoryObject = res.data.question
                  .flatMap((item: Question) =>
                    item.question_category.map(
                      (questionCategory: QuestionCategory) => ({
                        category: questionCategory.category,
                        question: {
                          id: item.id,
                          description: item.description,
                          questionCategory: questionCategory.id,
                          alternatives: item.question_alternative,
                        },
                      })
                    )
                  )
                  .reduce((agrupados: any, objeto: QuestionCategory) => {
                    const categoria = objeto.category;
                    const categoriaId = categoria.id;
                    if (!agrupados[categoriaId]) {
                      agrupados[categoriaId] = [];
                    }
                    agrupados[categoriaId].push(objeto);
                    return agrupados;
                  }, {});

                const categoryQuestions = Object.values(
                  questionsCategoryObject
                ).map((questions: any) => ({
                  category: questions[0].category,
                  questions: questions.flatMap((item: any) => item.question),
                }));
                console.log(categoryQuestions);
                setSurveyQuestionsType(categoryQuestions);
              } else if (res.data.id == 5) {
                const questionTypeFive = res.data.question.map(
                  (question: Question) => ({
                    question: question.description,
                    categories: question.question_category.map(
                      (questionCategory: QuestionCategory) => ({
                        id: questionCategory.id,
                        name: questionCategory.category.name,
                        alternatives: question.question_alternative,
                      })
                    ),
                  })
                );
                setSurveyQuestions(questionTypeFive);
              } else {
                setSurveyQuestions(res.data);
              }
            });
        });
    };

    getSurveyPerson();
  }, []);

  return (
    <div className="p-4 bg-[aliceblue]">
      {surveyPerson &&
      surveyPerson.survey_programming.state_id == 2 &&
      surveyPerson.state?.id == 2 ? (
        <div>
          <div className="p-4  flex max-sm:flex-col-reverse text-2xl sm:text-xl place-items-center sm:justify-between">
            <div>
              <div className="sm:flex max-sm:mt-10">
                <h2>Tipo de Encuesta:</h2>
                <span className="sm:ml-5 font-medium">
                  {surveyPerson?.survey_programming.survey?.name}
                </span>
              </div>
              <div className="sm:flex mt-5">
                <h2>Encuesta Dirigida a:</h2>
                <span className="sm:ml-5 font-medium">
                  {surveyPerson?.person.name} {surveyPerson?.person.lastName}
                </span>
              </div>

              <div className="sm:flex mt-5">
                <h2>Empresa - sección:</h2>
                <span className="sm:ml-5 font-medium">
                  {`${surveyPerson?.survey_programming.enterprise?.name} - ${surveyPerson?.survey_programming.section}`}
                </span>
              </div>
            </div>
            <img
              className="w-20"
              src="/src/assets/img/logo_principal_color.png"
              alt=""
            />
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            {surveyId === 1 && (
              <div className="grid xl:grid-cols-2 grid-cols-1 gap-5 mx-10">
                {surveyQuestionsType?.map((item: any, index: number) => (
                  <div
                    key={item.category.id}
                    className=" rounded-lg p-4  justify-center w-fit mx-auto bg-white"
                  >
                    <h2 className="text-center font-bold my-5">
                      {`${index + 1}. ${item.category.name}`}
                    </h2>
                    <div className="grid sm:grid-cols-2 gap-10">
                      {item.questions.map((question: any) => (
                        <div
                          className={`border rounded p-2 ${
                            errors[question.questionCategory] &&
                            'border-red-500'
                          }`}
                          key={question.id}
                        >
                          <h3 className="text-xs">{question.description}</h3>
                          <div className="w-full flex justify-between mt-4">
                            {question.alternatives.map((alternative: any) => (
                              <label
                                className={`m-1 w-10 h-10 rounded-full ${
                                  watch(`${question.questionCategory}`) ==
                                  alternative.id
                                    ? 'border-2 border-[#003552]'
                                    : ''
                                }`}
                                key={alternative.alternative.id}
                              >
                                <input
                                  className="absolute hidden"
                                  type="radio"
                                  title={alternative.description}
                                  value={alternative.id}
                                  {...register(`${question.questionCategory}`, {
                                    required: true,
                                  })}
                                />
                                <img
                                  src={`/src/assets/img/${alternative.alternative.id}.png`}
                                  alt=""
                                  title={alternative.alternative.description}
                                />
                              </label>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
            {(surveyId === 2 || surveyId === 3 || surveyId === 4) && (
              <div className="grid 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-5 mx-5 my-10 text-sm ">
                {surveyQuestions?.question?.map(
                  (question: Question, index: number) => (
                    <div
                      key={question.id}
                      className={` rounded-lg p-5  justify-center w-fit mx-auto bg-white ${
                        errors[question.question_category[0]?.id] &&
                        'border-red-500 border'
                      } `}
                    >
                      <h2 className="font-bold text-center mt-5 text-md">
                        {`${index + 1}. ${question.description}`}
                      </h2>
                      <div className="w-full flex justify-between mt-4">
                        {question.question_alternative.map(
                          (alternative, index) => (
                            <label
                              className={`m-2 w-10 h-10 rounded-full ${
                                watch(`${question.question_category[0].id}`) ==
                                alternative.id
                                  ? 'border-2 border-[#003552]'
                                  : ''
                              }`}
                              key={alternative.alternative.id}
                            >
                              <input
                                className="hidden"
                                type="radio"
                                title={alternative.alternative.description}
                                value={alternative.id}
                                {...register(
                                  `${question.question_category[0]?.id}`,
                                  {
                                    required: true,
                                  }
                                )}
                              />
                              <img
                                src={`/src/assets/img/${alternative.alternative.id}.png`}
                                alt=""
                                title={alternative.alternative.description}
                              />
                            </label>
                          )
                        )}
                      </div>
                    </div>
                  )
                )}
              </div>
            )}
            {surveyId === 5 && (
              <div className="mx-10">
                {surveyQuestions?.map((item: any, index: number) => (
                  <div key={index} className=" rounded-lg p-4 ">
                    <h2 className="text-center mx-auto text-xl md:w-[600px] font-bold my-5">
                      {`${item.question}...`}
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 gap-10 mx-auto bg-white p-4">
                      {item.categories.map((category: any, index: number) => (
                        <div
                          className={`border rounded  p-2 ${
                            errors[category.id] && 'border-red-500'
                          }`}
                          key={category.id}
                        >
                          <h3 className="text-lg text-center">
                            {`${index + 1}. ${category.name}`}
                          </h3>
                          <div className="flex justify-between mt-4">
                            {category.alternatives.map((alternative: any) => (
                              <label
                                className={`m-1 w-10 h-10 rounded-full ${
                                  watch(`${category.id}`) == alternative.id
                                    ? 'border-2 border-[#003552]'
                                    : ''
                                }`}
                                key={alternative.id}
                              >
                                <input
                                  className="absolute hidden"
                                  type="radio"
                                  title={alternative.description}
                                  value={alternative.id}
                                  {...register(`${category.id}`, {
                                    required: true,
                                  })}
                                />
                                <img
                                  src={`/src/assets/img/${alternative.alternative.id}.png`}
                                  alt=""
                                  title={alternative.alternative.description}
                                />
                              </label>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
            {surveyId === 6 && (
              <div className="grid sm:grid-cols-2 sm:gap-10 mx-5 my-5">
                {surveyQuestions?.question?.map(
                  (question: Question, index: number) => (
                    <div
                      className="w-full bg-white  shadow px-5 py-10 rounded-lg mt-10"
                      key={question.id}
                    >
                      <h3 className="mb-4 font-medium text-2xl text-green-800">
                        {`${index + 1} - ${question.description}`}
                      </h3>
                      <Controller
                        name={`${question.question_category[0]?.id}`}
                        control={control}
                        defaultValue=""
                        rules={{ required: true }}
                        render={({ field, formState, fieldState }) => (
                          <div
                            className={`border-t-2 border-green-100  ${
                              fieldState.error ? 'border-rose-500' : ''
                            }`}
                          >
                            {question.question_alternative.map(
                              (alternative: QuestionAlternative) => (
                                <div
                                  className="mt-2 flex items-center space-x-2 text-left"
                                  key={alternative.id}
                                >
                                  <label className="flex items-center space-x-2">
                                    <input
                                      type="radio"
                                      value={alternative.id}
                                      onChange={() => {
                                        field.onChange(alternative.id);
                                      }}
                                      checked={field.value === alternative.id}
                                      className="form-radio h-4 w-4"
                                    />
                                    <span className="text-gray-700">
                                      {alternative.alternative.description}
                                    </span>
                                  </label>
                                </div>
                              )
                            )}
                          </div>
                        )}
                      />
                    </div>
                  )
                )}
              </div>
            )}
            {surveyId === 7 && (
              <div className="grid 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-5 mx-5 my-10 text-sm ">
                {surveyQuestions?.question?.map(
                  (question: Question, index: number) => (
                    <div
                      key={question.id}
                      className={` rounded-lg p-5  justify-center w-fit mx-auto bg-white ${
                        errors[question.question_category[0]?.id] &&
                        'border-red-500 border'
                      } `}
                    >
                      <h2 className="font-bold text-center mt-5 text-md">
                        {`${index + 1}. ${question.description}`}
                      </h2>
                      <div className="w-full flex justify-around mt-4">
                        {question.question_alternative.map(
                          (alternative, index) => (
                            <label
                              className={`m-2 w-20 h-20 rounded-full ${
                                watch(`${question.question_category[0].id}`) ==
                                alternative.id
                                  ? 'border-2 border-[#003552]'
                                  : ''
                              }`}
                              key={alternative.alternative.id}
                            >
                              <input
                                className="hidden"
                                type="radio"
                                title={alternative.alternative.description}
                                value={alternative.id}
                                {...register(
                                  `${question.question_category[0]?.id}`,
                                  {
                                    required: true,
                                  }
                                )}
                              />
                              <img
                                src={`/src/assets/img/${alternative.alternative.id}.png`}
                                alt=""
                                title={alternative.alternative.description}
                              />
                            </label>
                          )
                        )}
                      </div>
                    </div>
                  )
                )}
              </div>
            )}
            <div className="text-center mt-10">
              <button
                ref={submitButtonRef}
                onClick={onSendSurveyClick}
                className="p-4 bg-green-400 text-white rounded mx-auto"
                type="submit"
              >
                {`Enviar respuestas  ${
                  unansweredQuestions.length > 0
                    ? `| Faltan(${unansweredQuestions.length})`
                    : ''
                }`}
              </button>
            </div>
          </form>
          <button
            type="button"
            onClick={scrollToLastSection}
            className="w-12 h-12 rounded-full bg-gray-500 fixed bottom-10 right-10 flex justify-center items-center hover:animate-bounce"
          >
            <BsArrowDownShort size={35} color="white" />
          </button>
          <Toaster position="bottom-right" />
        </div>
      ) : (
        <div className="flex flex-col">
          <span>Ya se completó la encuesta, gracias por participar.</span>
          <span>Cierre la ventana</span>
        </div>
      )}
    </div>
  );
}

export default SurveysPerson;
