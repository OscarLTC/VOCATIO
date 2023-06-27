import { useForm } from 'react-hook-form';
import { useEffectOnce } from 'react-use';
import './reports-view.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { environment } from '../../../environments/environment';
import { Enterprise } from '../../models/enterprise.model';
import { HiDocumentDownload, HiDocumentSearch } from 'react-icons/hi';
import { SurveyProgramming } from '../../models/surveyProgramming.model';
import Select from 'react-select';
import ReportsChart from '../reports-chart/reports-chart';
import Enterprises from '../../enterprises/enterprises';

/* eslint-disable-next-line */
export interface ReportsViewProps {}

export function ReportsView(props: ReportsViewProps) {
  const [entreprises, setEnterprises] = useState<Array<Enterprise>>();
  const [surveys, setSurveys] = useState<Array<SurveyProgramming>>([]);
  const [surveysData, setSurveysData] = useState<SurveyProgramming | null>();
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

  const onEnterpriseChange = (selectedOption: any) => {
    setValue('enterprise_id', selectedOption?.value);
    axios
      .get(
        `${environment.apiUrl}/surveyProgramming/enterprise/${selectedOption.value}`
      )
      .then((res) => setSurveys(res.data));
  };

  const onSurveyEnterpriseChange = (selectedOption: any) => {
    setSurveysData(null);
    setValue('surveyEnterprise_id', selectedOption?.value);
  };

  const onExportarClick = (id: string) => {
    axios
      .post(
        `${environment.apiUrl}/surveyProgramming/${id}/export`,
        {
          domain: environment.surveyDomain,
        },
        { responseType: 'blob' }
      )
      .then((res) => {
        const file = new Blob([res.data], { type: 'application/vnd.ms-excel' });
        const fileUrl = URL.createObjectURL(file);
        const link = document.createElement('a');
        link.href = fileUrl;
        link.download = `${surveysData?.enterprise.name}_${surveysData?.id}_${surveysData?.name}_${surveysData?.survey.name}_${surveysData?.section}.xlsx`;
        document.body.appendChild(link);
        link.click();
      });
  };

  const onSubmit = (data: any) => {
    setSurveysData(surveys.find((a) => a.id == data.surveyEnterprise_id));
    setIsDisabled(false);
  };

  useEffectOnce(() => {
    if (!entreprises) {
      const getEnterprises = () => {
        axios.get(`${environment.apiUrl}/enterprise/all`).then((res) => {
          setEnterprises(
            res.data
              .sort((a: any, b: any) => a.id - b.id)
              .map((a: any) => {
                return { id: a.id, name: a.name };
              })
          );
        });
      };
      getEnterprises();
    }
  });

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
                <Select
                  styles={{
                    control: (baseStyles, state) => ({
                      ...baseStyles,
                      textAlign: 'left',
                      backgroundColor: 'transparent',
                      borderColor: 'transparent',
                    }),
                    option: (provided, state) => ({
                      ...provided,
                      textAlign: 'left',
                    }),
                  }}
                  className="w-[500px] bg-gray-200 rounded outline-none"
                  id="enterprise_id"
                  {...register('enterprise_id', { required: true })}
                  options={entreprises?.map((enterprise: any) => ({
                    value: enterprise.id,
                    label: enterprise.name,
                  }))}
                  onChange={onEnterpriseChange}
                />
              </div>
              <div className="flex gap-4 mt-5 items-center ">
                <span className="w-44 text-start">Encuesta:</span>
                <Select
                  styles={{
                    control: (baseStyles, state) => ({
                      ...baseStyles,
                      textAlign: 'left',
                      backgroundColor: 'transparent',
                      borderColor: 'transparent',
                    }),
                    option: (provided, state) => ({
                      ...provided,
                      textAlign: 'left',
                    }),
                  }}
                  className="w-[500px] bg-gray-200 rounded outline-none"
                  id="surveyEnterprise_id"
                  {...register('surveyEnterprise_id', { required: true })}
                  options={surveys.map((survey: SurveyProgramming) => ({
                    value: survey.id,
                    label: `${survey.id} - ${survey.name} - ${survey.section} - ${survey.survey.name}`,
                  }))}
                  onChange={onSurveyEnterpriseChange}
                />
              </div>
            </div>
            <div className="flex self-end gap-2 text-white">
              <button className="py-2 px-4 rounded bg-yellow-400 h-fit flex">
                <HiDocumentSearch className="self-center mr-2" size={25} />
                <span>Ver Estado</span>
              </button>
              <button
                type="button"
                onClick={() => onExportarClick(exportId)}
                disabled={isDisabled}
                className={`py-2 px-4 rounded h-fit flex ${
                  isDisabled ? 'bg-gray-300' : 'bg-green-600'
                }`}
              >
                <HiDocumentDownload className="self-center mr-2" size={25} />
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
                    {surveysData.survey_programming_person.length}
                  </span>
                </p>
                <div className="w-8 h-8 ml-8 bg-green-600 rounded-full"></div>
                <span>
                  {
                    surveysData?.survey_programming_person.filter(
                      (a) => a.state.id === 3
                    ).length
                  }
                </span>
                <div className="w-8 h-8 ml-2 bg-red-600 rounded-full"></div>
                <span>
                  {
                    surveysData?.survey_programming_person.filter(
                      (a) => a.state.id === 2
                    ).length
                  }
                </span>
              </div>
              <div className="flex items-center ml-2  font-bold gap-2 h-fit bg-neutral-200 p-2 rounded self-center">
                <p className="uppercase">
                  <span className="ml-2">
                    {(
                      (surveysData?.survey_programming_person.filter(
                        (a) => a.state.id === 3
                      ).length /
                        surveysData.survey_programming_person.length) *
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
                  <th className="p-2">ID</th>
                  <th className="p-2">Nombre</th>
                  <th>Estado</th>
                  <th>Reporte</th>
                </tr>
              </thead>
              <tbody>
                {surveysData?.survey_programming_person
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
                      <td className="w-20"> {survey.person.id}</td>
                      <td className="w-96">
                        {survey.person.name} {survey.person.lastName}
                      </td>
                      <td className="w-20">
                        {survey.state.id == 2 ? (
                          <div className="w-5 h-5 rounded-full bg-red-500 m-auto"></div>
                        ) : (
                          <div className="w-5 h-5 rounded-full bg-green-600 m-auto"></div>
                        )}
                      </td>
                      {/* <td>
                        <Link to={`/reportes/pdf/${survey.id}`}>PDF </Link>
                      </td> */}
                      <td className="">
                        {survey.state.id == 3 ? (
                          <ReportsChart
                            pdfId={survey.id}
                            surveyId={surveysData.survey.id}
                          />
                        ) : (
                          ''
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
