import mongoose from 'mongoose'

const chapterSchema = new mongoose.Schema({
  courseId: { type: String, required: true, unique: false},
  name: { type: String, required: true },
  order: {type: Number, required: true }
})

const Chapter = mongoose.model('Chapter', chapterSchema)

export default Chapter