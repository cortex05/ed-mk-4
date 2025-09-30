import GradeLink from "../models/gradeLinkModel";

export const fetchGradeLevels = (async () => {
  try {
    const data = await GradeLink.find(); // Direct DB query
    return data
  } catch (error) {
    console.error("Error fetching grade level links: ", error);
    return error
  }
})