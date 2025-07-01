import GradeLink from './GradeLink/GradeLink'
import { mockGradeLinks } from '../../assets/mockData/gradeLevelLinks'
import Modal from '../../components/Modal/Modal'
import { useState } from 'react'
import type { ICourseLink, IGradeLink } from '../../types/types'
import CourseLink from '../../components/utilities/CourseLink/CourseLink'
import styles from './GradeLevelScreen.module.css'

const GradeLevelPage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [activePreview, setActivePreview] = useState<IGradeLink>()

  const handlePreview = (linkData: IGradeLink) => {
    setActivePreview(linkData)
    setIsModalOpen(true)
  }

  return (
    <div className='p-8'>
      <h1 className='text-4xl text-center mb-8'>Click a grade to get an overview</h1>
      <div className='flex flex-wrap justify-center'>
        {mockGradeLinks.map((gradeLink) => {
          return <GradeLink key={gradeLink.id} grade={gradeLink} openModal={handlePreview}/>
        })}
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2 className='text-3xl text-center'>{activePreview?.gradeName}</h2>
        <h3 className='text-l mb-4'>{activePreview?.supportText}</h3>
        <div className={`mt-2 ${styles.break}`}>
          {activePreview?.courseLinks.map((courseLink: ICourseLink) => {
            return <CourseLink key={courseLink.id} link={courseLink}/>
          })}
        </div>
      </Modal>
    </div>
  )
}

export default GradeLevelPage