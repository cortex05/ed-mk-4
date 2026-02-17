import Chapter from "../models/chapterModel"
import Course from "../models/courseModel"
import Unit from "../models/unitModel"

export const fetchSpecificCourse = (async (courseId: string) => {
  try {
    //GET course
    const course = await Course.findOne({ id: courseId }).lean()

    if (!course) {
      throw new Error('Course not found')
    }

    //GET chapters associated with that course
    const chapters = await Chapter
      .find({ courseId: course._id })
      .sort({ order: 1 })
      .lean()

    if (chapters.length === 0) {
      return { ...course, chapters: [] }
    }
    
    //GET the units associated with the chapters
    const chapterIds = chapters.map(c => c._id)

    const units = await Unit
      .find({ chapterId: { $in: chapterIds } })
      .sort({ order: 1 })
      .lean()

    const unitsByChapter = new Map<string, any[]>()

    for (const unit of units) {
      const key = unit.chapterId.toString()
      if (!unitsByChapter.has(key)) {
        unitsByChapter.set(key, [])
      }
      unitsByChapter.get(key)!.push(unit)
    }

    // Assemble
    const chaptersWithUnits = chapters.map(chapter => ({
      ...chapter,
      units: unitsByChapter.get(chapter._id.toString()) || []
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