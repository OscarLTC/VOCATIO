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
