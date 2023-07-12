import { Route, Routes } from 'react-router';
import Layout from './layout/layout';
import Alumnos from './people/people';
import { RecoilRoot } from 'recoil';
import Enterprises from './enterprises/enterprises';
import Surveys from './surveys/surveys';
import Reports from './reports/reports';
import SignIn from './auth/sign-in/sign-in';
import SurveysPerson from './surveys/surveys-person/surveys-person';
import Dashboard from './dashboard/dashboard';

export function App() {
  return (
    <RecoilRoot>
      <Routes>
        <Route path="/login" element={<SignIn />} />
        <Route
          path="/"
          element={
            <Layout>
              <Surveys />
            </Layout>
          }
        />
        <Route
          path="/dashboard/*"
          element={
            <Layout>
              <Dashboard />
            </Layout>
          }
        />
        <Route
          path="/personas/*"
          element={
            <Layout>
              <Alumnos />
            </Layout>
          }
        />
        <Route
          path="/empresas/*"
          element={
            <Layout>
              <Enterprises />
            </Layout>
          }
        />
        <Route
          path="/encuestas/*"
          element={
            <Layout>
              <Surveys />
            </Layout>
          }
        />
        <Route
          path="/reportes/*"
          element={
            <Layout>
              <Reports />
            </Layout>
          }
        />
        <Route path="/encuestas/person/:id" element={<SurveysPerson />} />
      </Routes>
    </RecoilRoot>
  );
}

export default App;
