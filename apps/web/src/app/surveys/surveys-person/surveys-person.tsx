import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './surveys-person.scss';
import axios from 'axios';
import { environment } from '../../../environments/environment';
import { surveyProgrammingPerson } from '../../models/surveyProgrammingPerson.model';
import { Controller, useForm } from 'react-hook-form';
import { Alternative } from '../../models/alternative.model';
import { Survey } from '../../models/survey.model';
import { Question } from '../../models/question.model';
import { Category } from '../../models/category.model';
import { QuestionAlternative } from '../../models/questionAlternative.model';
import { error } from 'console';
import { QuestionCategory } from '../../models/questionCategory.model';

/* eslint-disable-next-line */
export interface SurveysPersonProps {}

export function SurveysPerson(props: SurveysPersonProps) {
  const [surveyPerson, setSurveyPerson] = useState<
    surveyProgrammingPerson | undefined
  >();
  const [surveyQuestions, setSurveyQuestions] = useState<any>([]);
  const [surveyQuestionsType1, setSurveyQuestionsType1] = useState<any>([]);
  const [categories, setCategories] = useState<Array<any>>();
  const [selectedAlternative, setSelectedAlternative] = useState('');
  const [selectedOptions, setSelectedOptions] = useState<any>();
  const [surveyId, setSurveyId] = useState();

  const { id } = useParams();

  const {
    control,
    handleSubmit,
    register,
    getValues,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    axios
      .post(`${environment.apiUrl}/answers/save`, {
        id: surveyPerson?.id,
        answers: Object.entries(data).map(([key, value]: any) => {
          const [group] = key.split('_');
          return [parseInt(group), parseInt(value)];
        }),
      })
      .then(() => window.location.reload());
    // console.log({
    //   id: surveyPerson?.id,
    //   answers: Object.entries(data).map(([key, value]: any) => {
    //     const [group] = key.split('_');
    //     return [parseInt(group), parseInt(value)];
    //   }),
    // });
  };

  const handleOptionChange = (questionId: any, optionId: any) => {
    setSelectedOptions((prevOptions: any) => ({
      ...prevOptions,
      [questionId]: optionId,
    }));
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
                setSurveyQuestionsType1(categoryQuestions);
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
          <div className="p-4 flex text-lg justify-between">
            <div>
              <div className="flex">
                <h2>Tipo de Encuesta:</h2>
                <span className="ml-5 font-medium">
                  {surveyPerson?.survey_programming.survey?.name}
                </span>
              </div>
              <div className="flex mt-5">
                <h2>Encuesta Dirigida a:</h2>
                <span className="ml-5 font-medium">
                  {surveyPerson?.person.name} {surveyPerson?.person.lastName}
                </span>
              </div>

              <div className="flex mt-5">
                <h2>Empresa - sección:</h2>
                <span className="ml-5 font-medium">
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
            {surveyId == 1 && (
              <div className="grid xl:grid-cols-2 grid-cols-1 gap-5 mx-10">
                {surveyQuestionsType1?.map((item: any, index: number) => (
                  <div
                    key={item.category.id}
                    className=" rounded-lg p-4  justify-center w-fit mx-auto bg-white"
                  >
                    <h2 className="text-center font-bold my-5">
                      {`${index + 1}. ${item.category.name}`}
                    </h2>
                    <div className="grid grid-cols-2 gap-10">
                      {item.questions.map((question: any) => (
                        <div
                          className={`border rounded p-2 ${
                            errors[question.questionCategory] &&
                            'border-red-500'
                          }`}
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
            {(surveyId == 3 || surveyId == 4) && (
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
            {surveyId == 6 && (
              <div className="grid grid-cols-2 gap-10 mx-5 my-5">
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
                        rules={{ required: false }}
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
            <div className="text-center mt-10">
              <button
                className="p-4 bg-green-400 text-white rounded mx-auto"
                type="submit"
              >
                Enviar encuesta
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div>Ya se completó la encuesta</div>
      )}
    </div>
  );
}

export default SurveysPerson;
