import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const UserSchema = new Schema({
  username: {
    type: String,
    required: 'Enter your username'
  },
  password: {
    type: String,
    required: 'Enter your password'
  },
  email: {
    type: String
  },
  status: {
    type: String,
    required: true,
    enum: ['active', 'complete', 'pastdue'],
    default: 'active'
  },
  phone: {
    type: String
  },
  created_date: {
    type: Date,
    default: Date.now
  }
});