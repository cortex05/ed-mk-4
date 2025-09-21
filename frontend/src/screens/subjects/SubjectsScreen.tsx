import React from "react";
import styles from "./SubjectScreen.module.css";
import { subjectsWithData } from "../../assets/mockData/mockSubjects";

const SubjectsPage = () => {
  return (
    <div className="p-8">
      <h1 className="text-4xl text-center mb-8">
        Click a subject to see what kind of courses are available
      </h1>
      <div className="flex flex-wrap justify-center">
        {subjectsWithData.map((subject) => {
          return (
            <div
              className={`${styles.link}`}
              onClick={() => console.log("clicked")}
            >
              <h4 className="text-xl">{subject.nameDisplay}</h4>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SubjectsPage;
