import mongoose from 'mongoose';

export const userSchema = new mongoose.Schema(
  {
    firstName: String,
    lastName: String,
    mobile: Number,
    email: String,
    address: {
      street: String,
      number: String,
      zipCode: String,
      state: String,
    },
  },
  {
    collection: 'users',
    timestamps: true,
    versionKey: false,
  }
);

export const User = mongoose.model('User', userSchema);
