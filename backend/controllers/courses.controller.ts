import { Request, Response } from "express"
import { fetchSpecificCourse } from "../services/courses.service"

// export const getTestData = async (req: Request, res: Response) => {
//   try {
//     const data = await fetchTestData()
//     return res.json(data)
//   } catch (error) {
//     console.error("Error fetching test data: ", error)
//     return res.status(500).json({ message: "Internal server error" })
//   }
// }

export const getSpecificCourse = async (req: Request, res: Response) => {
  const { courseId } = req.params
  try {
    const data = await fetchSpecificCourse(courseId)
    return res.json(data)
  } catch (error) {
    console.error("Error fetching specific course: ", error)
    return res.status(500).json({ message: "Internal server error" })
  }
}