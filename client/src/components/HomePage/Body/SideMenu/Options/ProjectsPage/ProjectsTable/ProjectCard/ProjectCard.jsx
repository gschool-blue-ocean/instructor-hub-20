import React, { useState } from "react";
import styles from "./ProjectCard.module.css";

const ProjectCard = ({ project, onClose, students, currentProj, updateProject, selectedRow }) => {
  const [formData, setFormData] = useState({
    grade: project.grade || "",
    student_id: project.student_id || "",
    project_id: project.project_id || "",
  });

  const [updatedProject, setUpdatedProject] = useState(project);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedFormData = Object.fromEntries(
        Object.entries(formData).filter(([key, value]) => value !== "")
      );

      updatedFormData.student_id = parseInt(updatedFormData.student_id);
      updatedFormData.project_id = parseInt(updatedFormData.project_id);

      const response = await fetch(
        `/api/student_project_scores/${project.id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedFormData),
        }
      );

      if (response.ok) {
        const updatedProjectData = {
          ...updatedProject,
          ...updatedFormData,
        };
        setUpdatedProject(updatedProjectData);
        console.log("Project updated successfully");
        updateProject(selectedRow, updatedProjectData);
        window.alert("Project Successfully Updated");
      } else {
        console.log("Error updating project");
      }
    } catch (error) {
      console.error(error);
    }
    closeCard();
  };

  const closeCard = () => {
    onClose();
  };

  return (
    <div className={styles["card-container"]}>
      <span className={styles.close} onClick={closeCard}>
        &times;
      </span>
      <div className={styles["card-container-bar"]}>
        <div className={styles["card-content"]}>
          <div className={styles["project-basic"]}>
            <div>Group Name: {project.group_name}</div>
            <div>Student Name: {project.stu_name}</div>
            <div>Project Name: {project.project_name}</div>
            <div>Grade: {project.grade}</div>
          </div>
          <div className={styles["project-other"]}>
            <div className={styles["completion-status"]}>
              Completion Status:{" "}
              <span
                className={project.grade ? styles.complete : styles.incomplete}
              >
                {project.grade ? "Complete" : "Incomplete"}
              </span>
            </div>
          </div>
        </div>
        <form className={styles["card-modal"]} onSubmit={handleSubmit}>
          <h3>Edit Project</h3>
          <div>
            <label>Grade:</label>
            <input
              type="text"
              name="grade"
              value={formData.grade}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>
              Student:
              <select
                name="student_id"
                value={formData.student_id || ""}
                onChange={handleInputChange}
              >
                <option value="">Select a student</option>
                {students.map((student) => (
                  <option key={student.id} value={student.id}>
                    {student.stu_name}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <div>
          <label>
              Project:
              <select
                name="project_id"
                value={formData.project_id || ""}
                onChange={handleInputChange}
              >
                <option value="">Select a project</option>
                {currentProj.map((curproj) => (
                  <option key={curproj.id} value={curproj.id}>
                    {curproj.project_name}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <div className={styles["button-container"]}>
            <button className={styles["update-button"]} type="submit">
              Update Project
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProjectCard;
