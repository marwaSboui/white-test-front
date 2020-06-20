import {Availability} from './availability';

export interface User {
  _id?: string;
  role?: string;
  username: string;
  firstName: string;
  lastName: string;
  availability?: Availability[];
  token?: string;
  password?: string;
}
