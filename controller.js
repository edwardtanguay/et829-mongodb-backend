import { Book } from './schema.js';

const handleError = (res, e) => {
  return res.status(500).json(e);
};

export const addSingleBook = async (req, res) => {
  try {
    const book = await Book.create(req.body);
    res.status(201).json(book);
  } catch (e) {
    res.status(500).json(e);
  }
};

export const getSingleBook = async (req, res) => {
  try {
    /* const book = await Book.find({_id : ObjectId(req.params.id)}) */
    const book = await Book.findById(req.params.id);
    book
      ? res.status(201).json(book)
      : res.status(404).json({ msg: `book not found ${req.params.id}` });
  } catch (e) {
    res.status(500).json(e);
  }
};

export const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    await res.status(200).json(books);
  } catch (e) {
    handleError(res, e);
  }
};

export const updateSingleBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body);
    book
      ? res.status(201).json(book)
      : res.status(404).json({ msg: `book not found ${req.params.id}` });
  } catch (e) {
    handleError(res, e);
  }
};

export const deleteSingleBook = async (req, res) => {
  try {
    /* const book = await Book.deleteOne({_id : ObjectId(req.params.id)}); */
    const book = await Book.findByIdAndDelete(req.params.id);
    book
      ? res.status(201).json(book)
      : res.status(404).json({ msg: `book not found ${req.params.id}` });
  } catch (e) {
    handleError(res, e);
  }
};
