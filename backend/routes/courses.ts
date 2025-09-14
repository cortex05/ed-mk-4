import express, { Request, Response } from 'express';
const db = require('../db/connect')

const coursesRoutes = express.Router()

coursesRoutes.route('/specific/:courseId').get((req: Request, res: Response) => {
  const { courseId } = req.params
  // Fetch course data using courseId
  res.json({ message: `Course ID: ${courseId}` })
  return res.json({ message: `Course ID: ${courseId}` })
})

coursesRoutes.route('/test').get(async (req: Request, res: Response) => {
  const database = db.getDb()
  const data = await database.collection("testData").find({}).toArray()
  return res.json(data)
})

export default coursesRoutes