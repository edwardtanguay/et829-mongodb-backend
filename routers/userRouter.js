import express from 'express';

import {
  getSingleUser,
  getAllUsers,
  addSingleUser,
  updateSingleUser,
  deleteSingleUser,
} from '../controllers/userController.js';

export const userRouter = express.Router();

userRouter.route('/').post(addSingleUser).get(getAllUsers);
userRouter
  .route('/:id')
  .get(getSingleUser)
  .patch(updateSingleUser)
  .delete(deleteSingleUser);
