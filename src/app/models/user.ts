import {Availability} from './availability';

export interface User {
  _id: string;
  role: string;
  firstName: string;
  lastName: string;
  availability: Availability[];
}
