import './people-list.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { Person } from '../../models/person.model';
import { MdDelete, MdEdit } from 'react-icons/md';
import { ImSearch } from 'react-icons/im';
import { useRecoilRefresher_UNSTABLE, useRecoilState } from 'recoil';
import { peopleState } from '../../store/people/people.atom';

/* eslint-disable-next-line */
export interface PeopleListProps {}

export function PeopleList(props: PeopleListProps) {
  const [people, setPeople] = useRecoilState(peopleState);
  const [searchData, setSearchData] = useState<string>('');

  const onDeleteClick = async (id: number) => {
    await axios
      .delete(`http://localhost:8000/api/person/${id}`)
      .then(() => getPeople());
  };

  const onSearchClick = async (data: string) => {
    if (data !== '') {
      await axios
        .get(`http://localhost:8000/api/person/search/${data}`)
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
    console.log();
    await axios
      .get('http://localhost:8000/api/person/all')
      .then((res) => setPeople(res.data.sort((a: any, b: any) => a.id - b.id)));
  };

  useEffect(() => {
    if (!people) getPeople();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-5xl ">Lista de Alumnos</h1>
      <div className="p-8 mt-5">
        <div className="flex justify-between ">
          <div className="my-auto flex gap-3">
            <span className="text-lg self-center">Buscar alumno: </span>
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
              Crear alumno
            </button>
          </Link>
        </div>
        <div className="mt-10">
          <table className="w-full p-4">
            <thead className="justify-between border-y border-gray-600">
              <tr className="text-gray-400">
                <th className="p-2">ID</th>
                <th>Nombres</th>
                <th>Apellidos</th>
                <th>Tipo de documento</th>
                <th>Documento</th>
                <th>Celular</th>
                <th>Correo</th>
                <th>Empresa</th>
                <th>Opciones</th>
              </tr>
            </thead>
            <tbody>
              {people?.map((person: Person) => (
                <tr className="hover:bg-white" key={person.id}>
                  <td className="p-2 rounded-l-lg">{person.id}</td>
                  <td>{person.name}</td>
                  <td>{person.lastName}</td>
                  <td>{person.doc_type.description}</td>
                  <td>{person.docNumber}</td>
                  <td>{person.phoneNumber}</td>
                  <td>{person.emailAddress}</td>
                  <td className="truncate">{person.enterprise.name}</td>
                  <td className="rounded-r-lg p-2">
                    <div className="flex justify-center gap-4">
                      <Link to={`/personas/${person.id}`}>
                        <div className="p-1 bg-slate-200 rounded text-slate-400 hover:text-[#57c5a0]">
                          <MdEdit size={24} />
                        </div>
                      </Link>
                      <button
                        onClick={() => onDeleteClick(parseInt(person.id))}
                        className="p-1 bg-slate-200 rounded text-slate-400 hover:text-[#57c5a0]"
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
    </div>
  );
}

export default PeopleList;
