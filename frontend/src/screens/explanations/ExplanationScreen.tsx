import React from 'react'
// import { styles } from './ExplanationScreen.module.css'

const ExplanationScreen = () => {
  return (
    <div className='p-8'>
      <div className='text-center mb-8 border-b-2 pb-4'>
        <h1 className='text-4xl mb-8'>How to use this site</h1>
        <p className='text-2xl'>There are two main ways to use this site: browsing by grade level or by subject. Each path will lead you to an outline of a course you may encounter; complete with an explanation of what is important about the course and how it may come up in your studies. Finally, these explanations come with links to various FREE resources that go in depth on each topic. These could be links to videos, articles, or documentation on a subject. The complexity of the resources may vary.</p>
      </div>
      <div className='text-center mb-8 border-b-2 pb-4'>
        <h1 className='text-4xl mb-8'>Search by Grade Level</h1>
        <p>
          Clicking on the "Grade Levels" link will redirect you to a page with a list of grade levels.
        </p>
        <img src="../../assets/images/exp_one.png" alt="Grade Levels Link" />
      </div>
    </div>
  )
}

export default ExplanationScreen