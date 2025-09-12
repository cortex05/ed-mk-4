import express, { Request, Response } from 'express';

const coursesRoutes = express.Router()

coursesRoutes.route('/:courseId').get((req: Request, res: Response) => {
  const { courseId } = req.params
  // Fetch course data using courseId
  res.json({ message: `Course ID: ${courseId}` })
  return res.json({ message: `Course ID: ${courseId}` })
})

export default coursesRoutes