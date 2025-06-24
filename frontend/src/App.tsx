import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header'
import Home from './screens/home/HomeScreen'
import GradeLevels from './screens/gradeLevel/GradeLevelScreen'
import Subjects from './screens/subjects/SubjectsScreen'
import Course from './screens/course/CourseScreen'
import './App.css'

function App() {

  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gradelevels" element={<GradeLevels />} />
          <Route path="/subjects" element={<Subjects />} />
          <Route path="/course/:courseId" element={<Course />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
