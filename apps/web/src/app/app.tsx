import { Route, Routes } from 'react-router';
import Layout from './layout/layout';
import Alumnos from './alumnos/alumnos';
import Empresas from './empresas/empresas';
import { Toaster } from 'react-hot-toast';

export function App() {
  return (
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
        path="/alumnos/*"
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
  );
}

export default App;
