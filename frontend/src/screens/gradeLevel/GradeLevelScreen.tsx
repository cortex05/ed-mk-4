import React from 'react'
import styles from './GradeLevelScreen.module.css'
import GradeLink from './GradeLink/GradeLink'

const GradeLevelPage = () => {
  return (
    <div className='p-8'>
      <h1 className='text-4xl text-center mb-8'>Click a grade to get an overview</h1>
      <div className='flex flex-wrap'>
        <GradeLink />
        <GradeLink />
        <GradeLink />
        <GradeLink />
        <GradeLink />
      </div>
    </div>
  )
}

export default GradeLevelPage