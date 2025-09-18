import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { ICourse } from "../../types/types";

import { badCourse, mockCourse } from "../../assets/mockData/course.ts";
import ChapterDisplay from "./displays/chapter/ChapterDisplay.tsx";
import axios from "axios";

const CoursePage = () => {
  const { courseId } = useParams<string>();
  const [course, setCourse] = useState<ICourse>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);

    try {
      // setCourse(mockCourse);
      axios.get(`http://localhost:5000/api/courses/ALGEBRA_ONE`)
        .then((data) => {
          console.log("Data: ", data.data);
          setCourse(data.data);
        })
        .catch((error) => {
          console.error("Error fetching course data:", error);
        })
    } catch (error) {
      setCourse(badCourse)
    }

    setIsLoading(false)
  }, []);

  return (
    <div className="font-serif p-8">
      {isLoading && <h1 className="text-4xl">Loading....</h1>}
      {!isLoading && course && (
        <div className="flex flex-col items-center">
          <h1 className="text-center text-2xl">Course Id: {courseId}!!</h1>
          <h1 className="text-center text-2xl md:text-4xl underline underline-offset-8 mb-4">
            {course.name}
          </h1>
          {course.chapters.map((chapter) => {
            return <ChapterDisplay key={chapter.id} chapter={chapter} />;
          })}
        </div>
      )}
    </div>
  );
};

export default CoursePage;
