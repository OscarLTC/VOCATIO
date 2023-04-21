import { Route, Routes } from 'react-router-dom';
import './people.scss';
import PeopleList from './people-list/people-list';
import PeopleForm from './people-form/people-form';

/* eslint-disable-next-line */
export interface AlumnosProps {}

export function Alumnos(props: AlumnosProps) {
  return (
    <Routes>
      <Route path="/" element={<PeopleList />} />
      <Route path="/save" element={<PeopleForm formState={1} />} />
      <Route path="/:id" element={<PeopleForm formState={2} />} />
    </Routes>
  );
}

export default Alumnos;
