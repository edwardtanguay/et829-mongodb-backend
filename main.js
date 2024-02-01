import express from 'express';
import mongoose from 'mongoose';
import { booksRouter } from './router.js';
const app = express();
const port = 7575;

app.use('/books', booksRouter);

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
