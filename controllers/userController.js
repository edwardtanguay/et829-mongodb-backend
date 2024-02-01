import { User } from '../schemas/userSchema.js';
import { handleError } from '../utils/handleError.js';

// addSingleUser

export const addSingleUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (e) {
    handleError(res, e);
  }
};

// getSingleUser

export const getSingleUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    user
      ? res.status(200).json(user)
      : res.status(404).json({ msg: `user ${req.params.id} not found` });
  } catch (e) {
    handleError(res, e);
  }
};

// getAllUsers

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (e) {
    handleError(res, e);
  }
};

// udpateSingleUser

export const updateSingleUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    user
      ? res.status(200).json(user)
      : res.status(404).json({ msg: `user ${req.params.id} not found` });
  } catch (e) {
    handleError(res, e);
  }
};

// deleteSingleUser

export const deleteSingleUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    res.status(200).json(user);
  } catch (e) {
    handleError(res, e);
  }
};
