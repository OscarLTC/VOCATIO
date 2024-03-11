import { enterpriseState } from '../../store/enterprise/enterprise.atom';
import { environment } from '../../../environments/environment';
import { peopleState } from '../../store/people/people.atom';
import { Enterprise } from '../../models/enterprise.model';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { MdDelete, MdEdit } from 'react-icons/md';
import { Modal } from '../../components/modal/Modal';
import { useEffect, useState } from 'react';
import { ImSearch } from 'react-icons/im';
import { Link } from 'react-router-dom';
import axios from 'axios';

export const EnterprisesList = () => {
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

  const [sortAsc, setSortAsc] = useState<boolean>();

  const sortById = (a: Enterprise, b: Enterprise) => a.id - b.id;

  const sortByName = (a: Enterprise, b: Enterprise) =>
    a.name.localeCompare(b.name);

  const sortByContactName = (a: Enterprise, b: Enterprise) =>
    a.contactName.localeCompare(b.contactName);

  const sortByContactPhone = (a: Enterprise, b: Enterprise) =>
    a.phoneContact.localeCompare(b.phoneContact);

  const sortByEmail = (a: Enterprise, b: Enterprise) =>
    a.phoneContact.localeCompare(b.phoneContact);

  const sortFunctions: any = {
    1: sortById,
    2: sortByName,
    3: sortByContactName,
    4: sortByContactPhone,
    5: sortByEmail,
  };

  const sortByHeader = (id: number) => {
    const sortFunction = sortFunctions[id];
    if (sortFunction) {
      setSortAsc(!sortAsc);
      const sortedSurveys = [...enterprises].sort(sortFunction);
      setEnterprises(sortAsc ? sortedSurveys : sortedSurveys.reverse());
    }
  };

  useEffect(() => {
    if (!enterprises) {
      getEnterprises();
    }
  }, [enterprises]);

  return (
    <div className="sm:my-8 bg-[aliceblue]">
      <h1 className="text-4xl px-4 text-left">Lista de Empresas</h1>
      <div className="p-4 mt-5">
        <div className="sm:flex justify-between ">
          <div className="my-auto flex gap-3">
            <span className="text-lg self-center text-left w-full">
              Buscar empresa:{' '}
            </span>
            <input
              type="text"
              className="bg-white max-sm:w-[150px] rounded px-2 outline-none"
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
          <Link to="/empresas/save" className="flex">
            <button className="py-2 px-5 max-sm:mt-5 w-full rounded-lg text-white bg-[#5a6268] hover:bg-[#5a6268]">
              Crear Empresa
            </button>
          </Link>
        </div>
        <div className="mt-10 overflow-y-auto h-[30rem]">
          <table className="w-full p-4">
            <thead className="justify-between border-y border-gray-600 select-none">
              <tr className="text-gray-400">
                <th
                  className="p-2 cursor-pointer whitespace-nowrap p-2"
                  onClick={() => sortByHeader(1)}
                >
                  ID
                </th>
                <th
                  className="cursor-pointer whitespace-nowrap p-2"
                  onClick={() => sortByHeader(2)}
                >
                  Empresa
                </th>
                <th
                  className="cursor-pointer whitespace-nowrap p-2"
                  onClick={() => sortByHeader(3)}
                >
                  Nombre de contacto
                </th>
                <th
                  className="cursor-pointer whitespace-nowrap p-2"
                  onClick={() => sortByHeader(4)}
                >
                  Celular
                </th>
                <th
                  className="cursor-pointer whitespace-nowrap p-2"
                  onClick={() => sortByHeader(5)}
                >
                  Correo
                </th>
                <th className="whitespace-nowrap p-2">Giro de negocio</th>
                <th className="whitespace-nowrap p-2">Opciones</th>
              </tr>
            </thead>
            <tbody>
              {enterprises?.map((enterprise: Enterprise) => (
                <tr
                  className="even:bg-white odd:bg-gray-100"
                  key={enterprise.id}
                >
                  <td className="p-2 underline text-blue-600">
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
                          setIdToDelete(enterprise.id);
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
};
