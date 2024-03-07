import { Route, Routes } from 'react-router';
import { Layout } from './layout/layout';
import { RecoilRoot } from 'recoil';
import { Enterprises } from './enterprises/enterprises';
import { Surveys } from './surveys/surveys';
import { Reports } from './reports/reports';
import { SurveysPerson } from './surveys/surveys-person/surveys-person';
import { Dashboard } from './dashboard/dashboard';
import { ReportsChart } from './reports/reports-chart/reports-chart';
import { Toaster } from 'react-hot-toast';
import { SignIn } from './auth/sign-in/sign-in';
import { People } from './people/people';

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
              <People />
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
        <Route path="/encuestas/register/" element={<ReportsChart />} />
      </Routes>

      <Toaster position="bottom-right" />
    </RecoilRoot>
  );
}

export default App;
