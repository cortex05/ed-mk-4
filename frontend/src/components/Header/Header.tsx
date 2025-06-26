import React from 'react'
import styles from './Header.module.css'
import Button from '../utilities/Button/Button'

const Header = () => {
  return (
    <div className={`${styles.headerBody} w-screen p-4 flex justify-between items-center`}>
      <div className='text-xl'>Header</div>
      <div>
        <Button>Submit</Button>
      </div>
    </div>
  )
}

export default Header