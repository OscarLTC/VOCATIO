import { useRecoilState } from 'recoil';
import './surveys-list.scss';
import { surveysEnterpriseState } from '../../store/surveysEnterprise/surveysEnterprise.atom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { environment } from '../../../environments/environment';
import { ImSearch } from 'react-icons/im';
import { Link } from 'react-router-dom';
import { SurveyEnterprise } from '../../models/surveyEnterprise.model';
import { MdDelete, MdEdit } from 'react-icons/md';
import { GiCancel } from 'react-icons/gi';
import State from '../../components/state/state';
import Modal from '../../components/modal/modal';
import { RiLoader4Fill } from 'react-icons/ri';

/* eslint-disable-next-line */
export interface SurveysListProps {}

export function SurveysList(props: SurveysListProps) {
  const [surveys, setSurveys] = useRecoilState(surveysEnterpriseState);
  const [searchData, setSearchData] = useState<string>('');
  const [idToDelete, setIdToDelete] = useState<number>(0);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalFun, setModalFun] = useState<number>(0);
  const [isDeleted, setIsDeleted] = useState<boolean>(false);

  const onDeleteClick = async (id: number) => {
    setIsDeleted(true);
    await axios
      .delete(`${environment.apiUrl}/surveyEnterprise/${id}`)
      .then(() => {
        setIsDeleted(false);
        getSurveysEnterprise();
        setIsModalOpen(false);
      });
  };

  const onCancelClick = async (id: number) => {
    await axios
      .put(`${environment.apiUrl}/surveyEnterprise/${id}/cancel`)
      .then(() => {
        getSurveysEnterprise();
        setIsModalOpen(false);
      });
  };

  const onSearchClick = async (data: string) => {
    if (data !== '') {
      await axios
        .get(`${environment.apiUrl}/surveyEnterprise/search/${data}`)
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
    axios
      .get(`${environment.apiUrl}/surveyEnterprise/all`)
      .then((res) =>
        setSurveys(res.data.sort((a: any, b: any) => b.id - a.id))
      );
  };

  const formatDate = (date: any) => {
    const [year, month, day] = date.split('-');
    const dateObject = new Date(Number(year), Number(month) - 1, Number(day));
    return dateObject.toLocaleDateString('es-ES', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
  };

  useEffect(() => {
    if (!surveys) {
      getSurveysEnterprise();
    }
  }, []);
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
              className="rounded bg-[#57c5a0] hover:bg-[#81d1b6] p-2 cursor-pointer"
            >
              <ImSearch size={20} color="white" />
            </span>
          </div>
          <Link to="/encuestas/save">
            <button className="py-2 px-5 rounded-lg text-white bg-[#57c5a0] hover:bg-[#81d1b6]">
              Programar encuesta
            </button>
          </Link>
        </div>
        <div className="mt-10">
          <table className="w-full p-4">
            <thead className="justify-between border-y border-gray-600">
              <tr className="text-gray-400">
                <th className="p-2">ID</th>
                <th>Nombre</th>
                <th>Sección</th>
                <th>Tipo de Encuesta</th>
                <th>Empresa</th>
                <th>Fecha de Inicio</th>
                <th>Fecha de Fin</th>
                <th>Estado</th>
                <th>Opciones</th>
              </tr>
            </thead>
            <tbody>
              {surveys?.map((survey: SurveyEnterprise) => (
                <tr className="even:bg-white odd:bg-gray-100" key={survey.id}>
                  <td className="p-2 underline text-[#57c5a0]">
                    <Link
                      className="p-2"
                      to={`/encuestas/detalle/${survey.id}`}
                    >
                      {survey.id}
                    </Link>
                  </td>
                  <td>{survey.name}</td>
                  <td>{survey.section}</td>
                  <td>{survey.survey.name}</td>
                  <td>{survey.enterprise.name}</td>
                  <td>{formatDate(survey.startDate)}</td>
                  <td>{formatDate(survey.endDate)}</td>
                  <td className="truncate mx-auto">
                    <div className="">
                      <State stateId={parseInt(survey.state.id)} />
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
                        disabled={
                          parseInt(survey.state.id) !== 4 ? false : true
                        }
                        title="desactivar encuesta"
                        onClick={() => {
                          setIsModalOpen(true);
                          setModalFun(1);
                          setIdToDelete(parseInt(survey.id));
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
                          setIdToDelete(parseInt(survey.id));
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
