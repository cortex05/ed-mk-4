const db = require('../db/connect')

export const fetchTestData = async () => {
  const database = db.getDb()
  const data = await database.collection("testData").find({}).toArray()
  return data
}

export const fetchSpecificCourse = async (courseId: string) => {
  console.log("testing info", courseId)
  const database = db.getDb()
  const data = await database.collection("courses").findOne({ id: courseId })
  return data
}
