import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import connect from '../db/connect'
import coursesRoutes from '../routes/courses.routes'
dotenv.config();

const port: string | number = process.env.PORT || 5000

const app: Express = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(cors()) 

app.use('/api/courses', coursesRoutes)

app.listen(port, () => {
  connect.connectToServer((err: any) => {
    if (err) {
      console.error('Failed to connect to database', err)
      process.exit()
    } else {
      console.log('Successfully connected to database')
    }
  })
  console.log(`Server started on ${port}`)
})