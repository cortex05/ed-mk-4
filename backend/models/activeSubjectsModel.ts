import mongoose from 'mongoose';

const activeSubjectSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  domain: { type: String, required: true },
  displayName: { type: String, required: true }
});

const ActiveSubject = mongoose.model("ActiveSubject", activeSubjectSchema);

export default ActiveSubject;