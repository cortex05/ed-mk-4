import styles from './GradeLink.module.css'
import type { IGradeLink } from '../../../types/types'

type Props = {
  grade: IGradeLink
  openModal: Function
}

const GradeLink = (props : Props) => {
  const { grade, openModal } = props
  return (
    <div className={`${styles.link}`} onClick={() => openModal(grade)}>
      <h4 className='text-xl'>{grade.gradeName}</h4>
    </div>
  )
}

export default GradeLink