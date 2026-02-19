import { Request, Response } from "express"
import { fetchActiveSubjects } from "../services/activeSubjects.service"

export const getAllActiveSubjects = async (req: Request, res: Response) => {
  try {
    const data = await fetchActiveSubjects()
    res.json(data)
  } catch (error) {
    res.status(500).json({ message: "Error fetching active subjects" })
  }
}