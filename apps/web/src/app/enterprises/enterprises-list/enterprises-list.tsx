import { useRecoilState, useSetRecoilState } from 'recoil';
import { enterpriseState } from '../../store/enterprise/enterprise.atom';
import { environment } from '../../../environments/environment';
import { peopleState } from '../../store/people/people.atom';
import { Enterprise } from '../../models/enterprise.model';
import { MdDelete, MdEdit } from 'react-icons/md';
import Modal from '../../components/modal/modal';
import { useEffect, useState } from 'react';
import { ImSearch } from 'react-icons/im';
import { Link } from 'react-router-dom';
import './enterprises-list.scss';
import axios from 'axios';

/* eslint-disable-next-line */
export interface EnterprisesListProps {}

export function EnterprisesList(props: EnterprisesListProps) {
  const [enterprises, setEnterprises] = useRecoilState(enterpriseState);
  const [searchData, setSearchData] = useState<string>('');
  const [idToDelete, setIdToDelete] = useState<number>(0);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const setPeople = useSetRecoilState(peopleState);

  const onDeleteClick = async (id: number) => {
    await axios.delete(`${environment.apiUrl}/enterprise/${id}`).then(() => {
      getEnterprises();
      setIsModalOpen(false);
      setPeople(null);
    });
  };

  const onSearchClick = async (data: string) => {
    if (data !== '') {
      await axios
        .get(`${environment.apiUrl}/enterprise/search/${data}`)
        .then((res) => setEnterprises(res.data));
    } else {
      getEnterprises();
    }
  };

  const handleKeyPress = (e: any) => {
    if (e.key === 'Enter') {
      onSearchClick(searchData);
    }
  };

  const getEnterprises = async () => {
    await axios
      .get(`${environment.apiUrl}/enterprise/all`)
      .then((res) =>
        setEnterprises(res.data.sort((a: any, b: any) => a.id - b.id))
      );
  };

  useEffect(() => {
    if (!enterprises) {
      getEnterprises();
    }
  }, []);

  return (
    <div className="my-8">
      <h1 className="text-4xl px-4 text-left">Lista de Empresas</h1>
      <div className="p-4 mt-5">
        <div className="flex justify-between ">
          <div className="my-auto flex gap-3">
            <span className="text-lg self-center">Buscar empresa: </span>
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
          <Link to="/empresas/save">
            <button className="py-2 px-5 rounded-lg text-white bg-[#57c5a0] hover:bg-[#81d1b6]">
              Crear empresa
            </button>
          </Link>
        </div>
        <div className="mt-10">
          <table className="w-full p-4">
            <thead className="justify-between border-y border-gray-600">
              <tr className="text-gray-400">
                <th className="p-2">ID</th>
                <th>Empresa</th>
                <th>Nombre de contacto</th>
                <th>Celular</th>
                <th>Correo</th>
                <th>Giro de negocio</th>
                <th>Opciones</th>
              </tr>
            </thead>
            <tbody>
              {enterprises?.map((enterprise: Enterprise) => (
                <tr
                  className="even:bg-white odd:bg-gray-100"
                  key={enterprise.id}
                >
                  <td className="p-2 underline text-[#57c5a0]">
                    <Link className="p-2" to={`/empresas/${enterprise.id}`}>
                      {enterprise.id}
                    </Link>
                  </td>
                  <td>{enterprise.name}</td>
                  <td>{enterprise.contactName}</td>
                  <td>{enterprise.phoneContact}</td>
                  <td>{enterprise.emailContact}</td>
                  <td className="truncate">
                    {enterprise.bussines_line.description}
                  </td>
                  <td className="p-2">
                    <div className="flex justify-center gap-4">
                      <Link to={`/empresas/${enterprise.id}`}>
                        <div className="p-1 bg-slate-200 rounded text-slate-400 hover:text-[#57c5a0]">
                          <MdEdit size={24} />
                        </div>
                      </Link>
                      <button
                        onClick={() => {
                          setIsModalOpen(true);
                          setIdToDelete(parseInt(enterprise.id));
                        }}
                        className="p-1 bg-slate-200 rounded text-slate-400 hover:text-[#c55757]"
                      >
                        <MdDelete size={24} />
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
        message="¿Estas seguro de que quieres eliminar a esta empresa?"
        item="empresa"
        onConfirm={() => onDeleteClick(idToDelete)}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}

export default EnterprisesList;
