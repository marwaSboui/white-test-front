import {Availability} from './availability';

export interface ExamRoom {
  _id?: string;
  number: string;
  availability: Availability[];
}
