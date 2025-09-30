import Course from "../models/courseModel"

export const fetchSpecificCourse = (async (courseId: string) => {
  try {
    const data = await Course.findOne({ id: courseId })
    return data
  } catch (error) {
    console.error("Error fetching specific course: ", error)
    return error
  }
})