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
        <h1 className='text-4xl mb-8' id='how-to-use'>How to use this site</h1>
        <p className='text-2xl mb-4'>
          This site is meant to be a tool for people to use to find guidance in their studies. It is not a substitute for a course or a teacher, but rather supplemental resources that may shed light on a lesson or provide a direction for a student who lacking one. This site lacks the nuance of a human teacher with a planned curiculum that is backed by personal experience as well as the cusomization and personalization of various AI educational tools. This is a tool for users to take their education into their own hands and to help them seek out what they need. The initiative and discernment of the user of this site is paramount to their success in their studies. 
        </p>
        <p className='text-2xl'>
          There are two main ways to use this site: browsing by grade level or by subject. Each path will lead you to an outline of a course you may encounter; complete with an explanation of what is important about the course and how it may come up in your studies. Finally, these explanations come with links to various FREE resources that go in depth on each topic. These could be links to videos, articles, or documentation on a subject. The complexity of the resources may vary.</p>
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
          If you click on the "Subjects" link, you will be redirected the Subjects page. There you will see various subjects (math, science, etc.) that you can click on.
        </p>
        {/* IMAGE HERE */}
        <p className='text-2xl mb-4 text-center'>
          When you click on a subject, you will see a pop up that will give you an overview of that subject along with links to the various courses that fall under that category. These will typically be listed from earliest/easist to latest/hardest in that subject's progression.
        </p>
        {/* IMAGE HERE */}
        <p className='text-2xl mb-4 text-center'>
          When you click on a course, you will be redirected to a page that details that specific course.
        </p>
        {/* IMAGE HERE */}
      </div>
      <div id='specific-course'>
        <h1 className='text-4xl mb-8 text-center'>Navigating a specific course</h1>
        <p className='text-2xl mb-4 text-center'>
          The specific course page will give you a list of "chapters" that each cover the various subject matter of that course. These are akin to a unit in a course or a chapter in a textbook for it. Clicking on one will reveal the "units" within that chapter. 
        </p>
        {/* IMAGE HERE */}
        <p className='text-2xl mb-4 text-center'>
          When you click on a unit, you will see a brief description of what that unit covers. As mentioned before, each description is not a substitute for the full content of the course. The descriptions are tailored to be an overview that will explain what is to be learned, why it might be important and how it might come up in your education. Additionally, there may be advice on common pitfalls that arise in learning these concepts.
        </p>
        {/* IMAGE HERE */}
        <p className='text-2xl mb-4 text-center'>
          Lastly, a after the description of the unit, various links to free resources that go in depth on the subject matter will be provided. The complexity of the resources may vary and the sources will vary. These links were free when they were selected, but it is possible that they may become paid in the future. All links are external to the site and are in no way affiliated with this project.
        </p>
      </div>
    </div>
  )
}

export default ExplanationScreen