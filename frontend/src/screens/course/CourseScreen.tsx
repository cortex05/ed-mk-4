import React from 'react'
import { useParams } from "react-router-dom";

const CoursePage = () => {
  const { courseId } = useParams<string>();
  return (
    <div>
      Course Page
      <h1>Course Id: {courseId}</h1>
    </div>
  )
}

export default CoursePage