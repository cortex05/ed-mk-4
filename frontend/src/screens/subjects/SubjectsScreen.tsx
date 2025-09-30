import styles from "./SubjectScreen.module.css";
import { useContext, useState } from "react";
import DataContext from "../../context/DataContext";
import type { ICourseLink, ISubjectLink } from "../../types/types";
import SubjectLink from "./subjectLink/SubjectLink";
import Modal from "../../components/Modal/Modal";
import CourseLink from "../../components/utilities/CourseLink/CourseLink";

const SubjectsPage = () => {
  const { activeSubjects } = useContext(DataContext);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [activePreview, setActivePreview] = useState<ISubjectLink>()

  const handlePreview = (linkData: ISubjectLink) => {
      setActivePreview(linkData)
      setIsModalOpen(true)
    }

  return (
    <div className="p-8">
      <h1 className="text-4xl text-center mb-8">
        Click a subject to see what kind of courses are available
      </h1>
      <div className="flex flex-wrap justify-center">
        {!activeSubjects && <h2>No subjects available</h2>}
        {activeSubjects?.map((subject) => {
          return <SubjectLink key={subject.id} subject={subject} openModal={handlePreview}/>
        })}
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2 className='text-3xl text-center'>{activePreview?.displayName}</h2>
        <h3 className='text-l mb-4'>{activePreview?.description}</h3>
        <div className={`mt-2 ${styles.break}`}>
          {activePreview?.courseLinks.map((courseLink: ICourseLink) => {
            return <CourseLink key={courseLink.id} link={courseLink}/>
          })}
        </div>
      </Modal>
    </div>
  );
};

export default SubjectsPage;
