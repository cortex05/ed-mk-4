import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import coursesRoutes from '../routes/courses'
dotenv.config();

const port: string | number = process.env.PORT || 5000

const app: Express = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(cors()) 

app.use('/api/courses', coursesRoutes)

app.listen(port, () => console.log(`Server started on ${port}`))