import Chapter from "../models/chapterModel"
import Course from "../models/courseModel"
import Unit from "../models/unitModel"

export const fetchSpecificCourse = (async (courseId: string) => {
  try {
    const course = await Course.findOne({ id: courseId })

    if(!course){
      throw new Error('Course not found')
    }

    const chapters = await Chapter
      .find({ courseId: course.id })
      .sort({ order: 1 })

    const units = await Unit
      .find({ chapterId: { $in: chapters.map(c => c._id) } })
      .sort({ order: 1 })

    const chaptersWithUnits = chapters.map(chapter => ({
      ...chapter.toObject(),
      units: units.filter(u => u.chapterId.equals(chapter._id))
    }))
    const courseReturn = {
      ...course,
      chapters: chaptersWithUnits
    }

    return courseReturn
  } catch (error) {
    console.error("Error fetching specific course: ", error)
    return error
  }
})