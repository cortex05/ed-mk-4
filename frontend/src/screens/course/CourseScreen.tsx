import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { ICourse } from "../../types/types";

import { badCourse } from "../../assets/mockData/course.ts";
import ChapterDisplay from "./displays/chapter/ChapterDisplay.tsx";
import axios from "axios"; 

const baseUrl = import.meta.env.VITE_API_BASE_URL;

const CoursePage = () => {
  const { courseId } = useParams<string>();
  const [course, setCourse] = useState<ICourse>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);

    try {
      axios.get<ICourse>(`${baseUrl}/api/courses/${courseId}`)
        .then((data: { data: ICourse }) => {
          if(data.data){
            setCourse(data.data)
          } else {
            setCourse(badCourse)
          }
        })
        .catch((error: unknown) => {
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
          <h1 className="text-center text-2xl md:text-5xl underline underline-offset-8 mb-4 md:mb-8">
            {course.name}
          </h1>
          {course.chapters.map((chapter) => {
            return <ChapterDisplay key={`${chapter.courseId}-${chapter.order}`} chapter={chapter} />;
          })}
        </div>
      )}
    </div>
  );
};

export default CoursePage;
