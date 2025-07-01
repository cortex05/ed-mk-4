import { useEffect, useState } from 'react'
import type { ICourseLink } from '../../../types/types'
import { handleCourseLinkColor } from '../../../utility/Functions'
import styles from './CourseLink.module.css'

type Props = {
  link: ICourseLink
}
const CourseLink = (props: Props) => {
  const { link } = props
  const [backColor, setBackColor] = useState<string>("blue")

  useEffect(() => {
    setBackColor(handleCourseLinkColor(link.domain))
  }, [])

  return (
    <div className={`${backColor} p-1 mr-4 mb-[4px] text-center ${styles.break}`}>
      <p>{link.name}</p>
    </div>
  )
}

export default CourseLink