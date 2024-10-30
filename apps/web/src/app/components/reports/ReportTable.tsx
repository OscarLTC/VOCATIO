import { Link } from 'react-router-dom';
import { environment } from '../../../environments/environment';
import { SurveyProgramming } from '../../models/surveyProgramming.model';

interface ReportTableProps {
  searchText: string;
  surveysData: SurveyProgramming;
}

export const ReportTable = (props: ReportTableProps) => {
  const generatePdf = (id: number) => async () => {
    return;
  };

  return (
    <div className="mt-3 overflow-y-auto h-[30rem]">
      <table className="w-full p-4">
        <thead className="justify-between border-y border-gray-600">
          <tr className="text-gray-400">
            <th>ID</th>
            <th>Nombre</th>
            <th>Estado</th>
            <th>Reporte</th>
          </tr>
        </thead>
        <tbody>
          {props.surveysData.survey_programming_person
            .filter((survey) => {
              const searchTerms = props.searchText
                .toLocaleLowerCase()
                .split(' ');
              const fullName = `${survey.person.name} ${survey.person.lastName}`;
              return searchTerms.every((term) =>
                fullName.toLocaleLowerCase().includes(term)
              );
            })
            .map((survey) => (
              <tr
                className="even:bg-white odd:bg-gray-100"
                key={survey.person.id}
              >
                <td className="w-20"> {survey.person.id}</td>
                <td className="md:w-96 whitespace-nowrap p-2">
                  {survey.person.name} {survey.person.lastName}
                </td>
                <td className="w-20">
                  {survey.state.id === 2 ? (
                    <div className="w-5 h-5 rounded-full bg-red-500 m-auto"></div>
                  ) : (
                    <div className="w-5 h-5 rounded-full bg-green-600 m-auto"></div>
                  )}
                </td>
                {/* <td>
                  <Link to={`/reportes/pdf/${survey.id}`}>PDF </Link>
                </td> */}
                <td className="">
                  {survey.pdfBlob ? (
                    <a
                      className="text-blue-600 text-sm"
                      href={survey.pdfBlob}
                      target="_blank"
                      download={`${props.surveysData.name}-${survey.person.name}_${survey.person.lastName}-${props.surveysData.survey.name}.pdf`}
                      rel="noreferrer"
                    >
                      {`${environment.surveyDomain}/reportes/pdf/${survey.id}`}
                    </a>
                  ) : survey.state.id === 3 ? (
                    <div className="flex gap-3 justify-center items-center">
                      <span className="">No se ha generado correctamente</span>
                      <button
                        className="p-1 bg-green-500 text-white rounded-md"
                        onClick={generatePdf(survey.id)}
                      >
                        Generar
                      </button>
                    </div>
                  ) : (
                    ''
                  )}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};
