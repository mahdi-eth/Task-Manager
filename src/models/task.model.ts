import { ObjectId } from 'mongodb';

export interface Task {
  _id?: ObjectId;
  title: string;
  description?: string;
  completed: boolean;
  createdAt: Date;
  updatedAt: Date;
}
