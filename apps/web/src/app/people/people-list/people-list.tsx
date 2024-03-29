import { environment } from '../../../environments/environment';
import { peopleState } from '../../store/people/people.atom';
import { Modal } from '../../components/modal/Modal';
import { Person } from '../../models/person.model';
import { MdDelete, MdEdit } from 'react-icons/md';
import { useEffect, useState } from 'react';
import { ImSearch } from 'react-icons/im';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import axios from 'axios';

export const PeopleList = () => {
  const [people, setPeople] = useRecoilState(peopleState);
  const [searchData, setSearchData] = useState<string>('');
  const [idToDelete, setIdToDelete] = useState<number>(0);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const onDeleteClick = async (id: number) => {
    await axios.delete(`${environment.apiUrl}/person/${id}`).then(() => {
      getPeople();
      setIsModalOpen(false);
    });
  };

  const onSearchClick = async (data: string) => {
    if (data !== '') {
      await axios
        .get(`${environment.apiUrl}/person/search/${data}`)
        .then((res) => setPeople(res.data));
    } else {
      getPeople();
    }
  };

  const handleKeyPress = (e: any) => {
    if (e.key === 'Enter') {
      onSearchClick(searchData);
    }
  };

  const getPeople = async () => {
    await axios
      .get(`${environment.apiUrl}/person/all`)
      .then((res) => setPeople(res.data.sort((a: any, b: any) => a.id - b.id)));
  };

  const [sortAsc, setSortAsc] = useState<boolean>();

  const sortById = (a: Person, b: Person) => parseInt(a.id) - parseInt(b.id);

  const sortByName = (a: Person, b: Person) => a.name.localeCompare(b.name);

  const sortByLastName = (a: Person, b: Person) =>
    a.lastName.localeCompare(b.lastName);

  const sortByDocumentNumber = (a: Person, b: Person) =>
    a.docNumber.localeCompare(b.docNumber);

  const sortByPhone = (a: Person, b: Person) =>
    a.phoneNumber.localeCompare(b.phoneNumber);

  const sortByEmail = (a: Person, b: Person) =>
    a.emailAddress.localeCompare(b.emailAddress);

  const sortByEnterprise = (a: Person, b: Person) =>
    a.enterprise.name.localeCompare(b.enterprise.name);

  const sortFunctions: any = {
    1: sortById,
    2: sortByName,
    3: sortByLastName,
    4: sortByDocumentNumber,
    5: sortByPhone,
    6: sortByEmail,
    7: sortByEnterprise,
  };

  const sortByHeader = (id: number) => {
    const sortFunction = sortFunctions[id];
    if (sortFunction) {
      setSortAsc(!sortAsc);
      const sortedSurveys = [...people].sort(sortFunction);
      setPeople(sortAsc ? sortedSurveys : sortedSurveys.reverse());
    }
  };

  useEffect(() => {
    if (!people) getPeople();
  }, [people]);

  return (
    <div className="sm:py-8 bg-[aliceblue]">
      <h1 className="text-4xl px-4 text-left">Lista de Personas</h1>
      <div className="p-4 mt-5">
        <div className="sm:flex justify-between ">
          <div className="my-auto flex gap-3">
            <span className="text-md sm:text-lg w-full self-center text-left">
              Buscar persona:
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
          <Link to="/personas/save" className="flex">
            <button className="py-2 px-5 max-sm:mt-5 w-full rounded-lg text-white bg-[#5a6268] hover:bg-[#5a6268]">
              Crear Persona
            </button>
          </Link>
        </div>
        <div className="mt-10 overflow-y-auto h-[30rem]">
          <table className="w-full p-4">
            <thead className="justify-between border-y border-gray-600 select-none">
              <tr className="text-gray-400">
                <th
                  className=" cursor-pointer whitespace-nowrap p-2"
                  onClick={() => sortByHeader(1)}
                >
                  ID
                </th>
                <th
                  className="cursor-pointer whitespace-nowrap p-2"
                  onClick={() => sortByHeader(2)}
                >
                  Nombres
                </th>
                <th
                  className="cursor-pointer whitespace-nowrap p-2"
                  onClick={() => sortByHeader(3)}
                >
                  Apellidos
                </th>
                <th
                  className="cursor-pointer whitespace-nowrap p-2"
                  onClick={() => sortByHeader(4)}
                >
                  Nro. Documento
                </th>
                <th
                  className="cursor-pointer whitespace-nowrap p-2"
                  onClick={() => sortByHeader(5)}
                >
                  Celular
                </th>
                <th
                  className="cursor-pointer whitespace-nowrap p-2"
                  onClick={() => sortByHeader(6)}
                >
                  Correo
                </th>
                <th
                  className="cursor-pointer whitespace-nowrap p-2"
                  onClick={() => sortByHeader(7)}
                >
                  Empresa
                </th>
                <th className="whitespace-nowrap p-2">Opciones</th>
              </tr>
            </thead>
            <tbody>
              {people?.map((person: Person) => (
                <tr className="even:bg-white odd:bg-gray-100" key={person.id}>
                  <td className="p-2 underline text-blue-600">
                    <Link className="p-2" to={`/personas/${person.id}`}>
                      {person.id}
                    </Link>
                  </td>
                  <td className="whitespace-nowrap p-2">{person.name}</td>
                  <td className="whitespace-nowrap p-2">{person.lastName}</td>
                  <td>{person.docNumber}</td>
                  <td>{person.phoneNumber}</td>
                  <td>{person.emailAddress}</td>
                  <td className="truncate">{person.enterprise.name}</td>
                  <td className="p-2">
                    <div className="flex justify-center gap-4">
                      <Link to={`/personas/${person.id}`}>
                        <div className="p-1 bg-slate-200 rounded text-slate-400 hover:text-[#57c5a0]">
                          <MdEdit size={24} />
                        </div>
                      </Link>
                      <button
                        onClick={() => {
                          setIsModalOpen(true);
                          setIdToDelete(parseInt(person.id));
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
        message="¿Estas seguro de que quieres eliminar a esta persona?"
        item="persona"
        onConfirm={() => onDeleteClick(idToDelete)}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};
