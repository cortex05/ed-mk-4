import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import type { ICourse } from '../../types/types';

import { badCourse, mockCourse } from '../../assets/mockData/course.ts'



const CoursePage = () => {
  const { courseId } = useParams<string>();
  const [course, setCourse] = useState<ICourse>()
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    setIsLoading(true)

    try {
      setCourse(mockCourse)
    } catch (error) {
      setCourse(badCourse)
    }
    
    setIsLoading(false)
  }, [])

  return (
    <div className='font-serif p-8'>
      {isLoading && 
        <h1 className='text-4xl'>Loading....</h1>
      }
      {!isLoading &&  course &&
        <div>
          <h1 className='text-center text-2xl'>Course Id: {courseId}!!</h1>
          <h1 className='text-center text-2xl underline underline-offset-8'>{course.name}</h1>
        </div>
      }
    </div>
  )
}

export default CoursePage