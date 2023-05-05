import { useEffect, useState } from 'react';
import './surveys-detail.scss';
import axios from 'axios';
import { environment } from '../../../environments/environment';
import { useParams } from 'react-router-dom';
import { SurveyEnterprise } from '../../models/surveyEnterprise';
import { SurveyEnterprisePersons } from '../../models/surveyEnterprisePersons';

/* eslint-disable-next-line */
export interface SurveysDetailProps {}

export function SurveysDetail(props: SurveysDetailProps) {
  const [surveyDetails, setSurveyDetails] = useState<SurveyEnterprise>();

  console.log(surveyDetails);
  const { id } = useParams();

  console.log(surveyDetails);

  useEffect(() => {
    axios
      .get(`${environment.apiUrl}/surveyEnterprise/${id}`)
      .then((res) => setSurveyDetails(res.data));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-5xl">
        Detalle de la Encuesta: {surveyDetails ? surveyDetails?.id : 0}
      </h1>
      <div className="p-8">
        <div className="mt-24 flex justify-center gap-10">
          <div className="max-w-2xl bg-white  shadow px-5 py-10 rounded-lg text-left">
            <h2 className=" text-left font-medium text-2xl">
              {surveyDetails?.name}
            </h2>
            <div className="mt-10 flex gap-4 items-center place-content-center">
              <span className="w-44 text-start">Tipo de Encuesta: </span>
              <input
                className="w-52 bg-gray-200 p-2 rounded outline-none"
                type="text"
                readOnly
                defaultValue={surveyDetails?.survey.name}
              />
            </div>
            <div className="mt-10 flex gap-4 items-center place-content-center">
              <span className="w-44 text-start">Empresa Solicitante: </span>
              <input
                className="w-52 bg-gray-200 p-2 rounded outline-none"
                type="text"
                readOnly
                defaultValue={surveyDetails?.enterprise.name}
              />
            </div>
            <div className="mt-10 flex gap-4 items-center place-content-center">
              <span className="w-44 text-start">Seccion: </span>
              <input
                className="w-52 bg-gray-200 p-2 rounded outline-none"
                type="text"
                readOnly
                defaultValue={surveyDetails?.enterprise.contactName}
              />
            </div>
            <div className="mt-10 flex gap-4 items-center place-content-center">
              <span className="w-44 text-start">Fecha de Inicio: </span>
              <input
                className="w-52 bg-gray-200 p-2 rounded outline-none"
                type="date"
                readOnly
                defaultValue={surveyDetails?.startDate}
              />
            </div>
            <div className="mt-10 flex gap-4 items-center place-content-center">
              <span className="w-44 text-start">Empresa Solicitante: </span>
              <input
                className="w-52 bg-gray-200 p-2 rounded outline-none"
                type="date"
                readOnly
                defaultValue={surveyDetails?.endDate}
              />
            </div>
          </div>
          <div className="max-w-2xl w-full text-center bg-white  shadow px-5 py-10 rounded-lg ">
            <h2 className=" text-left font-medium text-2xl">
              Listado de Personas:
            </h2>
            <table className="w-full mt-10 p-4">
              <thead className="justify-between border-y border-gray-600">
                <tr className="text-gray-400">
                  <th className="p-2">ID</th>
                  <th>Nombres</th>
                  <th>Apellidos</th>
                  <th>Sexo</th>
                </tr>
              </thead>
              <tbody>
                {surveyDetails?.survey_enterprise_persons.map((survey) => (
                  <tr
                    className="even:bg-white odd:bg-gray-100"
                    key={survey.person.id}
                  >
                    <td className="p-2">{survey.person.id}</td>
                    <td>{survey.person.name}</td>
                    <td>{survey.person.lastName}</td>
                    <td className="capitalize">{survey.person.genre.name}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SurveysDetail;
