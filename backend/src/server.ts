import express, { Express } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectToServer } from '../db/connect'
import coursesRoutes from '../routes/courses.routes'
import activeSubjectsRoutes from '../routes/activeSubjects.routes';
import gradeLevelsRoutes from '../routes/gradeLevels.routes';
dotenv.config();

const port: string | number = process.env.PORT || 5000

connectToServer()

const app: Express = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(cors()) 

app.use('/api/courses', coursesRoutes)
app.use('/api/active-subjects', activeSubjectsRoutes)
app.use('/api/grade-levels', gradeLevelsRoutes)

app.listen(port, () => {
  
  console.log(`Server started on ${port}`)
})