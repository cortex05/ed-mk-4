// const db = require('../db/connect')
import { Request, Response } from 'express'
import expressAsyncHandler from "express-async-handler"

// export const fetchTestData = async () => {
//   const database = db.getDb()
//   const data = await database.collection("testData").find({}).toArray()
//   return data
// }

import Course from "../models/courseModel"

export const fetchSpecificCourse = expressAsyncHandler(async (req: Request, res: Response) => {
  // const course = await Course.findOne({ id: req.params.courseId })
  // res.status(200).json(course)
  const { courseId } = req.params;
  try {
    const data = await Course.findOne({ id: courseId }); // Direct DB query
    return res.json(data);
  } catch (error) {
    console.error("Error fetching specific course: ", error);
    return res.status(500).json({ message: "Internal server error" });
  }
})



// async (courseId: string) => {
//   console.log("testing info", courseId)
//   const database = db.getDb()
//   const data = await database.collection("courses").findOne({ id: courseId })
//   return data
// }
