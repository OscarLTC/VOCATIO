import { surveyProgrammingState } from '../../store/surveyProgramming/surveyProgramming.atom';
import { SurveyProgramming } from '../../models/surveyProgramming.model';
import { HiDocumentDownload, HiDocumentSearch } from 'react-icons/hi';
import { environment } from '../../../environments/environment';
import { Enterprise } from '../../models/enterprise.model';
import { useEffectOnce } from 'react-use';
import { useForm } from 'react-hook-form';
import { useRecoilState } from 'recoil';
import Select from 'react-select';
import { useState } from 'react';
import axios from 'axios';
import { onExportarClick } from '../../utils/exportExcel';

export const ReportForm = () => {
  const [entreprises, setEnterprises] = useState<Array<Enterprise>>();
  const [surveys, setSurveys] = useState<Array<SurveyProgramming>>([]);
  const [surveysData, setSurveysData] = useRecoilState(surveyProgrammingState);

  const [isDisabled, setIsDisabled] = useState(true);

  const { register, setValue, handleSubmit, watch } = useForm({
    defaultValues: {
      enterprise_id: '',
      surveyEnterprise_id: '',
    },
  });

  const exportId = watch('surveyEnterprise_id');

  const onEnterpriseChange = (selectedOption: any) => {
    setIsDisabled(true);
    setSurveysData(null);
    setValue('enterprise_id', selectedOption?.value);
    axios
      .get(
        `${environment.apiUrl}/surveyProgramming/enterprise/${selectedOption.value}`
      )
      .then((res) => setSurveys(res.data));
  };

  const onSurveyEnterpriseChange = (selectedOption: any) => {
    setSurveysData(null);
    setIsDisabled(true);
    setValue('surveyEnterprise_id', selectedOption?.value);
  };

  const onSubmit = (data: any) => {
    const selectedSurvey = surveys.find(
      (survey) => survey.id === data.surveyEnterprise_id
    );
    if (selectedSurvey) {
      setSurveysData(selectedSurvey);
      setIsDisabled(false);
    }
  };

  useEffectOnce(() => {
    if (!entreprises) {
      const getEnterprises = () => {
        axios.get(`${environment.apiUrl}/enterprise/all`).then((res) => {
          setEnterprises(
            res.data
              .sort((a: Enterprise, b: Enterprise) => a.id - b.id)
              .map((a: Enterprise) => {
                return { id: a.id, name: a.name };
              })
          );
        });
      };
      getEnterprises();
    }
  });

  return (
    <form
      className="w-fit bg-white  shadow px-4 py-4 rounded-lg"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="md:flex gap-4 ">
        <div>
          <div className="sm:flex gap-1 items-center text-left">
            <span className="w-24 text-start">Empresa:</span>
            <Select
              styles={{
                control: (baseStyles) => ({
                  ...baseStyles,
                  textAlign: 'left',
                  backgroundColor: 'transparent',
                  borderColor: 'transparent',
                }),
                option: (provided) => ({
                  ...provided,
                  textAlign: 'left',
                }),
              }}
              className="w-full sm:w-[300px] bg-gray-200 rounded outline-none max-sm:mt-4"
              id="enterprise_id"
              {...register('enterprise_id', { required: true })}
              options={entreprises?.map((enterprise: any) => ({
                value: enterprise.id,
                label: enterprise.name,
              }))}
              onChange={onEnterpriseChange}
            />
          </div>
          <div className="sm:flex gap-1 mt-5 items-center  text-left">
            <span className="w-24 text-start">Encuesta:</span>
            <Select
              styles={{
                control: (baseStyles) => ({
                  ...baseStyles,
                  textAlign: 'left',
                  backgroundColor: 'transparent',
                  borderColor: 'transparent',
                }),
                option: (provided) => ({
                  ...provided,
                  textAlign: 'left',
                }),
              }}
              className="w-full sm:w-[300px] bg-gray-200 rounded outline-none max-sm:mt-4"
              id="surveyEnterprise_id"
              {...register('surveyEnterprise_id', { required: true })}
              options={surveys
                .sort((a, b) => b.id - a.id)
                .map((survey: SurveyProgramming) => ({
                  value: survey.id,
                  label: `${survey.id} - ${survey.name} - ${survey.section} - ${survey.survey.name}`,
                }))}
              onChange={onSurveyEnterpriseChange}
            />
          </div>
        </div>
        <div className="flex self-end gap-2 mt-4 md:mt-0 text-white">
          <button className="py-2 px-4 rounded bg-yellow-400 h-fit flex">
            <HiDocumentSearch className="self-center mr-2" size={25} />
            <span>Ver Estado</span>
          </button>
          <button
            type="button"
            onClick={() =>
              surveysData && onExportarClick(exportId, surveysData)
            }
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
  );
};
