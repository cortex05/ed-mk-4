import mongoose from 'mongoose'

const unitSchema = new mongoose.Schema({
  chapterId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Chapter',
    required: true, 
    unique: false 
  },
  name: { type: String, required: true },
  order: { type: Number, required: true },
  description: [
    {
      id: { type: Number, required: true },
      text: { type: String, required: true }
    }
  ],
  freeAssetLinks: [
    {
      id: { type: Number, required: true },
      mediaType: { type: String, required: true },
      linkUrl: { type: String, required: true }
    }
  ]
})

unitSchema.index({ chapterId: 1, order: 1 })

const Unit = mongoose.model('Unit', unitSchema)

export default Unit