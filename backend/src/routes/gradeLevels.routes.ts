import express from 'express';
import { getGradeLevelLinks } from '../controllers/gradeLevels.controller';

const gradeLevelsRoutes = express.Router()

gradeLevelsRoutes.get('/', getGradeLevelLinks)

export default gradeLevelsRoutes