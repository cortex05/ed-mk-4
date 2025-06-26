import React from 'react'
import styles from './Home.module.css'

const HomePage = () => {
  return (
    <div >
      <div className={`${styles.lander} p-8`}>
        <h1 className='text-center text-4xl mb-4'>Welcome to Daniel's App</h1>
        <p>This is an educational resource for helping people seek out information they may need for learning. If you lack access to a curriculum, if your teacher's explanations are lost on you or you're ahead of the curve and want to know what is next, this app is for you.</p>
      </div>
      <div className='p-8'>
        <div className='mb-8'>
          <h2 className='text-center text-2xl mb-4'>Higher overview</h2>
          <p className='mb-4'>This is app has two ways of finding a certain subject matter. Searching by content in a certain grade level or by searching certain domains like math and then narrowing down the specific course. Once you find the subject you are interested in, you will find a brief overview of the subject, its applications, its importance and you will be provided links to various FREE resources that go in depth.</p>
          <p>These resources can range from webpages that use illustrations for younger minds to documentation that would fit in a college textbook. They might be videos on apps like YouTube, or they might be as little as a great image that explains a single concept well.</p>
        </div>
        <div>
          <h2 className='text-center text-2xl mb-4'>Explain the two methods</h2>
          <p>Here I explain searching by grade level</p>
          <p>Here is where I explain by subjects. Mention I may point to a paid course, but it is worth it.</p>
        </div>
      </div>
    </div>
  )
}

export default HomePage