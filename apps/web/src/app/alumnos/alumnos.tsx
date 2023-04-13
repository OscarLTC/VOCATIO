import AlumnosList from './alumnos-list/alumnos-list';
import { Route, Routes } from 'react-router-dom';
import './alumnos.scss';
import AlumnosForm from './alumnos-form/alumnos-form';

/* eslint-disable-next-line */
export interface AlumnosProps {}

export function Alumnos(props: AlumnosProps) {
  return (
    <Routes>
      <Route path="/" element={<AlumnosList />} />
      <Route path="/save" element={<AlumnosForm formState={1} />} />
      <Route path="/:id" element={<AlumnosForm formState={2} />} />
    </Routes>
  );
}

export default Alumnos;
