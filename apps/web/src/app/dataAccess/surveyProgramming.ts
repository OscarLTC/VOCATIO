import axios from 'axios';
import { environment } from '../../environments/environment';
import { surveyProgrammingPerson } from '../models/surveyProgrammingPerson.model';
import { Answer } from '../models/answer.model';
import { SkillChartProps } from '../components/pdf/habilidades-blandas/SkillChart';
import { SkillImages } from '../models/skill.enum';
import { HabitsChartProps } from '../components/pdf/habitos-de-estudio/HabitsChart';
import { HabitImage } from '../models/habits.model';
import { SkillImage } from '../models/skills.model';
import { IntelligenceData } from '../models/intelligences';
import { IntelligencesChartProps } from '../components/pdf/inteligencias-multiples/IntelligenceChart';
import { InterestDataProps } from '../components/pdf/interes-vocacional/InterestData';
import { InterestChartProps } from '../components/pdf/interes-vocacional/InterestChart';
import { InteresData } from '../models/interest.mode';
import { ArchetypesChartProps } from '../components/pdf/arquetipos/ArchetypesChart';

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

  for (const category of categories) {
    const title = category[0];
    const percentage = category[1] / 30;
    const color =
      percentage < 0.4 ? '#9f9f9f' : percentage < 0.6 ? '#686868' : '#0a937c';

    skills.push({
      title: title,
      image: `${SkillImage[title]}.png`,
      percentage: Number((percentage * 100).toFixed(0)),
      color,
    });
  }

  return skills;
};

export const getHabitsData = (answers: Array<Answer>) => {
  const habits: HabitsChartProps['habits'] = [];
  const categories = getCategoriesValues(answers, 8);

  for (const category of categories) {
    const title = category[0];
    const percentage = category[1] / 10;
    const color =
      percentage < 0.4 ? '#bfbfbf' : percentage < 0.6 ? '#686868' : '#4a77da';

    habits.push({
      title,
      image: `${HabitImage[title]}.png`,
      percentage: Number((percentage * 100).toFixed(0)),
      color,
    });
  }

  return habits;
};

export const getIntelligenceData = (answers: Array<Answer>) => {
  const intelligences: IntelligencesChartProps['intelligences'] = [];
  const categories = getCategoriesValues(answers, 8);
  let index = 0;
  for (const category of categories) {
    const title = category[0];
    const percentage = category[1] / 30;

    const color =
      index === 0
        ? '#e37047'
        : index === 1
        ? '#e37047'
        : index === 2
        ? '#808080'
        : index === 3
        ? '#404040'
        : index === 4
        ? '#9f9f9f'
        : index === 5
        ? '#404040'
        : index === 6
        ? '#bfbfbf'
        : '#606060';
    intelligences.push({
      title,
      percentage: Number((percentage * 100).toFixed(0)),
      color,
    });
    index++;
  }

  return intelligences.sort((a, b) => b.percentage - a.percentage);
};

export const getInterestsData = (answers: Array<Answer>) => {
  const interestsData: InterestChartProps['interests'] = [];
  const categories = getGroupsValues(answers, 21);
  let index = 0;
  for (const category of categories) {
    const title = category[0];
    const percentage = (category[1] - 20) / 80;

    const color =
      index === 0
        ? InteresData[title as keyof typeof InteresData].color
        : index === 1
        ? InteresData[title as keyof typeof InteresData].color
        : index === 2
        ? InteresData[title as keyof typeof InteresData].color
        : index === 3
        ? '#404040'
        : index === 4
        ? '#9f9f9f'
        : index === 5
        ? '#202020'
        : index === 6
        ? '#c1c1c1'
        : index === 7
        ? '#606060'
        : index === 8
        ? '#000000'
        : index === 9
        ? '#dfdfdf'
        : index === 10
        ? '#808080'
        : index === 11
        ? '#404040'
        : index === 12
        ? '#9f9f9f'
        : index === 13
        ? '#202020'
        : index === 14
        ? '#bfbfbf'
        : index === 15
        ? '#606060'
        : index === 16
        ? '#000000'
        : index === 17
        ? '#dfdfdf'
        : index === 18
        ? '#808080'
        : index === 19
        ? '#404040'
        : '#9f9f9f';
    interestsData.push({
      color,
      percentage: Number((percentage * 100).toFixed(0)),
      title,
    });
    index++;
  }
  return interestsData;
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

export const getArquetypesData = (answers: Array<Answer>) => {
  const arquetypesData: any = [];
  const categories = getCategoriesValues(answers, 12);
  for (const category of categories) {
    const percentage = category[1] / 30;
    
    arquetypesData.push(Object.values({
      percentage: Number((percentage * 100).toFixed(0)),
      selected: category[0] === categories[0][0] || category[0] === categories[1][0] || category[0] === categories[2][0],
      title: category[0],
    }));
  }

  return orderArchetypes(arquetypesData)
}

const orderArchetypes = (archetypes: any) => {
  const orderedArchetypes = [ "GOBERNANTE (CONTROL)","CREADOR (INNOVACION)", "CUIDADOR (SERVICIO)", "BUFON (DIVERSIÓN)", "AMANTE (INTIMIDAD)",  "AMIGO  (PERTENENCIA)","HEROE (MAESTRIA)","REBELDE (LIBERACIÓN Y CAMBIO)","MAGO (PODER)", "INOCENTE ( OPTIMISMO)",  "EXPLORADOR (LIBERTAD)","SABIO (CONOCIMIENTO)"];

  const orderedArchetypesData = [];

  for (const archetype of orderedArchetypes) {
    const data = archetypes.find((category: any) => category[2] === archetype);
    if (data) {
      orderedArchetypesData.push(data);
    }
  }

  const newArray = orderedArchetypesData.map((item: any) => {
    return {
      percentage: item[0],
      selected: item[1],
      title: item[2],
    }
  })
  return newArray;
}
