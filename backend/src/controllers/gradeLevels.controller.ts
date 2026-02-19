import { Request, Response } from "express"
import { fetchGradeLevels } from "../services/gradeLevels.service"

export const getGradeLevelLinks = async (req: Request, res: Response) => {
  try {
    const data = await fetchGradeLevels()
    return res.json(data)
  } catch (error) {
    console.error("Error fetching grade level links: ", error)
    return res.status(500).json({ message: "Internal server error" })
  }
}