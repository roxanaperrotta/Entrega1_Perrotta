import express from 'express';
import mongoose from 'mongoose';
import mocksRouter from './routes/mocks.router.js';
import dotenv from 'dotenv';
dotenv.config();

const app= express();
const MONGO_URI_ATLAS = process.env.MONGO_URI_ATLAS;


app.use(express.json());

app.use('/api/mocks', mocksRouter);

const connectMongoDB = async () => {
    try {
      await mongoose.connect(MONGO_URI_ATLAS);
      console.log('Connected to MongoDB');
    } catch (error) {
      console.error('MongoDB connection error:', error.message);
      process.exit(1);
    }
  };
connectMongoDB();

app.listen(8080, ()=>console.log('Servidor escuchando en el puerto 8080'))