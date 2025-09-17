import { MongoClient, ServerApiVersion, Db } from 'mongodb';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
// dotenv.config({path: '../config.env'});
dotenv.config({ path: require('path').resolve(__dirname, '../config.env') });

const atlasUri = process.env.ATLAS_URI;
if (!atlasUri) {
  throw new Error('ATLAS_URI environment variable is not set.');
}

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(atlasUri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// let db: Db


export const connectToServer = async () => {
  try {
    const connection =await mongoose.connect(atlasUri as string);
    console.log(`Connected to MongoDB with Mongoose: ${connection.connection.host}`);
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
    throw err;
  }
};