import React from 'react'
import type { ICourseLink } from '../../../types/types'
type Props = {
  link: ICourseLink
}
const CourseLink = (props: Props) => {
  const { link } = props
  const handleColor = (value:string) => {
    switch(value){
      case "MATH":
        return "red"
      default:
        return "blue"
    }
  }

  // handleColor(link.domain)
  return (
    <div className={`bg-${handleColor(link.domain)}`}>
      <p>{link.name}</p>
    </div>
  )
}

export default CourseLink