import axios from 'axios';
import { environment } from '../../environments/environment';

export const getSurveyProgramming = async (id: number) => {
  const response = await axios.get(
    `${environment.apiUrl}/surveyProgramming/${id}`
  );

  return response.data;
};
