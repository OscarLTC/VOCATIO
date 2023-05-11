import { Route, Routes } from 'react-router';
import Layout from './layout/layout';
import Alumnos from './people/people';
import { RecoilRoot } from 'recoil';
import Enterprises from './enterprises/enterprises';
import Surveys from './surveys/surveys';
import Reports from './reports/reports';

export function App() {
  return (
    <RecoilRoot>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Alumnos />
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
      </Routes>
    </RecoilRoot>
  );
}

export default App;
