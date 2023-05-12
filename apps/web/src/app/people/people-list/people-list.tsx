import './people-list.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Person } from '../../models/person.model';
import { MdDelete, MdEdit } from 'react-icons/md';
import { ImSearch } from 'react-icons/im';
import { useRecoilState } from 'recoil';
import { peopleState } from '../../store/people/people.atom';
import Modal from '../../components/modal/modal';
import { environment } from '../../../environments/environment';

/* eslint-disable-next-line */
export interface PeopleListProps {}

export function PeopleList(props: PeopleListProps) {
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

  useEffect(() => {
    if (!people) getPeople();
  }, []);

  return (
    <div className="py-8 bg-[aliceblue]">
      <h1 className="text-4xl px-4 text-left">Lista de Personas</h1>
      <div className="p-4 mt-5">
        <div className="flex justify-between ">
          <div className="my-auto flex gap-3">
            <span className="text-lg self-center">Buscar persona: </span>
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
          <Link to="/personas/save">
            <button className="py-2 px-5 rounded-lg text-white bg-[#57c5a0] hover:bg-[#81d1b6]">
              Crear persona
            </button>
          </Link>
        </div>
        <div className="mt-10 overflow-y-auto h-[30rem]">
          <table className="w-full p-4">
            <thead className="justify-between border-y border-gray-600">
              <tr className="text-gray-400">
                <th className="p-2">ID</th>
                <th>Nombres</th>
                <th>Apellidos</th>
                <th>Sexo</th>
                <th>Nro. Documento</th>
                <th>Celular</th>
                <th>Correo</th>
                <th>Empresa</th>
                <th>Opciones</th>
              </tr>
            </thead>
            <tbody>
              {people?.map((person: Person) => (
                <tr className="even:bg-white odd:bg-gray-100" key={person.id}>
                  <td className="p-2 underline text-[#57c5a0]">
                    <Link className="p-2" to={`/personas/${person.id}`}>
                      {person.id}
                    </Link>
                  </td>
                  <td>{person.name}</td>
                  <td>{person.lastName}</td>
                  <td className="capitalize">{person.genre?.name}</td>
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
}
export default PeopleList;
