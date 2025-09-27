import ActiveSubject from "../models/activeSubjectsModel";

export const fetchActiveSubjects = async () => {
  try {
    const activeSubjects = await ActiveSubject.find();
    return activeSubjects;
  } catch (error) {
    throw new Error("Error fetching active subjects");
  }
};