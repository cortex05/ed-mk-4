import express from 'express';
import { getAllActiveSubjects } from '../controllers/activeSubjects.controller';

const activeSubjectsRoutes = express.Router()

activeSubjectsRoutes.get('/', getAllActiveSubjects);

export default activeSubjectsRoutes