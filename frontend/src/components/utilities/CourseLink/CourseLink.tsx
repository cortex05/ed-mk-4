import { useEffect, useState } from 'react'
import type { ICourseLink } from '../../../types/types'
import { handleCourseLinkColor } from '../../../utility/Functions'
import styles from './CourseLink.module.css'
import { useNavigate } from 'react-router-dom'

type Props = {
  link: ICourseLink
}
const CourseLink = (props: Props) => {
  const { link } = props
  const navigate = useNavigate();
  
  const [backColor, setBackColor] = useState<string>("blue")

  useEffect(() => {
    setBackColor(handleCourseLinkColor(link.domain))
  }, [])

  return (
    <div 
      className={`${backColor} p-1 mr-4 mb-[4px] text-center ${styles.break}`}
      onClick={() => navigate(`/course/${link.id}`)}>
      <p>{link.name}</p>
    </div>
  )
}

export default CourseLink