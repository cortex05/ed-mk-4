import mongoose from 'mongoose'

const chapterSchema = new mongoose.Schema({
  courseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course",
    required: true
  },
  name: { type: String, required: true },
  order: { type: Number, required: true }
})

chapterSchema.index({ courseId: 1, order: 1 })

const Chapter = mongoose.model('Chapter', chapterSchema)

export default Chapter