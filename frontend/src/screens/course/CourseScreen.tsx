import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { ICourse } from "../../types/types";

import { badCourse } from "../../assets/mockData/course.ts";
import ChapterDisplay from "./displays/chapter/ChapterDisplay.tsx";
import { api } from "../../utility/api.ts";

const CoursePage = () => {
  const { courseId } = useParams<string>();
  const [course, setCourse] = useState<ICourse>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    let isMounted = true

    const fetchCourse = async () => {
      setIsLoading(true)

      try {
        const { data } = await api.get<ICourse>(
          `/api/courses/${courseId}`,
        )

        if (isMounted) {
          setCourse(data ?? badCourse)
        }
      } catch (error) {
        console.error("Error fetching course data:", error)

        if (isMounted) {
          setCourse(badCourse)
        }
      } finally {
        if (isMounted) {
          setIsLoading(false)
        }
      }
    }

    fetchCourse()

    return () => {
      isMounted = false
    }
  }, [])

  return (
    <div className="font-serif p-8">
      {isLoading && <h1 className="text-4xl">Loading....</h1>}
      {!isLoading && course && (
        <div className="flex flex-col items-center">
          <h1 className="text-center text-2xl md:text-5xl underline underline-offset-8 mb-4 md:mb-8">
            {course.name}
          </h1>
          {course.chapters.map((chapter) => {
            return (
              <ChapterDisplay
                key={`${chapter.courseId}-${chapter.order}`}
                chapter={chapter}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default CoursePage;
