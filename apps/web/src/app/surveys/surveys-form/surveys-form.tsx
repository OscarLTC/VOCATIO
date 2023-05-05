import { useRecoilState, useSetRecoilState } from 'recoil';
import './surveys-form.scss';
import { surveysState } from '../../store/survey/survey.atom';
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { environment } from '../../../environments/environment';
import { enterpriseState } from '../../store/enterprise/enterprise.atom';
import toast, { Toaster } from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import { Link, useParams } from 'react-router-dom';
import { RiFileExcel2Fill } from 'react-icons/ri';
import { surveysEnterpriseState } from '../../store/surveysEnterprise/surveysEnterprise.atom';
import { Enterprise } from '../../models/enterprise.model';
import { stateState } from '../../store/state/state.atom';
import { State } from '../../models/state.model';
import { FilePond } from 'react-filepond';

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
  const [isValid, setIsValid] = useState(false);
  const [peopleData, setPeopleData] = useState<Array<Person> | null>(null);
  const [peopleIds, setPeopleIds] = useState<Array<number> | null>(null);

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

  const onSubmit = (data: any) => {
    send_data(props.formState, data);
  };

  const send_data = async (value: number, surveyEnterprise: any) => {
    if (value === 1) {
      toast.loading('Programando encuesta');
      await axios
        .post(`${environment.apiUrl}/surveyEnterprise/save`, {
          ...surveyEnterprise,
          surveyEnterprisePersonIds: peopleIds,
        })
        .then(() => {
          toast.remove();
          toast.success('Encuesta programada');
          reset();
        });
    } else if (value === 2) {
      toast.loading('Actializando encuesta');
      await axios
        .put(`${environment.apiUrl}/surveyEnterprise/${id}`, surveyEnterprise)
        .then(() => {
          reset();
          toast.remove();
          toast.success('Datos actualizados');
        })
        .catch(() => {
          toast.remove();
          toast.error('Error al actualizar');
        });
    }
    setSurveysEnterprises(null);
  };

  //import people from
  const onDownloadClick = () => {
    const fileUrl = '/doc/importar-personas.xlsx';
    window.open(fileUrl, '_blank');
  };

  const onImportClick = async () => {
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
          setIsValid(true);
          setPeopleData(res.data);
          setPeopleIds(res.data.map((p: Person) => p.id));
          setPeople(null);
          setSelectedFile(null);
        });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (props.formState === 2) {
      const getSurveyEnterprise = async () => {
        await axios
          .get(`${environment.apiUrl}/surveyEnterprise/${id}`)
          .then((res) => {
            setValue('name', res.data.name);
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
      <h1 className="text-5xl ">
        {props.formState === 1
          ? 'Crear Programación de Encuesta'
          : 'Actualizar Programación de Encuesta'}
      </h1>
      <div className="mt-24 flex justify-center gap-10">
        <form
          className="max-w-xl bg-white  shadow px-5 py-10 rounded-lg"
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
          <div className="flex justify-around mt-10 gap-4">
            <Link to="/encuestas">
              <button className="rounded-lg bg-[#e26e6e] py-1 px-4 text-white hover:bg-[#c55757]">
                Regresar
              </button>
            </Link>
            <button
              disabled={props.formState == 1 ? !isValid : false}
              className={`rounded-lg py-1 px-4 text-white  ${
                !isValid && props.formState == 1
                  ? 'bg-[#bae7d8]'
                  : 'bg-[#57c5a0] hover:bg-[#518b7e]'
              } `}
            >
              {props.formState === 1 ? 'Crear' : ' Actualizar'}
            </button>
          </div>
        </form>
        {props.formState == 1 ? (
          <div className="max-w-xl bg-white shadow px-5 py-10 rounded-lg">
            <button
              onClick={onDownloadClick}
              className="flex text-white align-middle gap-10 w-fit p-3 bg-[#217346] rounded"
            >
              <span>Descargar plantilla</span>
              <RiFileExcel2Fill color="#fff" size={24} />
            </button>
            <div className="flex flex-col justify-between space-y-4 mt-10">
              <h2 className="text-lg font-medium text-left">
                Seleccione el archivo:
              </h2>
              <div className="text-left">
                <input
                  type="file"
                  accept=".xlsx, .xls"
                  onChange={onFileChange}
                  className="hidden"
                  id="file-input"
                />
                <label
                  htmlFor="file-input"
                  className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg cursor-pointer hover:bg-gray-300"
                >
                  {selectedFile ? selectedFile.name : 'Elegir archivo'}
                </label>
                <button
                  onClick={onImportClick}
                  disabled={!selectedFile}
                  className={`px-4 py-2 ml-5 bg-yellow-500 text-white  rounded-lg ${
                    selectedFile
                      ? 'hover:bg-yellow-600 cursor-pointer'
                      : 'opacity-50 cursor-not-allowed'
                  }`}
                >
                  Importar
                </button>
              </div>
              {peopleData ? (
                <>
                  <h2 className="text-lg font-medium text-left mt-10">
                    Lista de Alumnos
                  </h2>
                  <table className="w-full p-4">
                    <thead className="justify-between border-y border-gray-600">
                      <tr className="text-gray-400">
                        <th className="p-2 text-left">ID</th>
                        <th className="p-2 text-left">Nombres</th>
                        <th className="p-2 text-left">Apellidos</th>
                        <th className="p-2 text-left">Correo</th>
                      </tr>
                    </thead>
                    <tbody>
                      {peopleData?.map((person: Person) => (
                        <tr
                          className="even:bg-white odd:bg-gray-100 text-left"
                          key={person.id}
                        >
                          <td className="p-2">{person.id}</td>
                          <td className="p-2">{person.name}</td>
                          <td className="p-2">{person.lastName}</td>
                          <td className="p-2">{person.emailAddress}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </>
              ) : (
                ''
              )}
            </div>
          </div>
        ) : (
          ''
        )}
      </div>
      <Toaster position="bottom-right" />
    </div>
  );
}

export default SurveysForm;
