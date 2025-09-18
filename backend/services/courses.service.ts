// const db = require('../db/connect')
import { Request, Response } from 'express'
import expressAsyncHandler from "express-async-handler"

// export const fetchTestData = async () => {
//   const database = db.getDb()
//   const data = await database.collection("testData").find({}).toArray()
//   return data
// }

import Course from "../models/courseModel"

export const fetchSpecificCourse = (async (courseId: string) => {
  // const course = await Course.findOne({ id: req.params.courseId })
  // res.status(200).json(course)
  try {
    const data = await Course.findOne({ id: courseId }); // Direct DB query
    return data
  } catch (error) {
    console.error("Error fetching specific course: ", error);
    return error
  }
})



// async (courseId: string) => {
//   console.log("testing info", courseId)
//   const database = db.getDb()
//   const data = await database.collection("courses").findOne({ id: courseId })
//   return data
// }
