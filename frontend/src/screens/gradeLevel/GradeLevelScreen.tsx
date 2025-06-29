import React from 'react'
import styles from './GradeLevelScreen.module.css'
import GradeLink from './GradeLink/GradeLink'
import { mockGradeLinks } from '../../assets/mockData/gradeLevelLinks'

const GradeLevelPage = () => {
  return (
    <div className='p-8'>
      <h1 className='text-4xl text-center mb-8'>Click a grade to get an overview</h1>
      <div className='flex flex-wrap'>
        {mockGradeLinks.map((gradeLink) => {
          return <GradeLink key={gradeLink.id} grade={gradeLink}/>
        })}
      </div>
    </div>
  )
}

export default GradeLevelPage