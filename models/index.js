import mongoose from 'mongoose';
import gradesModel from '../models/gradesModel.js';
import dotenv from 'dotenv';

dotenv.config();

const db = {};
db.url = process.env.MONGODB;
db.mongoose = mongoose;
db.grades = gradesModel(mongoose);

export { db };
