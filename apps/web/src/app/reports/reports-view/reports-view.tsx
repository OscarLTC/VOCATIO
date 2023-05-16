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

/* eslint-disable-next-line */
export interface ReportsViewProps {}

export function ReportsView(props: ReportsViewProps) {
  const [entreprises, setEnterprises] = useRecoilState(enterpriseState);
  const [surveys, setSurveys] = useState<Array<SurveyEnterprise>>([]);
  const [surveysData, setSurveysData] = useState<SurveyEnterprise>();
  const [searchText, setSearchText] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);

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

  const exportId = watch('surveyEnterprise_id');

  const onEnterpriseChange = (id: string) => {
    axios
      .get(`${environment.apiUrl}/surveyEnterprise/enterprise/${id}`)
      .then((res) => setSurveys(res.data));
  };

  const onExportarClick = (id: string) => {
    axios
      .post(
        `${environment.apiUrl}/surveyEnterprise/${id}/export`,
        {
          domain: environment.surveyDomain,
        },
        { responseType: 'blob' }
      )
      .then((res) => {
        const file = new Blob([res.data], { type: 'application/vnd.ms-excel' }); // Crea un Blob a partir de la respuesta
        const fileUrl = URL.createObjectURL(file); // Crea un objeto URL a partir del blob
        const link = document.createElement('a'); // Crea un enlace de descarga
        link.href = fileUrl; // Establece el href del enlace como el objeto URL
        link.download = 'survey-enterprise-persons.xlsx'; // Establece el nombre de archivo
        document.body.appendChild(link); // Agrega el enlace al DOM
        link.click(); // Hace clic en el enlace para iniciar la descarga
      });
  };

  const onSubmit = (data: any) => {
    setSurveysData(surveys.find((a) => a.id == data.surveyEnterprise_id));
    setIsDisabled(false);
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
                onClick={() => onExportarClick(exportId)}
                disabled={isDisabled}
                className={`py-2 px-4 rounded h-fit flex ${
                  isDisabled ? 'bg-gray-300' : 'bg-green-400'
                }`}
              >
                <AiOutlineDownSquare className="self-center mr-2" size={25} />
                <span>Exportar links</span>
              </button>
            </div>
          </div>
        </form>
        {surveysData && (
          <div className="mt-10 ">
            <div className="text-left flex">
              <input
                type="text"
                placeholder="Nombre / Apellido"
                className="my-4 w-80 bg-gray-200 ring-1 ring-black p-2 rounded outline-none"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
              <div className="flex items-center ml-10 font-bold gap-2 h-fit bg-neutral-200 p-2 rounded self-center">
                <p className="uppercase">
                  Total:
                  <span className="ml-2 ">
                    {surveysData.survey_enterprise_persons.length}
                  </span>
                </p>
                <div className="w-8 h-8 ml-8 bg-green-600 rounded-full"></div>
                <span>
                  {
                    surveysData?.survey_enterprise_persons.filter(
                      (a) => parseInt(a.state.id) === 3
                    ).length
                  }
                </span>
                <div className="w-8 h-8 ml-2 bg-red-600 rounded-full"></div>
                <span>
                  {
                    surveysData?.survey_enterprise_persons.filter(
                      (a) => parseInt(a.state.id) === 2
                    ).length
                  }
                </span>
              </div>
              <div className="flex items-center ml-2  font-bold gap-2 h-fit bg-neutral-200 p-2 rounded self-center">
                <p className="uppercase">
                  <span className="ml-2">
                    {(
                      (surveysData?.survey_enterprise_persons.filter(
                        (a) => parseInt(a.state.id) === 3
                      ).length /
                        surveysData.survey_enterprise_persons.length) *
                      100
                    ).toFixed(1)}
                    %
                  </span>
                </p>
              </div>
            </div>
            <table className="w-full p-4">
              <thead className="justify-between border-y border-gray-600">
                <tr className="text-gray-400">
                  <th className="p-2">Nombre</th>
                  <th>Estado</th>
                </tr>
              </thead>
              <tbody>
                {surveysData?.survey_enterprise_persons
                  .filter((survey) => {
                    const searchTerms = searchText
                      .toLocaleLowerCase()
                      .split(' ');
                    const fullName = `${survey.person.name} ${survey.person.lastName}`;
                    return searchTerms.every((term) =>
                      fullName.toLocaleLowerCase().includes(term)
                    );
                  })
                  .map((survey) => (
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
          </div>
        )}
      </div>
    </div>
  );
}

export default ReportsView;
