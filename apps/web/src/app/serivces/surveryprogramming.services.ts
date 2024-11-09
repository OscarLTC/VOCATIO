import axios from 'axios';
import { environment } from '../../environments/environment';

export const getSurveyProgrammingByEnterprise = async (id: number) => {
  const response = await axios.get(
    `${environment.apiUrl}/surveyProgramming/enterprise/${id}`
  );

  return response.data;
};

export const getSurveyProgramming = async (id: number) => {
  const response = await axios.get(
    `${environment.apiUrl}/surveyProgramming/${id}`
  );

  return response.data;
};

export const getSurveyProgrammingByPerson = async (id: number) => {
  const response = await axios.get(
    `${environment.apiUrl}/surveyProgramming/person/${id}`
  );

  return response.data;
};
