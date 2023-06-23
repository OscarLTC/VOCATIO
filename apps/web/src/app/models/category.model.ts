import { Group } from './group.model';

export interface Category {
  id: number;
  name: string;
  group: Group;
}
