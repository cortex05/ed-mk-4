import express from 'express'

const router = express.Router()

router.route('/:courseId').get((req, res) => {
  const { courseId } = req.params
  // Fetch course data using courseId
  res.json({ message: `Course ID: ${courseId}` })
})

export default router