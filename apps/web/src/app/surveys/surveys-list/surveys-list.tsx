import { useRecoilState } from 'recoil';
import './surveys-list.scss';
import { surveysEnterpriseState } from '../../store/surveysEnterprise/surveysEnterprise.atom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { environment } from '../../../environments/environment';
import { ImSearch } from 'react-icons/im';
import { Link } from 'react-router-dom';
import { SurveyProgramming } from '../../models/surveyProgramming.model';
import { MdDelete, MdEdit } from 'react-icons/md';
import { GiCancel } from 'react-icons/gi';
import State from '../../components/state/state';
import Modal from '../../components/modal/modal';
import { RiLoader4Fill } from 'react-icons/ri';
import { formatDate } from '../../utils/dateUtils';

/* eslint-disable-next-line */
export interface SurveysListProps {}

export function SurveysList(props: SurveysListProps) {
  const [surveys, setSurveys] = useRecoilState(surveysEnterpriseState);
  const [surveyFiltered, setSurveyFiltered] = useState<any>([]);
  const [searchData, setSearchData] = useState<string>('');
  const [idToDelete, setIdToDelete] = useState<number>(0);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalFun, setModalFun] = useState<number>(0);
  const [isDeleted, setIsDeleted] = useState<boolean>(false);
  const [surveyState, setSurveyState] = useState(0);

  const onDeleteClick = async (id: number) => {
    setIsDeleted(true);
    await axios
      .delete(`${environment.apiUrl}/surveyProgramming/${id}`)
      .then(() => {
        setIsDeleted(false);
        getSurveysEnterprise();
        setIsModalOpen(false);
      });
  };

  const onCancelClick = async (id: number) => {
    await axios
      .put(`${environment.apiUrl}/surveyProgramming/${id}/cancel`)
      .then(() => {
        getSurveysEnterprise();
        setIsModalOpen(false);
      });
  };

  const onSearchClick = async (data: string) => {
    setSurveyState(0);
    if (data !== '') {
      await axios
        .get(`${environment.apiUrl}/surveyProgramming/search/${data}`)
        .then((res) => setSurveys(res.data.sort((a: any, b: any) => a - b)));
    } else {
      getSurveysEnterprise();
    }
  };

  const handleKeyPress = (e: any) => {
    if (e.key === 'Enter') {
      onSearchClick(searchData);
    }
  };

  const getSurveysEnterprise = () => {
    axios.get(`${environment.apiUrl}/surveyProgramming/all`).then((res) => {
      setSurveys(res.data.sort((a: any, b: any) => b.id - a.id));
    });
  };

  const onStateClick = (id: number) => {
    if (id == 0) {
      setSurveyFiltered(surveys);
    } else if (id == 1) {
      setSurveyFiltered(
        surveys.filter((item: any) => {
          const surveyProgrammingPerson = item.survey_programming_person.filter(
            (person: any) => person.state.id === 3
          );
          return (
            surveyProgrammingPerson.length > 0 &&
            surveyProgrammingPerson.length <
              item.survey_programming_person.length
          );
        })
      );
    } else {
      setSurveyFiltered(surveys.filter((a: any) => parseInt(a.state.id) == id));
    }
  };

  const [sortAsc, setSortAsc] = useState<boolean>();

  const sortById = (a: SurveyProgramming, b: SurveyProgramming) => a.id - b.id;

  const sortByName = (a: SurveyProgramming, b: SurveyProgramming) =>
    a.name.localeCompare(b.name);

  const sortByEnterprise = (a: SurveyProgramming, b: SurveyProgramming) =>
    a.enterprise.name.localeCompare(b.enterprise.name);

  const sortBySection = (a: SurveyProgramming, b: SurveyProgramming) =>
    a.section.localeCompare(b.section);

  const sortByStartDate = (a: SurveyProgramming, b: SurveyProgramming) =>
    a.startDate.localeCompare(b.startDate);

  const sortByEndDate = (a: SurveyProgramming, b: SurveyProgramming) =>
    a.endDate.localeCompare(b.endDate);

  const sortFunctions: any = {
    1: sortById,
    2: sortByName,
    3: sortByEnterprise,
    4: sortBySection,
    5: sortByStartDate,
    6: sortByEndDate,
  };

  const sortByHeader = (id: number) => {
    const sortFunction = sortFunctions[id];
    if (sortFunction) {
      setSortAsc(!sortAsc);
      const sortedSurveys = [...surveyFiltered].sort(sortFunction);
      setSurveyFiltered(sortAsc ? sortedSurveys : sortedSurveys.reverse());
    }
  };

  useEffect(() => {
    if (!surveys) {
      getSurveysEnterprise();
    }
    onStateClick(0);
  }, [surveys]);
  return (
    <div className="my-8">
      <h1 className="text-4xl px-4 text-left">
        Lista de Encuestas Programadas
      </h1>
      <div className="p-4 mt-5">
        <div className="flex justify-between ">
          <div className="my-auto flex gap-3">
            <span className="text-lg self-center">Buscar encuesta: </span>
            <input
              type="text"
              className="bg-white  rounded px-2 outline-none"
              onChange={(e) => {
                setSearchData(e.target.value);
              }}
              onKeyDown={handleKeyPress}
            />
            <span
              onClick={() => onSearchClick(searchData)}
              className="rounded bg-[#5a6268] hover:bg-[#5a6268] p-2 cursor-pointer"
            >
              <ImSearch size={20} color="white" />
            </span>
          </div>
          <div className="mt-0 w-fit mx-auto text-center ">
            <ul className="flex flex-wrap text-md font-medium text-center text-gray-500 border-b border-gray-200 ">
              <li
                className="cursor-pointer"
                onClick={() => {
                  setSurveyState(0);
                  onStateClick(0);
                }}
              >
                <p
                  className={`inline-block p-4 rounded-t-lg ${
                    surveyState == 0
                      ? 'text-gray-800 bg-white  active '
                      : 'hover:text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  Todos
                </p>
              </li>
              <li
                className="cursor-pointer"
                onClick={() => {
                  setSurveyState(1);
                  onStateClick(1);
                }}
              >
                <p
                  className={`inline-block p-4 rounded-t-lg ${
                    surveyState == 1
                      ? 'text-gray-800 bg-white  active '
                      : 'hover:text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  En Proceso
                </p>
              </li>
              <li
                className="cursor-pointer"
                onClick={() => {
                  setSurveyState(2);
                  onStateClick(2);
                }}
              >
                <p
                  className={`inline-block p-4 rounded-t-lg ${
                    surveyState == 2
                      ? 'text-gray-800 bg-white  active '
                      : 'hover:text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  Activas
                </p>
              </li>
              <li
                className="cursor-pointer"
                onClick={() => {
                  setSurveyState(3);
                  onStateClick(3);
                }}
              >
                <p
                  className={`inline-block p-4 rounded-t-lg ${
                    surveyState == 3
                      ? 'text-gray-800 bg-white  active '
                      : 'hover:text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  Finalizadas
                </p>
              </li>
              <li
                className="cursor-pointer"
                onClick={() => {
                  setSurveyState(4);
                  onStateClick(4);
                }}
              >
                <p
                  className={`inline-block p-4 rounded-t-lg ${
                    surveyState == 4
                      ? 'text-gray-800 bg-white  active '
                      : 'hover:text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  Canceladas
                </p>
              </li>
            </ul>
          </div>
          <Link to="/encuestas/save">
            <button className="py-2 px-5 rounded-lg text-white bg-[#5a6268] hover:bg-[#5a6268]">
              Programar Encuesta
            </button>
          </Link>
        </div>

        <div className="mt-0 overflow-y-auto h-[30rem]">
          <table className="w-full p-4">
            <thead className="justify-between border-y border-gray-600 select-none">
              <tr className="text-gray-400">
                <th
                  className="p-2 cursor-pointer"
                  onClick={() => sortByHeader(1)}
                >
                  ID
                </th>
                <th className="cursor-pointer" onClick={() => sortByHeader(2)}>
                  Programación
                </th>
                <th className="cursor-pointer" onClick={() => sortByHeader(3)}>
                  Empresa
                </th>
                <th className="cursor-pointer" onClick={() => sortByHeader(4)}>
                  Sección
                </th>
                <th>Tipo de Encuesta</th>
                <th className="cursor-pointer" onClick={() => sortByHeader(5)}>
                  Fecha de Inicio
                </th>
                <th className="cursor-pointer" onClick={() => sortByHeader(6)}>
                  Fecha de Fin
                </th>
                <th>Estado</th>
                <th>Avance</th>
                <th>Opciones</th>
              </tr>
            </thead>
            <tbody>
              {surveyFiltered?.map((survey: SurveyProgramming) => (
                <tr className="even:bg-white odd:bg-gray-100" key={survey.id}>
                  <td className="p-2 underline text-blue-600">
                    <Link
                      className="p-2"
                      to={`/encuestas/detalle/${survey.id}`}
                    >
                      {survey.id}
                    </Link>
                  </td>
                  <td>{survey.name}</td>
                  <td>{survey.enterprise.name}</td>
                  <td>{survey.section}</td>
                  <td>{survey.survey.name}</td>
                  <td>{formatDate(survey.startDate)}</td>
                  <td>{formatDate(survey.endDate)}</td>
                  <td className="truncate mx-auto">
                    <div className="">
                      <State stateId={survey.state.id} />
                    </div>
                  </td>
                  <td>
                    <div
                      className={`${
                        parseInt(
                          (
                            (survey?.survey_programming_person.filter(
                              (a) => a.state?.id === 3
                            ).length /
                              survey.survey_programming_person.length) *
                            100
                          ).toFixed(0)
                        ) == 0
                          ? 'bg-red-400'
                          : parseInt(
                              (
                                (survey?.survey_programming_person.filter(
                                  (a) => a.state?.id === 3
                                ).length /
                                  survey.survey_programming_person.length) *
                                100
                              ).toFixed(0)
                            ) == 100
                          ? 'bg-green-600'
                          : 'bg-yellow-400'
                      } w-10 h-10 rounded-full m-auto text-white text-[12px] flex `}
                    >
                      <span className="self-center m-auto">
                        {(
                          (survey?.survey_programming_person.filter(
                            (a) => a.state?.id === 3
                          ).length /
                            survey.survey_programming_person.length) *
                          100
                        ).toFixed(0)}
                        %
                      </span>
                    </div>
                  </td>

                  <td className="p-2">
                    <div className="flex justify-center gap-4">
                      <Link
                        title="actualizar encuesta"
                        to={`/encuestas/${survey.id}`}
                      >
                        <div className="p-1 bg-slate-200 rounded text-slate-400 hover:text-[#57c5a0]">
                          <MdEdit size={24} />
                        </div>
                      </Link>
                      <button
                        disabled={survey.state.id !== 4 ? false : true}
                        title="desactivar encuesta"
                        onClick={() => {
                          setIsModalOpen(true);
                          setModalFun(1);
                          setIdToDelete(survey.id);
                        }}
                        className="p-1 bg-slate-200 rounded text-slate-400 hover:text-[#252525]"
                      >
                        <GiCancel size={24} />
                      </button>
                      <button
                        disabled={isDeleted}
                        title="eliminar encuesta"
                        onClick={() => {
                          setIsModalOpen(true);
                          setModalFun(2);
                          setIdToDelete(survey.id);
                        }}
                        className="p-1 bg-slate-200 rounded text-slate-400 hover:text-[#c55757]"
                      >
                        {isDeleted ? (
                          <RiLoader4Fill className="animate-spin" size={24} />
                        ) : (
                          <MdDelete size={24} />
                        )}
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        message={
          modalFun === 1
            ? '¿Estas seguro de que quieres CANCELAR a esta encuesta?'
            : '¿Estas seguro de que quieres ELIMINAR a esta encuesta?'
        }
        item="encuesta"
        onConfirm={() =>
          modalFun === 1 ? onCancelClick(idToDelete) : onDeleteClick(idToDelete)
        }
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}

export default SurveysList;
