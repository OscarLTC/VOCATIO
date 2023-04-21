import { Route, Routes } from 'react-router';
import Layout from './layout/layout';
import Empresas from './empresas/empresas';
import Alumnos from './people/people';
import { RecoilRoot } from 'recoil';

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
          path="/empresas"
          element={
            <Layout>
              <Empresas />
            </Layout>
          }
        />
      </Routes>
    </RecoilRoot>
  );
}

export default App;
