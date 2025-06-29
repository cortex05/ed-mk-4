import styles from './GradeLink.module.css'
import type { IGradeLink } from '../../../types/types'

type Props = {
  grade: IGradeLink
}

const GradeLink = (props : Props) => {
  const { grade } = props
  return (
    <div className={`${styles.link}`}>
      <h4 className='text-xl'>{grade.gradeName}</h4>
    </div>
  )
}

export default GradeLink