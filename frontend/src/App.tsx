import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./screens/home/HomeScreen";
import GradeLevels from "./screens/gradeLevel/GradeLevelScreen";
import Subjects from "./screens/subjects/SubjectsScreen";
import Course from "./screens/course/CourseScreen";
import "./App.css";
import { useEffect, useState } from "react";
import DataContext, { type ActiveSubjects } from "./context/DataContext";

function App() {
  const [activeSubjects, setActiveSubjects] = useState<ActiveSubjects[] | null>(
    null
  );

  const fetchActiveSubjects = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/api/active-subjects`
      );
      const data = await response.json();
      setActiveSubjects(data);
    } catch (error) {
      console.error("Error fetching active subjects:", error);
    }
  };

  useEffect(() => {
    fetchActiveSubjects();
  }, []);

  return (
    <>
      <div>
        <DataContext.Provider
          value={{
            activeSubjects,
          }}
        >
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/gradelevels" element={<GradeLevels />} />
              <Route path="/subjects" element={<Subjects />} />
              <Route path="/course/:courseId" element={<Course />} />
            </Routes>
          </BrowserRouter>
        </DataContext.Provider>
      </div>
    </>
  );
}

export default App;
