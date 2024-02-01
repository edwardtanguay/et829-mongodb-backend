import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
import { booksRouter } from './routers/bookRouter.js';
import { userRouter } from './routers/userRouter.js';
const app = express();
const port = 7575;

app.use(express.json());
app.use(cors());

app.use('/books', booksRouter);
app.use('/users', userRouter);

const dbUrl =
  'mongodb+srv://albert:NtwisvjR2WYHKtEU@cluster0.vqwtvba.mongodb.net/?retryWrites=true&w=majority';

const connectToDb = async () => {
  try {
    await mongoose.connect(dbUrl);
  } catch (e) {
    console.error(e);
  }
};

connectToDb().then(() =>
  app.listen(port, console.log(`server is running on ${port}`))
);
