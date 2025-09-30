import mongoose from 'mongoose';

const CourseLinkSchema = new mongoose.Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  domain: { type: String, required: true }
})

const activeSubjectSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  domain: { type: String, required: true },
  displayName: { type: String, required: true },
  description: { type: String, required: true },
  courseLinks: [CourseLinkSchema]
});

const ActiveSubject = mongoose.model("ActiveSubject", activeSubjectSchema);

export default ActiveSubject;