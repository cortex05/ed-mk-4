import mongoose from 'mongoose'

const courseSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
})

const Course = mongoose.model("Course", courseSchema)

export default Course