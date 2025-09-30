import React from 'react'
import styles from './ExplanationScreen.module.css'
import gradeLinkImage from '../../assets/images/exp_1.png'
import subjectLinkImage from '../../assets/images/exp_2.png'
import gradeModal from '../../assets/images/exp_3.png'
import gradeSpecificCourse from '../../assets/images/exp_4.png'

const ExplanationScreen = () => {
  return (
    <div className='p-8'>
      <div className='text-center mb-8 border-b-2 pb-4'>
        <h1 className='text-4xl mb-8'>How to use this site</h1>
        <p className='text-2xl'>There are two main ways to use this site: browsing by grade level or by subject. Each path will lead you to an outline of a course you may encounter; complete with an explanation of what is important about the course and how it may come up in your studies. Finally, these explanations come with links to various FREE resources that go in depth on each topic. These could be links to videos, articles, or documentation on a subject. The complexity of the resources may vary.</p>
      </div>
      <div className={`text-center mb-8 border-b-2 pb-4 ${styles.imgBorder}`}>
        <h1 className='text-4xl mb-8'>Search by Grade Level</h1>
        <p className='text-2xl mb-4'>
          Clicking on the "Grade Levels" link will redirect you to a page with a list of grade levels.
        </p>
        <img src={gradeLinkImage} alt="Grade Levels Link" className='mb-4'/>
        <img src={subjectLinkImage} alt="Subjects Link" className='mb-4'/>
        <p className='text-2xl mb-4'>
          When you click on a grade level, you will see a pop up that will give you an overview of that grade level and a list of links that will show the subjects at that level that are currently available. If you click on one of the subject links, you will be directed to a page that details that specific course.
        </p>
        <img src={gradeModal} alt="Grade Level Modal" className='mb-4'/>
        <img src={gradeSpecificCourse} alt="Grade Specific Course" className='mb-4'/>
        <p className='text-2xl mb-4'>
          Click <a href="#specific-course">HERE</a> for an explanation of a specifc course.
        </p>
      </div>
      <div>
        <h1 className='text-4xl mb-8 text-center'>Search by Subject</h1>
        <p className='text-2xl mb-4 text-center'>
          Clicking on the "Subjects" link will redirect you to a page with a list of subjects. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit laboriosam ut harum tempora asperiores deleniti perferendis, quos distinctio iste repudiandae obcaecati quo mollitia pariatur voluptatibus eum, architecto fugiat laudantium. Praesentium. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente impedit mollitia fugit error quis, earum temporibus rerum doloremque illum? Maiores est, laudantium atque officia odio perferendis asperiores quae ad a? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis consequatur qui corrupti illum laborum perspiciatis, aut dignissimos, magni id ipsa eius consequuntur nam sed cupiditate quam sint magnam voluptatum esse?
        </p>
      </div>
      <div id='specific-course'>
        <h1 className='text-4xl mb-8 text-center'>Navigating a specific course</h1>
      </div>
    </div>
  )
}

export default ExplanationScreen