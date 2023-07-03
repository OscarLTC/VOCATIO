import { useEffect, useState } from 'react';
import './surveys-detail.scss';
import axios from 'axios';
import { environment } from '../../../environments/environment';
import { Link, useParams } from 'react-router-dom';
import { SurveyProgramming } from '../../models/surveyProgramming.model';

/* eslint-disable-next-line */
export interface SurveysDetailProps {}

export function SurveysDetail(props: SurveysDetailProps) {
  const [surveyDetails, setSurveyDetails] = useState<SurveyProgramming>();

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${environment.apiUrl}/surveyProgramming/${id}`)
      .then((res) => setSurveyDetails(res.data));
  }, []);

  return (
    <div className="sm:p-8">
      <h1 className="sm:text-4xl text-2xl font-medium">
        Detalle de la Encuesta - ID {surveyDetails ? surveyDetails?.id : 0}
      </h1>
      <div className="p-8">
        <div className="mt-10 flex justify-center gap-10 max-md:flex-col ">
          <div className="max-w-2xl bg-white  shadow px-5 py-10 rounded-lg text-left">
            <h2 className=" text-left font-medium text-2xl">
              Programación: {surveyDetails?.name}
            </h2>
            <div className="mt-10 flex gap-4 items-center place-content-center">
              <span className="w-36 sm:w-44 text-start">Tipo de Encuesta:</span>
              <input
                className="sm:w-52 w-36 bg-gray-200 p-2 rounded outline-none"
                type="text"
                readOnly
                defaultValue={surveyDetails?.survey.name}
              />
            </div>
            <div className="mt-10 flex gap-4 items-center place-content-center">
              <span className="w-36 sm:w-44 text-start">
                Empresa Solicitante:
              </span>
              <input
                className="sm:w-52 w-36 bg-gray-200 p-2 rounded outline-none"
                type="text"
                readOnly
                defaultValue={surveyDetails?.enterprise.name}
              />
            </div>
            <div className="mt-10 flex gap-4 items-center place-content-center">
              <span className="w-36 sm:w-44 text-start">Seccion: </span>
              <input
                className="sm:w-52 w-36 bg-gray-200 p-2 rounded outline-none"
                type="text"
                readOnly
                defaultValue={surveyDetails?.section}
              />
            </div>
            <div className="mt-10 flex gap-4 items-center place-content-center">
              <span className="w-36 sm:w-44 text-start">Fecha de Inicio: </span>
              <input
                className="sm:w-52 w-36 bg-gray-200 p-2 rounded outline-none"
                type="date"
                readOnly
                defaultValue={surveyDetails?.startDate}
              />
            </div>
            <div className="mt-10 flex gap-4 items-center place-content-center">
              <span className="w-36 sm:w-44 text-start">
                Empresa Solicitante:
              </span>
              <input
                className="sm:w-52 w-36 bg-gray-200 p-2 rounded outline-none"
                type="date"
                readOnly
                defaultValue={surveyDetails?.endDate}
              />
            </div>
          </div>
          <div className="max-w-4xl w-full text-center bg-white  shadow px-5 py-10 rounded-lg ">
            <div className="lg:flex justify-between">
              <h2 className=" text-left font-medium text-2xl">
                Listado de Personas:
              </h2>
              <Link to={`/encuestas/${surveyDetails?.id}`} className="flex">
                <span className="p-2 text-sm bg-gray-600 rounded text-white max-lg:mt-4 w-full">
                  Agregar personas
                </span>
              </Link>
            </div>
            <div className="overflow-y-auto  h-96">
              <table className="w-full mt-10 p-4">
                <thead className="justify-between border-y border-gray-600">
                  <tr className="text-gray-400">
                    <th className="p-2">ID</th>
                    <th>Nombres</th>
                    <th>Apellidos</th>
                    <th>Estado</th>
                  </tr>
                </thead>
                <tbody>
                  {surveyDetails?.survey_programming_person.map((survey) => (
                    <tr
                      className="even:bg-white odd:bg-gray-100"
                      key={survey.person?.id}
                    >
                      <td className="p-2">
                        <Link to={`/encuestas/person/${survey.id}`}>
                          {survey.person?.id}
                        </Link>
                      </td>
                      <td>{survey.person?.name}</td>
                      <td>{survey.person?.lastName}</td>
                      <td>
                        {survey.state?.id == 2 ? (
                          <div className="w-5 h-5 rounded-full bg-red-500 m-auto"></div>
                        ) : (
                          <div className="w-5 h-5 rounded-full bg-green-500 m-auto"></div>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SurveysDetail;
