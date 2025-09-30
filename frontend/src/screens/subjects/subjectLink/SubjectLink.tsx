import styles from './SubjectLink.module.css'
import type { ISubjectLink } from '../../../types/types'

type Props = {
  subject: ISubjectLink
  openModal: Function
}

const SubjectLink = (props : Props) => {
  const { subject, openModal } = props
  return (
    <div className={`${styles.link}`} onClick={() => openModal(subject)} key={subject.id}>
      <h4 className='text-xl'>{subject.displayName}</h4>
    </div>
  )
}

export default SubjectLink