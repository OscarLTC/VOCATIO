import { useRecoilState, useSetRecoilState } from 'recoil';
import './surveys-form.scss';
import { surveysState } from '../../store/survey/survey.atom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { environment } from '../../../environments/environment';
import { enterpriseState } from '../../store/enterprise/enterprise.atom';
import toast, { Toaster } from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { RiFileExcel2Fill } from 'react-icons/ri';
import { surveysEnterpriseState } from '../../store/surveysEnterprise/surveysEnterprise.atom';
import { Enterprise } from '../../models/enterprise.model';
import { stateState } from '../../store/state/state.atom';
import { State } from '../../models/state.model';

import 'filepond/dist/filepond.min.css';
import { Person } from '../../models/person.model';
import { peopleState } from '../../store/people/people.atom';

/* eslint-disable-next-line */
export interface SurveysFormProps {
  formState: number;
}

export function SurveysForm(props: SurveysFormProps) {
  const [surveys, setSurveys] = useRecoilState(surveysState);
  const [enterprises, setEnterprises] = useRecoilState(enterpriseState);
  const [states, setStates] = useRecoilState(stateState);
  const setSurveysEnterprises = useSetRecoilState(surveysEnterpriseState);
  const setPeople = useSetRecoilState(peopleState);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const onFileChange = (event: any) => {
    console.log(event.target.files);
    setSelectedFile(event.target.files[0]);
  };
  const getCustomDate = (months = 0) => {
    const currentDate = new Date();

    currentDate.setMonth(currentDate.getMonth() + months);

    const yearEnd = currentDate.getFullYear();
    const monthEnd = String(currentDate.getMonth() + 1).padStart(2, '0');
    const dayEnd = String(currentDate.getDate()).padStart(2, '0');
    const formattedEndDate = `${yearEnd}-${monthEnd}-${dayEnd}`;

    return formattedEndDate;
  };

  const {
    register,
    setValue,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
      section: '',
      startDate: getCustomDate(),
      endDate: getCustomDate(1),
      survey_id: 1,
      enterprise_id: 1,
      state_id: 1,
    },
  });

  const watchStartDate = watch('startDate');
  const watchEterpriseId = watch('enterprise_id');

  const getSurveys = async () => {
    await axios
      .get(`${environment.apiUrl}/survey/all`)
      .then((res) => setSurveys(res.data));
  };

  const getEnterprises = async () => {
    await axios
      .get(`${environment.apiUrl}/enterprise/all`)
      .then((res) => setEnterprises(res.data));
  };

  const getStates = async () => {
    await axios
      .get(`${environment.apiUrl}/state/all`)
      .then((res) => setStates(res.data));
  };

  const { id } = useParams();
  const navigate = useNavigate();

  const onSubmit = async (data: any) => {
    if (props.formState == 1) {
      setIsLoaded(true);
      if (!selectedFile) {
        console.log('No se ha seleccionado ningún archivo');
        return;
      }
      const formData = new FormData();
      formData.append('file', selectedFile);
      try {
        const formData = new FormData();
        formData.append('excel_file', selectedFile);
        formData.append('file_name', selectedFile);

        await axios
          .post(
            `${environment.apiUrl}/person/import/${watchEterpriseId}`,
            formData,
            {
              headers: {
                'Content-Type': 'multipart/form-data',
              },
            }
          )
          .then((res) => {
            send_data(
              props.formState,
              data,
              res.data.map((p: Person) => p.id)
            );
            setPeople(null);
            setSelectedFile(null);
          })
          .catch((err) => {
            toast.remove();
            toast.error('No se pudo programar la encuesta');
          });
      } catch (error) {
        setIsLoaded(false);

        console.error(error);
      }
    } else {
      send_data(props.formState, data);
    }
  };

  const send_data = async (
    value: number,
    surveyEnterprise: any,
    surveyEnterprisePersonIds?: any
  ) => {
    if (value === 1) {
      toast.loading('Programando encuesta');
      await axios
        .post(`${environment.apiUrl}/surveyEnterprise/save`, {
          ...surveyEnterprise,
          surveyEnterprisePersonIds,
        })
        .then(() => {
          toast.remove();
          toast.success('Encuesta programada');
          reset();
          setIsLoaded(false);
          navigate('/encuestas');
        })
        .catch(() => {
          setIsLoaded(false);

          toast.error('No se pudo programar la encuesta');
        });
    } else if (value === 2) {
      toast.loading('Actializando encuesta');
      await axios
        .put(`${environment.apiUrl}/surveyEnterprise/${id}`, surveyEnterprise)
        .then(() => {
          reset();
          toast.remove();
          setIsLoaded(false);
          toast.success('Datos actualizados');
          navigate('/encuestas');
        })
        .catch(() => {
          toast.remove();
          toast.error('Error al actualizar');
          setIsLoaded(false);
        });
    }
    setSurveysEnterprises(null);
  };

  const onDownloadClick = () => {
    const fileUrl = '/doc/importar-personas.xlsx';
    window.open(fileUrl, '_blank');
  };

  useEffect(() => {
    if (props.formState === 2) {
      const getSurveyEnterprise = async () => {
        await axios
          .get(`${environment.apiUrl}/surveyEnterprise/${id}`)
          .then((res) => {
            setValue('name', res.data.name);
            setValue('section', res.data.section);
            setValue('startDate', res.data.startDate);
            setValue('endDate', res.data.endDate);
            setValue('survey_id', res.data.survey.id);
            setValue('enterprise_id', res.data.enterprise.id);
            setValue('state_id', res.data.state.id);
          });
      };
      getSurveyEnterprise();
    }

    if (!surveys) {
      getSurveys();
    }
    if (!enterprises) {
      getEnterprises();
    }
    if (!states) {
      getStates();
    }
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-4xl ">
        {props.formState === 1
          ? 'Crear Programación de Encuesta'
          : 'Actualizar Programación de Encuesta'}
      </h1>
      <div className="mt-10 flex justify-center gap-10">
        <form
          className="max-w-xl bg-white  shadow px-10 py-10 rounded-lg"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex gap-4 items-center place-content-center">
            <span className="w-44 text-start">Nombre de encuesta:</span>
            <input
              {...register('name', {
                required: true,
                pattern: /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ0-9\s]+$/,
              })}
              className={`w-52 bg-gray-200 p-2 rounded outline-none ${
                errors.name && 'outline-red-400 outline-1'
              }`}
              type="text"
              placeholder="Encuesta 1"
            />
          </div>
          <div className="flex gap-4 items-center mt-5  place-content-center">
            <span className="w-44 text-start">Sección:</span>
            <input
              {...register('section', {
                required: true,
                pattern: /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ0-9\s]+$/,
              })}
              className={`w-52 bg-gray-200 p-2 rounded outline-none ${
                errors.name && 'outline-red-400 outline-1'
              }`}
              type="text"
              placeholder="5A"
            />
          </div>

          {props.formState == 1 ? (
            <>
              <div className="flex gap-4 items-center mt-5 place-content-center">
                <span className="w-44 text-start">Encuesta:</span>
                <select
                  {...register('survey_id', { required: true })}
                  defaultValue={'survey_id'}
                  className="bg-gray-200 py-2 w-52 px-2 rounded outline-none"
                >
                  {surveys?.map((survey: Enterprise) => (
                    <option key={survey.id} value={survey.id}>
                      {survey.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex gap-4 items-center mt-5 place-content-center">
                <span className="w-44 text-start">Empresa:</span>
                <select
                  {...register('enterprise_id', { required: true })}
                  defaultValue={'enterprise_id'}
                  className="bg-gray-200 py-2 w-52 px-2 rounded outline-none"
                >
                  {enterprises?.map((enterprise: Enterprise) => (
                    <option key={enterprise.id} value={enterprise.id}>
                      {enterprise.name}
                    </option>
                  ))}
                </select>
              </div>
            </>
          ) : (
            ''
          )}
          <div className="flex gap-4 items-center mt-5 place-content-center">
            <span className="w-44 text-start">Fecha de Inicio:</span>
            <input
              {...register('startDate', {
                required: true,
              })}
              className={`w-52 bg-gray-200 p-2 rounded outline-none ${
                errors.startDate && 'outline-red-400 outline-1'
              }`}
              type="date"
              placeholder={getCustomDate()}
            />
          </div>
          <div className="flex gap-4 items-center mt-5 place-content-center">
            <span className="w-44 text-start">Fecha de Fin:</span>
            <input
              {...register('endDate', {
                required: true,
              })}
              className={`w-52 bg-gray-200 p-2 rounded outline-none ${
                errors.endDate && 'outline-red-400 outline-1'
              }`}
              type="date"
              min={watchStartDate}
              placeholder={getCustomDate(1)}
            />
          </div>
          {props.formState == 2 ? (
            <div className="flex gap-4 items-center mt-5 place-content-center">
              <span className="w-44 text-start">Estado:</span>
              <select
                {...register('state_id', { required: true })}
                defaultValue={'state_id'}
                className="bg-gray-200 py-2 w-52 px-2 rounded outline-none"
              >
                {states?.map((state: State) => (
                  <option key={state.id} value={state.id}>
                    {state.name}
                  </option>
                ))}
              </select>
            </div>
          ) : (
            ''
          )}
          {props.formState == 1 ? (
            <div className="">
              <div className="flex flex-col justify-between space-y-4 mt-10">
                <div className="flex justify-between">
                  <h2 className="text-lg font-medium text-left self-center">
                    Seleccione el archivo:
                  </h2>
                  <button
                    onClick={onDownloadClick}
                    className="flex text-white align-middle gap-10 w-fit p-3 bg-[#217346] rounded"
                  >
                    <RiFileExcel2Fill color="#fff" size={24} />
                  </button>
                </div>
                <div className="text-center">
                  <input
                    type="file"
                    accept=".xlsx, .xls"
                    onChange={onFileChange}
                    className="hidden"
                    id="file-input"
                  />
                  <label
                    htmlFor="file-input"
                    className="block w-full px-4 py-2 bg-gray-200 text-gray-700 rounded-lg cursor-pointer hover:bg-gray-300"
                  >
                    {selectedFile ? selectedFile.name : 'Elegir archivo'}
                  </label>
                </div>
              </div>
            </div>
          ) : (
            ''
          )}
          <div className="flex justify-around mt-6 gap-4">
            <Link to="/encuestas">
              <button className="rounded-lg bg-[#e26e6e] py-1 px-4 text-white hover:bg-[#c55757]">
                Regresar
              </button>
            </Link>
            <button
              disabled={props.formState == 1 ? !selectedFile : false}
              className={`rounded-lg py-1 px-4 text-white  ${
                !selectedFile && props.formState == 1
                  ? 'bg-[#bae7d8]'
                  : 'bg-[#57c5a0] hover:bg-[#518b7e]'
              } `}
            >
              {props.formState === 1 ? 'Crear' : ' Actualizar'}
            </button>
          </div>
        </form>
      </div>
      <Toaster position="bottom-right" />
    </div>
  );
}

export default SurveysForm;
