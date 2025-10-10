import styles from './Header.module.css'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate()
  return (
    <div className={`${styles.headerBody} w-screen p-4 flex items-center`}>
      <div className={`${styles.links}`}> 
        <button onClick={() => navigate("/")} className={`${styles.headerDivider} text-2xl`}>Home</button>
        <button onClick={() => navigate("/gradelevels")} className={`${styles.headerDivider}`}>Grade Level</button>
        <button onClick={() => navigate("/subjects")} className={`${styles.headerDivider}`}>Subjects</button>
        <button onClick={() => navigate("/how_to_use")}>How to Use</button>
      </div>
    </div>
  )
}

export default Header