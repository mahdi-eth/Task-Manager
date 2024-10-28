import { MongoClient } from 'mongodb';

const uri = process.env.MONGO_URI || 'mongodb://root:rootpassword@mongodb:27017';

export const connectDB = async () => {
  try {
    const client = new MongoClient(uri);
    await client.connect();
    console.log('Connected to MongoDB');
    return client;
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};
