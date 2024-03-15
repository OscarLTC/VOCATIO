import axios from 'axios';
import { environment } from '../../environments/environment';
import { surveyProgrammingPerson } from '../models/surveyProgrammingPerson.model';
import { Answer } from '../models/answer.model';
import { SkillChartProps } from '../components/pdf/habilidades-blandas/SkillChart';
import { SkillImages } from '../models/skill.enum';

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

export const getCategoriesValues = (
  answers: Array<Answer>,
  topN: number
): Array<[string, number]> => {
  const sumCategories: any = {};

  for (const answer of answers) {
    const name = answer.question_category.category.name;
    const value = parseInt(answer.question_alternative.value);

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

export const getIdsValues = (
  answers: Array<Answer>,
  topN: number,
  sorted: boolean
): Array<[string, number]> => {
  const sumCategories: any = {};

  for (const answer of answers) {
    const id = answer.question_category.category.id;
    const value = parseInt(answer.question_alternative.value);

    if (sumCategories[id]) {
      sumCategories[id] += value;
    } else {
      sumCategories[id] = value;
    }
  }

  const sortedCategories = sorted
    ? (Object.entries(sumCategories)
        .sort((a: any, b: any) => b[1] - a[1])
        .slice(0, topN) as Array<[string, number]>)
    : (Object.entries(sumCategories).slice(0, topN) as Array<[string, number]>);

  return sortedCategories;
};

export const getSkillData = (answers: Array<Answer>) => {
  const skills: SkillChartProps['skills'] = [];
  const categories = getCategoriesValues(answers, 7);

  type SkillImages = {
    [key: string]: string;
  };

  const SkillImages: SkillImages = {
    Liderazgo: 'liderazgo',
    'Resolución\nde conflictos': 'resolucion_de_problemas',
    Empatía: 'empatia',
    'Gestión\ndel Tiempo': 'gestion_del_tiempo',
    'Habilidades\norganizativas': 'habilidades_organizativas',
    'Trabajo\nen equipo': 'trabajo_en_equipo',
    Comunicación: 'comunicacion',
  };

  for (const category of categories) {
    const title = category[0];
    const percentage = category[1] / 30;
    const color =
      percentage < 0.4 ? '#9f9f9f' : percentage < 0.6 ? '#686868' : '#0a937c';

    skills.push({
      title,
      image: `${SkillImages[title]}.png`,
      percentage: Number((percentage * 100).toFixed(0)),
      color,
    });
  }

  console.log(skills);

  return skills;
};

export const getResultArchetype = (ids: number[]) => {
  return axios.get(
    `${environment.apiUrl}/resultArchetype/${ids[0]}/${ids[1]}/${ids[2]}`
  );
};

export const getGroupsValues = (answers: Array<Answer>, topN: number) => {
  const categoriesForGroup: any = {};

  for (const answer of answers) {
    const categoryName = answer.question_category.category.name;
    const categoryValue = parseInt(answer.question_alternative.value);
    const groupName = answer.question_category.category.group.name;

    if (categoriesForGroup[groupName]) {
      if (categoriesForGroup[groupName].categories[categoryName]) {
        categoriesForGroup[groupName].categories[categoryName].value +=
          categoryValue;
      } else {
        categoriesForGroup[groupName].categories[categoryName] = {
          name: categoryName,
          value: categoryValue,
        };
      }

      categoriesForGroup[groupName].total += categoryValue;
    } else {
      categoriesForGroup[groupName] = {
        group: groupName,
        categories: {
          [categoryName]: {
            name: categoryName,
            value: categoryValue,
          },
        },
        total: categoryValue,
      };
    }
  }

  const sortedCategories = Object.entries(categoriesForGroup)
    .sort((a: any, b: any) => b[1].total - a[1].total)
    .slice(0, topN)
    .map(([category, data]: [string, any]) => [category, data.total]) as Array<
    [string, number]
  >;

  return sortedCategories;
};
