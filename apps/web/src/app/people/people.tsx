import { Route, Routes, useNavigate } from 'react-router-dom';
import './people.scss';
import { useEffect } from 'react';

import PeopleList from './people-list/people-list';
import PeopleForm from './people-form/people-form';
import { useRecoilValue } from 'recoil';
import { userState } from '../store/user/user.atom';

/* eslint-disable-next-line */
export interface AlumnosProps {}

export function Alumnos(props: AlumnosProps) {
  const user = useRecoilValue(userState);

  const navigate = useNavigate();

  if (!user) navigate('/login');

  useEffect(() => {
    if (!user) navigate('/login');
  }, []);

  return (
    user && (
      <Routes>
        <Route path="/" element={<PeopleList />} />
        <Route path="/save" element={<PeopleForm formState={1} />} />
        <Route path="/:id" element={<PeopleForm formState={2} />} />
      </Routes>
    )
  );
}

export default Alumnos;
