import axios from 'axios';
import { environment } from '../../environments/environment';
import { SurveyProgramming } from '../models/surveyProgramming.model';

export const onExportarClick = (id: string, surveysData: SurveyProgramming) => {
  axios
    .post(
      `${environment.apiUrl}/surveyProgramming/${id}/export`,
      {
        domain: environment.surveyDomain,
      },
      { responseType: 'blob' }
    )
    .then((res) => {
      const file = new Blob([res.data], { type: 'application/vnd.ms-excel' });
      const fileUrl = URL.createObjectURL(file);
      const link = document.createElement('a');
      link.href = fileUrl;
      link.download = `${surveysData.enterprise.name}_${surveysData.id}_${surveysData.name}_${surveysData.survey.name}_${surveysData.section}.xlsx`;
      document.body.appendChild(link);
      link.click();
    });
};
