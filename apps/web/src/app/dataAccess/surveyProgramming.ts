import axios from 'axios';
import { environment } from '../../environments/environment';
import { surveyProgrammingPerson } from '../models/surveyProgrammingPerson.model';
import { Answer } from '../models/answer.model';
import { Result } from '../models/result.model';
import { ResultType } from '../models/resultType.model';

export const getSurveyPersonData = async (
  id: number
): Promise<surveyProgrammingPerson | undefined> => {
  try {
    const response = await axios.get(
      `${environment.apiUrl}/surveyProgrammingPerson/${id}`
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching survey person data:', error);
    return undefined;
  }
};

export const getCategoriesValues = (
  answers: Array<Answer>,
  topN: number
): Array<[string, number]> => {
  const sumCategories: any = {};

  for (const answer of answers) {
    const name = answer.question_category.category.name;
    const value = answer.question_alternative.value;

    if (sumCategories[name]) {
      sumCategories[name] += value;
    } else {
      sumCategories[name] = value;
    }
  }

  const sortedCategories = Object.entries(sumCategories)
    .sort((a: any, b: any) => b[1] - a[1])
    .slice(0, topN) as Array<[string, number]>;

  return sortedCategories;
};

const countValues: { [key: string]: number } = {
  visual: 0,
  auditivo: 0,
  kinestesico: 0,
};

export const getResult = (id: number) => {
  return axios.get(`${environment.apiUrl}/result/${id}`);
};

export const convertAnswersToCounts = (answers: Answer[]): any =>
  answers?.reduce((count: { [key: string]: number }, item: any) => {
    const value = item.question_alternative.value;
    if (value == 1) {
      count['visual'] = (count['visual'] || 0) + 1;
    } else if (value == 2) {
      count['auditivo'] = (count['auditivo'] || 0) + 1;
    } else if (value == 3) {
      count['kinestesico'] = (count['kinestesico'] || 0) + 1;
    }
    return count;
  }, countValues);

export const getMaxIndex = (counts: any) => {
  const values = Object.values(counts) as number[];

  return values.indexOf(Math.max(...values));
};
