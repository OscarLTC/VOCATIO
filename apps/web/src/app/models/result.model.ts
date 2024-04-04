export interface Result {
  id: number;
}

export interface ResultTypeSix extends Result {
  learningStyle: string;
  dominantCategory: string;
  mainFeatures: string;
  keywords: string;
  recommnendations: string;
}

export interface ResultTypeFour extends Result {
  recommnendations: string;
}

export interface ResultTypeTwo extends Result {
  category_id: number;
  characteristics: string[];
  archetype: string;
  concept: string;
  definition: string;
  group_archetype: {
    color: string;
    hero: string;
  };
  image_archetype: string[];
}
