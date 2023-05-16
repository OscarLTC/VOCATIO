import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './surveys-person.scss';
import axios from 'axios';
import { environment } from '../../../environments/environment';
import { SurveyEnterprisePersons } from '../../models/surveyEnterprisePersons.model';
import { Controller, useForm } from 'react-hook-form';
import { Alternative } from '../../models/alternative.model';

/* eslint-disable-next-line */
export interface SurveysPersonProps {}

export function SurveysPerson(props: SurveysPersonProps) {
  const [surveyPerson, setSurveyPerson] = useState<
    SurveyEnterprisePersons | undefined
  >();

  const { id } = useParams();

  const { control, handleSubmit } = useForm();

  const onSubmit = async (data: any) => {
    await axios
      .post(`${environment.apiUrl}/answers/save`, {
        id: parseInt(id!),
        answer: Object.values(data),
      })
      .then((res) => {
        console.log(res.data);
        window.location.reload();
      })
      .catch((res) => console.log(res));
  };

  useEffect(() => {
    const getSurveyPerson = async () => {
      await axios
        .get(`${environment.apiUrl}/surveyEnterprisePerson/${id}`)
        .then((res) => setSurveyPerson(res.data));
    };

    getSurveyPerson();
  }, []);
  return (
    <div className="p-4 bg-[aliceblue]">
      {surveyPerson && parseInt(surveyPerson.state.id) === 2 ? (
        <div>
          <div className="p-4 flex text-lg justify-between">
            <div>
              <div className="flex">
                <h2>Tipo de Encuesta:</h2>
                <span className="ml-5 font-medium">
                  {surveyPerson?.survey_enterprise.survey.name}
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
                  {`${surveyPerson?.survey_enterprise.enterprise.name} - ${surveyPerson?.survey_enterprise.section}`}
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
            <div className="grid grid-cols-2 gap-3 place-items-center">
              {surveyPerson?.survey_enterprise.survey.question.map(
                (question, index) => (
                  <div
                    className="w-full bg-white  shadow px-5 py-10 rounded-lg mt-10"
                    key={question.id}
                  >
                    <h3 className="mb-4 font-medium text-2xl text-green-800">
                      {`${index + 1} - ${question.description}`}
                    </h3>
                    <Controller
                      name={`pregunta${question.id}`}
                      control={control}
                      defaultValue=""
                      rules={{ required: true }}
                      render={({ field, formState, fieldState }) => (
                        <div
                          className={`border-t-2 border-green-100  ${
                            fieldState.error ? 'border-rose-500' : ''
                          }`}
                        >
                          {question.alternative.map(
                            (alternative: Alternative) => (
                              <div
                                className="mt-2 flex items-center space-x-2 text-left"
                                key={alternative.id}
                              >
                                <label className="flex items-center space-x-2">
                                  <input
                                    type="radio"
                                    value={alternative.value}
                                    onChange={() =>
                                      field.onChange(alternative.id)
                                    }
                                    checked={field.value === alternative.id}
                                    className="form-radio h-4 w-4"
                                  />
                                  <span className="text-gray-700">
                                    {alternative.description}
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
            <button
              className=" mt-4 p-4 bg-green-400 text-white rounded"
              type="submit"
            >
              Enviar encuesta
            </button>
          </form>
        </div>
      ) : (
        <div>Ya se completó la encuesta</div>
      )}
    </div>
  );
}

export default SurveysPerson;
