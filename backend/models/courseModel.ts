import mongoose from 'mongoose';

const courseSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  chapters: [
    {
      id: { type: Number, required: true },
      name: { type: String, required: true },
      units: [
        {
          id: { type: Number, required: true },
          name: { type: String, required: true },
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
        }
      ]
    }
  ]
});

const Course = mongoose.model("Course", courseSchema);

export default Course;