import { ObjectId } from 'mongodb';
import { Task } from '../models/task.model';
import { connectDB } from '../config/database';

let db: any;
connectDB().then(client => {
  db = client.db('taskmanager');
});

const collection = () => db.collection('tasks');

export const createTask = async (taskData: Task): Promise<Task> => {
  const newTask = {
    ...taskData,
    completed: taskData.completed || false,
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  const result = await collection().insertOne(newTask);
  return { ...newTask, _id: result.insertedId };
};

export const getTaskById = async (taskId: string): Promise<Task | null> => {
  return await collection().findOne({ _id: new ObjectId(taskId) });
};

export const getAllTasks = async (): Promise<Task[]> => {
  return await collection().find({}).toArray();
};

export const updateTask = async (taskId: string, updates: Partial<Task>): Promise<Task | null> => {
  const result = await collection().findOneAndUpdate(
    { _id: new ObjectId(taskId) },
    { $set: { ...updates, updatedAt: new Date() } },
    { returnDocument: 'after' }
  );
  return result.value;
};

export const deleteTask = async (taskId: string): Promise<boolean> => {
  const result = await collection().deleteOne({ _id: new ObjectId(taskId) });
  return result.deletedCount === 1;
};
