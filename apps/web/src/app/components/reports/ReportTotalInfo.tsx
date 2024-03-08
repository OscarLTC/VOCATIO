import { SurveyProgramming } from '../../models/surveyProgramming.model';

interface ReportTotalInfoProps {
  surveysData: SurveyProgramming;
}

export const ReportTotalInfo = (props: ReportTotalInfoProps) => {
  return (
    <div className="sm:flex">
      <div className="flex items-center sm:ml-10 max-sm:mt-2 w-fit font-bold gap-2 h-fit bg-neutral-200 p-2 rounded self-center">
        <p className="uppercase">
          Total:
          <span className="ml-2 ">
            {props.surveysData.survey_programming_person.length}
          </span>
        </p>
        <div className="w-8 h-8 ml-8 bg-green-600 rounded-full"></div>
        <span>
          {
            props.surveysData.survey_programming_person.filter(
              (a) => a.state.id === 3
            ).length
          }
        </span>
        <div className="w-8 h-8 ml-2 bg-red-600 rounded-full"></div>
        <span>
          {
            props.surveysData.survey_programming_person.filter(
              (a) => a.state.id === 2
            ).length
          }
        </span>
      </div>
      <div className="flex items-center sm:ml-2 max-sm:mt-2 w-fit font-bold gap-2 h-fit bg-neutral-200 p-2 rounded self-center">
        <p className="uppercase">
          <span className="ml-2">
            {(
              (props.surveysData.survey_programming_person.filter(
                (a) => a.state.id === 3
              ).length /
                props.surveysData.survey_programming_person.length) *
              100
            ).toFixed(1)}
            %
          </span>
        </p>
      </div>
    </div>
  );
};
