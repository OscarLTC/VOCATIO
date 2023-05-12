import { useForm } from 'react-hook-form';
import './reports-view.scss';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { enterpriseState } from '../../store/enterprise/enterprise.atom';
import axios from 'axios';
import { environment } from '../../../environments/environment';
import { Enterprise } from '../../models/enterprise.model';
import { AiOutlineDownSquare } from 'react-icons/ai';
import { SurveyEnterprise } from '../../models/surveyEnterprise.model';
import { Link } from 'react-router-dom';
import { error } from 'console';

/* eslint-disable-next-line */
export interface ReportsViewProps {}

export function ReportsView(props: ReportsViewProps) {
  const [entreprises, setEnterprises] = useRecoilState(enterpriseState);
  const [surveys, setSurveys] = useState<Array<SurveyEnterprise>>([]);
  const [surveysData, setSurveysData] = useState<SurveyEnterprise>();

  const {
    register,
    setValue,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      enterprise_id: '',
      surveyEnterprise_id: '',
    },
  });

  const onEnterpriseChange = (id: string) => {
    axios
      .get(`${environment.apiUrl}/surveyEnterprise/enterprise/${id}`)
      .then((res) => setSurveys(res.data));
  };

  const onSubmit = (data: any) => {
    setSurveysData(surveys.find((a) => a.id == data.surveyEnterprise_id));
  };

  useEffect(() => {
    if (!entreprises) {
      const getEnterprises = () => {
        axios.get(`${environment.apiUrl}/enterprise/all`).then((res) => {
          setEnterprises(res.data.sort((a: any, b: any) => a.id - b.id));
        });
      };
      getEnterprises();
    }
  }, []);

  return (
    <div className="my-8">
      <h1 className="text-4xl px-4 text-left ">Reportes</h1>
      <div className="p-4 mt-5">
        <form
          className="w-fit bg-white  shadow px-4 py-4 rounded-lg"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex gap-4 ">
            <div>
              <div className="flex gap-4 items-center ">
                <span className="w-44 text-start">Empresa:</span>
                <select
                  {...register('enterprise_id', { required: true })}
                  className={`w-[500px] bg-gray-200 p-2 rounded outline-none ${
                    errors.enterprise_id && 'ring-1 ring-red-500'
                  }`}
                  defaultValue={'enterprise_id'}
                  onChange={(e) => {
                    onEnterpriseChange(e.target.value);
                    setValue('enterprise_id', e.target.value, {
                      shouldValidate: true,
                    });
                  }}
                >
                  {entreprises?.map((enterprise: Enterprise) => (
                    <option key={enterprise.id} value={enterprise.id}>
                      {enterprise.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex gap-4 mt-5 items-center ">
                <span className="w-44 text-start">Encuesta:</span>
                <select
                  {...register('surveyEnterprise_id', { required: true })}
                  className={`w-[500px] bg-gray-200 p-2 rounded outline-none `}
                >
                  {surveys.map((survey: SurveyEnterprise) => (
                    <option key={survey.id} value={survey.id}>
                      {`${survey.id} - ${survey.name} - ${survey.section} - ${survey.survey.name}`}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="flex self-end gap-2 text-white">
              <button className="py-2 px-4 rounded bg-yellow-400 h-fit flex">
                <AiOutlineDownSquare className="self-center mr-2" size={25} />
                <span>Ver Estado</span>
              </button>
              <button
                type="button"
                onClick={() => console.log(12)}
                className="py-2 px-4 rounded bg-green-400 h-fit flex"
              >
                <AiOutlineDownSquare className="self-center mr-2" size={25} />
                <span>Exportar encuestas</span>
              </button>
            </div>
          </div>
        </form>

        {surveysData && (
          <table className="w-full mt-10 p-4">
            <thead className="justify-between border-y border-gray-600">
              <tr className="text-gray-400">
                <th className="p-2">Nombre</th>
                <th>Estado</th>
              </tr>
            </thead>
            <tbody>
              {surveysData?.survey_enterprise_persons.map((survey) => (
                <tr
                  className="even:bg-white odd:bg-gray-100"
                  key={survey.person.id}
                >
                  <td>
                    {survey.person.name} {survey.person.lastName}
                  </td>
                  <td>
                    {parseInt(survey.state.id) == 2 ? (
                      <div className="w-5 h-5 rounded-full bg-red-500 m-auto"></div>
                    ) : (
                      <div className="w-5 h-5 rounded-full bg-green-500 m-auto"></div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default ReportsView;
