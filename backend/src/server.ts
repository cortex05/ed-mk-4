import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { connectToServer } from '../db/connect'
import coursesRoutes from '../routes/courses.routes'
import activeSubjectsRoutes from '../routes/activeSubjects.routes';
dotenv.config();

const port: string | number = process.env.PORT || 5000

connectToServer()

const app: Express = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(cors()) 

app.use('/api/courses', coursesRoutes)
app.use('/api/active-subjects', activeSubjectsRoutes)

app.listen(port, () => {
  
  console.log(`Server started on ${port}`)
})