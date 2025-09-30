import mongoose from 'mongoose';

const CourseLinkSchema = new mongoose.Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  domain: { type: String, required: true }
});

const gradeLinkSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  gradeName: { type: String, required: true },
  supportText: { type: String, required: true },
  courseLinks: { type: [CourseLinkSchema], required: true }
});

const GradeLink = mongoose.model("GradeLink", gradeLinkSchema);

export default GradeLink;