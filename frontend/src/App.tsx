import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./screens/home/HomeScreen";
import GradeLevels from "./screens/gradeLevel/GradeLevelScreen";
import Subjects from "./screens/subjects/SubjectsScreen";
import Course from "./screens/course/CourseScreen";
import Explanation from "./screens/explanations/ExplanationScreen";
import "./App.css";
import { useEffect, useState } from "react";
import DataContext, { type ActiveSubjects } from "./context/DataContext";
import { api } from "./utility/api";

function App() {
  const [activeSubjects, setActiveSubjects] = useState<ActiveSubjects[] | null>(null)
  const [gradeLevelLinks, setGradeLevelLinks] = useState<null | any>(null)

  const fetchActiveSubjects = async () => {
    try {
      const { data } = await api.get<ActiveSubjects[]>('/api/active-subjects')

      setActiveSubjects(data);
    } catch (error) {
      console.error("Error fetching active subjects:", error);
    }

    try {
      const  { data } = await api.get<any>('api/grade-levels')
      setGradeLevelLinks(data);
    } catch (error) {
      console.error("Error fetching grade level links:", error)
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
            gradeLevelLinks
          }}
        >
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/gradelevels" element={<GradeLevels />} />
              <Route path="/subjects" element={<Subjects />} />
              <Route path="/course/:courseId" element={<Course />} />
              <Route path="/how_to_use" element={<Explanation />} />
            </Routes>
          </BrowserRouter>
        </DataContext.Provider>
      </div>
    </>
  );
}

export default App;
