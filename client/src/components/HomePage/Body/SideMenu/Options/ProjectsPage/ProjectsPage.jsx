import React, { useState, useEffect, useContext } from "react";
import styles from "./ProjectsPage.module.css";
import ProjectsTable from "./ProjectsTable/ProjectsTable";
import CohortContext from "../../../../../Context/CohortContext";

const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);
  const { cohort } = useContext(CohortContext);
  const [showModal, setShowModal] = useState(false);
  const [students, setStudents] = useState([]);
  const [currentProj, setCurrentProj] = useState([]);
  const [newProject, setNewProject] = useState({
    student_id: "",
    project_id: "",
    grade: "",
  });

  useEffect(() => {
    (async () => {
      const response = await fetch(
        `https://blueoceanapi-ucyq.onrender.com/student_project_scores/${cohort}`
      );
      const proj = await response.json();
      setProjects(proj);
    })();
    return () => {};
  }, [projects, cohort]);

  const handleAddProject = () => {
    setShowModal(!showModal);
  };

  useEffect(() => {
    const fetchStudents = async () => {
      const response = await fetch(`https://blueoceanapi-ucyq.onrender.com/students/${cohort}`);
      const studentsData = await response.json();
      setStudents(studentsData);
    };

    fetchStudents();

    const fetchProj = async () => {
      const response = await fetch(`https://blueoceanapi-ucyq.onrender.com/project`);
      const projData = await response.json();
      setCurrentProj(projData);
    };

    fetchProj();
  }, [projects, cohort]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewProject((prevProject) => ({
      ...prevProject,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { student_id, project_id, grade } = newProject;

    const response = await fetch(
      "https://blueoceanapi-ucyq.onrender.com/student_project_scores",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          student_id,
          project_id,
          grade,
        }),
      }
    );
    if (response.ok) {
      const responseData = await response.json();
      console.log(responseData)
      setProjects((prevProjects) => [...prevProjects, responseData]);
      setShowModal(false);
      setNewProject({
        student_id: "",
        project_id: "",
        grade: "",
      });
      window.alert("Project Successfully Added");
    } else {
      console.error("Failed to add project.");
    }
  };

  const handleUpdateProject = (index, updatedProject) => {
    setProjects((prevProject) => {
      const updatedProject = [...prevProject];
      updatedProject[index] = updatedProject;
      return updatedProject;
    });
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className={styles["student-container"]}>
      <div className={styles["student-title"]}>
        <span className={styles["title"]}>Projects Dashboard</span>
      </div>
      <div className={styles["table-container"]}>
        <div className={styles["student-container-bar"]}>
          <div className={styles["add-button-container"]}>
            <button className={styles["add-btn"]} onClick={handleAddProject}>
              Add Project
            </button>
            {showModal && (
              <>
                <div className={styles["page-overlay"]} />
                <div className={styles["page-modal"]}>
                  <span className={styles.close} onClick={closeModal}>
                    &times;
                  </span>
                  <div className={styles["page-modal-content"]}>
                    <form onSubmit={handleSubmit}>
                      <h3>Add a Project</h3>
                      <label>
                        Student:
                        <select
                          name="student_id"
                          value={newProject.student_id || ""}
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
                      <label>
                        Project:
                        <select
                          name="project_id"
                          value={newProject.project_id || ""}
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
                      <label>
                        Grade:
                        <input
                          type="text"
                          name="grade"
                          value={newProject.grade || ""}
                          onChange={handleInputChange}
                        />
                      </label>
                      <button
                        className={styles["page-submit-button"]}
                        type="submit"
                      >
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
        <div className={styles["table-cont"]}>
          <ProjectsTable
            projects={projects}
            students={students}
            currentProj={currentProj}
            updateProject={handleUpdateProject}
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
