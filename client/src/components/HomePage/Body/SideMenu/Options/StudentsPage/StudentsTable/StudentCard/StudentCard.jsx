import React, { useState, useEffect, useContext } from "react";
import styles from "./StudentCard.module.css";
import CohortContext from "../../../../../Context/CohortContext";


const StudentCard = ({ student, updateStudent, closeModal, selectedRow}) => {
  const { cohort } = useContext(CohortContext);
  const [formData, setFormData] = useState({
    stu_name: student.stu_name || "",
    email: student.email || "",
    github: student.github || "",
    graduation: student.graduation || "",
    cohort: cohort,
  });

  const [updatedStudent, setUpdatedStudent] = useState(student);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const updatedFormData = Object.fromEntries(
          Object.entries(formData).filter(([key, value]) => value !== "")
        );
    
        const response = await fetch(
          `/api/students/${student.id}`,
          {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedFormData),
          }
        );
    
        if (response.ok) {
          const updatedStudentData = {
            ...updatedStudent,
            ...updatedFormData,
          };
          setUpdatedStudent(updatedStudentData);
          console.log("Student updated successfully");
          updateStudent(selectedRow, updatedStudentData);
          window.alert("Student Successfully Updated");
        } else {
          console.log("Error updating assessment");
        }
      } catch (error) {
        console.error(error);
      }
      closeCard();
    };

  const handleDelete = async () => {
    try {
        setIsDeleting(true);
  
        const response = await fetch(
          `/api/students/${student.id}`,
          {
            method: "DELETE",
          }
        );
  
        if (response.ok) {
          console.log("Student deleted successfully");
          window.alert("Student Succesfully Deleted")
        } else {
          console.log("Error deleting student");
        }
      } catch (error) {
        console.error(error);
      } finally {
        setIsDeleting(false);
        closeCard();
      }
  };

  const closeCard = () => {
    closeModal();
  };

  return (
    <div className={styles["card-container"]}>
      <span className={styles.close} onClick={closeCard}>
        &times;
      </span>
      <div className={styles["card-container-bar"]}>
        <div className={styles["card-content"]}>
          <div className={styles["student-basic"]}>
            <div>Student Name: {student.stu_name}</div>
            <div>Email: {student.email}</div>
            <div>Github: {student.github}</div>
            {/* <div>Grad Date: {student.graduation}</div> */}
            <div>Cohort: {student.cohort_number}</div>
          </div>
        </div>
        <form className={styles["card-modal"]} onSubmit={handleSubmit}>
          <h3>Edit Student</h3>
          <div>
            <label>Student Name:</label>
            <input
              type="text"
              name="stu_name"
              value={formData.stu_name}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Email:</label>
             <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Github:</label>
            <input
              type="text"
              name="github"
              value={formData.github}
              onChange={handleInputChange}
            />
          </div>
          {/* <div>
            <label>Grad Date:</label>
            <input
              type="text"
              name="graduation"
              value={formData.graduation}
              onChange={handleInputChange}
            />
          </div> */}
          <div className={styles["button-cont"]}>
            <button className={styles["update-button"]} type="submit">
              Update Student
            </button>
            <button className={styles["delete-button"]} onClick={handleDelete}>
              Delete Student
            </button>
          </div>
        </form>
      </div>
    </div>
  );
    
};

export default StudentCard;
