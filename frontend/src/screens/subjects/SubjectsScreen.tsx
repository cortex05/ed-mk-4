import styles from "./SubjectScreen.module.css";
import { useContext } from "react";
import DataContext from "../../context/DataContext";

const SubjectsPage = () => {
  const { activeSubjects} = useContext(DataContext);
  return (
    <div className="p-8">
      <h1 className="text-4xl text-center mb-8">
        Click a subject to see what kind of courses are available
      </h1>
      <div className="flex flex-wrap justify-center">
        {!activeSubjects && <h2>No subjects available</h2>}
        {activeSubjects?.map((subject) => {
          return (
            <div
              className={`${styles.link}`}
              onClick={() => console.log("clicked")}
            >
              <h4 className="text-xl">{subject.displayName}</h4>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SubjectsPage;
