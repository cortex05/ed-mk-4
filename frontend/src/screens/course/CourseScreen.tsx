import React from 'react'
import { useParams } from "react-router-dom";

const CoursePage = () => {
  const { courseId } = useParams<string>();
  return (
    <div className='font-serif'>
      Course Page
      <h1  className='text-center'>Course Id: {courseId}!!</h1>
    </div>
  )
}

export default CoursePage