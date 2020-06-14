import {User} from './user';
import {ExamRoom} from './exam-room';

export interface Exam {
  _id: string;
  date: Date;
  status: string;
  score: number;
  student: User;
  supervisor: User;
  examRoom: ExamRoom;
}
