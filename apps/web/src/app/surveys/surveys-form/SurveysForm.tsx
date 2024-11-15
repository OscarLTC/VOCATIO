import { surveysEnterpriseState } from '../../store/surveysEnterprise/surveysEnterprise.atom';
import { enterpriseState } from '../../store/enterprise/enterprise.atom';
import { environment } from '../../../environments/environment';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { surveysState } from '../../store/survey/survey.atom';
import { peopleState } from '../../store/people/people.atom';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { Enterprise } from '../../models/enterprise.model';
import { stateState } from '../../store/state/state.atom';
import { getCustomDate } from '../../utils/dateUtils';
import { Person } from '../../models/person.model';
import { RiFileExcel2Fill } from 'react-icons/ri';
import { BsFillPeopleFill } from 'react-icons/bs';
import { State } from '../../models/state.model';
import { HiDocumentAdd } from 'react-icons/hi';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import 'filepond/dist/filepond.min.css';
import toast from 'react-hot-toast';
import Select from 'react-select';
import axios from 'axios';
import { Survey } from '../../models/survey.model';

interface SurveysFormProps {
  formState: number;
}

export const SurveysForm = (props: SurveysFormProps) => {
  const [surveys, setSurveys] = useRecoilState(surveysState);
  const [enterprises, setEnterprises] = useRecoilState(enterpriseState);
  const [states, setStates] = useRecoilState(stateState);
  const setSurveysEnterprises = useSetRecoilState(surveysEnterpriseState);
  const [people, setPeople] = useRecoilState(peopleState);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const [toggleSurveyPersonRegs, setToggleSurveyPersonRegs] = useState(0);
  const [selectedPersons, setSelectedPersons] = useState<any>([]);
  const [selectedSurveys, setSelectedSurveys] = useState<any>([]);

  const onSelectPersonChange = (selectedOption: any) => {
    setSelectedPersons(selectedOption);
  };

  const onSelectSurveyChange = (selectedOption: any) => {
    setSelectedSurveys(selectedOption);
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
      enterprise_id: 1,
      state_id: 1,
    },
  });

  const watchStartDate = watch('startDate');
  const watchEterpriseId = watch('enterprise_id');

  const getPeople = async () => {
    await axios
      .get(`${environment.apiUrl}/person/all`)
      .then((res) => setPeople(res.data));
  };

  const { id } = useParams();
  const navigate = useNavigate();

  const onFileChange = (event: any) => {
    setIsLoaded(true);
    setSelectedFile(event.target.files[0]);
  };

  const onSubmit = async (data: any) => {
    setIsLoaded(true);

    if (toggleSurveyPersonRegs == 0 && selectedFile) {
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
            const personIds = res.data.map((p: Person) => p.id);

            send_data(props.formState, data, personIds);

            setPeople(null);
            setSelectedFile(null);
          })
          .catch((err) => {
            toast.remove();
            toast.error('No se pudo programar la encuesta');
          });
      } catch (error) {
        setIsLoaded(false);
      }
    } else {
      const personIds = selectedPersons.map((option: any) => option.value);

      send_data(props.formState, data, personIds);
    }
  };

  const send_data = async (
    value: number,
    surveyEnterprise: any,
    surveyProgrammingPersonIds: number[]
  ) => {
    if (value === 1) {
      toast.loading('Programando encuesta');

      const surveyIds = selectedSurveys.map((survey: any) => survey.value);

      await axios
        .post(`${environment.apiUrl}/surveyProgramming/save`, {
          ...surveyEnterprise,
          surveyIds: surveyIds,
          surveyProgrammingPersonIds: surveyProgrammingPersonIds,
        })
        .then((res) => {
          toast.remove();
          toast.success('Encuesta programada');
          reset();
          setIsLoaded(false);
          navigate('/encuestas');
        })
        .catch((res) => {
          setIsLoaded(false);

          toast.error('No se pudo programar la encuesta');
        });
    } else if (value === 2) {
      toast.loading('Actializando encuesta');
      await axios
        .put(`${environment.apiUrl}/surveyProgramming/${id}`, {
          ...surveyEnterprise,
          surveyProgrammingPersonIds: surveyProgrammingPersonIds,
        })
        .then((res) => {
          reset();
          toast.remove();
          toast.success('Datos actualizados');
          navigate('/encuestas');
        })
        .catch((error) => {
          toast.remove();
          toast.error('Error al actualizar');
        });
    }
    setSurveysEnterprises(null);
  };

  const onDownloadClick = () => {
    const fileUrl = '/doc/importar-personas.xlsx';
    window.open(fileUrl, '_blank');
  };

  const getSurveys = async () => {
    await axios.get(`${environment.apiUrl}/survey/all`).then((res) => {
      res.data.splice(4, 1);
      setSurveys(res.data);
    });
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

  useEffect(() => {
    if (props.formState === 2) {
      const getSurveyEnterprise = async () => {
        await axios
          .get(`${environment.apiUrl}/surveyProgramming/${id}`)
          .then((res) => {
            setValue('name', res.data.name);
            setValue('section', res.data.section);
            setValue('startDate', res.data.startDate);
            setValue('endDate', res.data.endDate);
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

    if (!people) {
      getPeople();
    }
  }, []);

  return (
    surveys && (
      <div className="p-4">
        <h1 className="text-3xl ">
          {props.formState === 1
            ? 'Crear Programación de Encuesta'
            : 'Actualizar Programación de Encuesta'}
        </h1>
        <div className="mt-10 flex justify-center gap-10">
          <form
            className="max-w-xl bg-white text-sm shadow px-5 py-5 lg:px-10 lg:py-10 rounded-lg"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex gap-4 items-center place-content-center">
              <span className="w-24 sm:w-44  text-start">Programación:</span>
              <input
                {...register('name', {
                  required: true,
                  pattern: /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ0-9\s]+$/,
                })}
                className={`sm:w-64 w-56 bg-gray-200 p-2 rounded outline-none ${
                  errors.name && 'outline-red-400 outline-1'
                }`}
                type="text"
                placeholder="Encuesta 1"
              />
            </div>
            {props.formState == 1 ? (
              <>
                <div className="flex gap-4 items-center mt-5 place-content-center">
                  <span className="w-24 sm:w-44 text-start">Empresa:</span>
                  <select
                    {...register('enterprise_id', { required: true })}
                    defaultValue={'enterprise_id'}
                    className="bg-gray-200 py-2 sm:w-64 w-56 px-2 rounded outline-none"
                  >
                    {enterprises?.map((enterprise: Enterprise) => (
                      <option key={enterprise.id} value={enterprise.id}>
                        {enterprise.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex gap-4 items-center mt-5 place-content-center">
                  <span className="w-24 sm:w-44 text-start">Encuesta:</span>
                  <Select
                    required
                    isMulti
                    name="colors"
                    styles={{
                      control: (baseStyles, state) => ({
                        ...baseStyles,
                        textAlign: 'left',
                        backgroundColor: 'white',
                      }),
                      option: (provided, state) => ({
                        ...provided,
                        textAlign: 'left',
                      }),
                    }}
                    options={surveys?.map((survey: Survey) => ({
                      value: survey.id,
                      label: `${survey.name}`,
                    }))}
                    className="basic-multi-select bg-gray-200 sm:w-64 w-56 rounded outline-none"
                    classNamePrefix="select"
                    onChange={onSelectSurveyChange}
                  />
                </div>
              </>
            ) : (
              ''
            )}
            <div className="flex gap-4 items-center mt-5  place-content-center">
              <span className="w-24 sm:w-44 text-start">Sección:</span>
              <input
                {...register('section', {
                  required: true,
                  pattern: /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ0-9\s]+$/,
                })}
                className={`sm:w-64 w-56 bg-gray-200 p-2 rounded outline-none ${
                  errors.name && 'outline-red-400 outline-1'
                }`}
                type="text"
                placeholder="5A"
              />
            </div>

            <div className="flex gap-4 items-center mt-5 place-content-center">
              <span className="w-24 sm:w-44 text-start">Fecha de Inicio:</span>
              <input
                {...register('startDate', {
                  required: true,
                })}
                className={`sm:w-64 w-56 bg-gray-200 p-2 rounded outline-none ${
                  errors.startDate && 'outline-red-400 outline-1'
                }`}
                type="date"
                placeholder={getCustomDate()}
              />
            </div>
            <div className="flex gap-4 items-center mt-5 place-content-center">
              <span className="w-24 sm:w-44 text-start">Fecha de Fin:</span>
              <input
                {...register('endDate', {
                  required: true,
                })}
                className={`sm:w-64 w-56 bg-gray-200 p-2 rounded outline-none ${
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
                  className="bg-gray-200 py-2 w-64 px-2 rounded outline-none"
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
            {props.formState == 1 || props.formState == 2 ? (
              <div className="mt-10 bg-zinc-300 p-2 rounded-lg">
                <div className="flex m-y bg-slate-50 rounded-lg select-none">
                  <div
                    className={` w-1/2 p-1 rounded-l-lg flex gap-1 text-center justify-center items-center ${
                      toggleSurveyPersonRegs === 0
                        ? 'bg-[#222123] text-white'
                        : ''
                    }`}
                    onClick={() => {
                      setToggleSurveyPersonRegs(0);
                      setSelectedPersons([]);
                    }}
                  >
                    <h3>Subir Excel</h3>
                    <HiDocumentAdd size={20} />
                  </div>
                  <div
                    className={`w-1/2 p-1 rounded-r-lg  flex gap-1 text-center justify-center items-center ${
                      toggleSurveyPersonRegs === 1
                        ? 'bg-[#222123] text-white'
                        : ''
                    }`}
                    onClick={() => {
                      setToggleSurveyPersonRegs(1);
                      setSelectedFile(null);
                      setIsLoaded(false);
                    }}
                  >
                    <h3 className="text-center ">Seleccionar</h3>
                    <BsFillPeopleFill />
                  </div>
                </div>
                {toggleSurveyPersonRegs === 0 ? (
                  <div className="flex flex-col justify-between space-y-4 mt-5">
                    <div className="flex justify-between">
                      <h2 className="text-[15px] font-medium text-left self-center">
                        Plantilla:
                      </h2>
                      <button
                        onClick={onDownloadClick}
                        className="flex text-white align-middle gap-10 w-fit p-2 bg-[#217346] rounded"
                      >
                        <RiFileExcel2Fill color="#fff" size={20} />
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
                        className="block w-full px-4 py-2 bg-gray-50 text-gray-700 rounded-lg cursor-pointer hover:bg-gray-100"
                      >
                        {selectedFile
                          ? selectedFile.name
                          : 'Seleccione el archivo'}
                      </label>
                    </div>
                  </div>
                ) : (
                  <div className="mt-4">
                    <Select
                      isMulti
                      name="colors"
                      options={people?.map((person: Person) => ({
                        value: person.id,
                        label: `${person.name} ${person.lastName}`,
                      }))}
                      className="basic-multi-select"
                      classNamePrefix="select"
                      onChange={onSelectPersonChange}
                    />
                  </div>
                )}
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
                className={`rounded-lg py-1 px-4 text-white  ${
                  props.formState == 1
                    ? selectedPersons.length > 0 || isLoaded
                      ? 'bg-[#57c5a0] hover:bg-[#518b7e]'
                      : 'bg-[#bae7d8]'
                    : 'bg-[#57c5a0] hover:bg-[#518b7e]'
                } `}
              >
                {props.formState === 1 ? 'Crear' : ' Actualizar'}
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  );
};
