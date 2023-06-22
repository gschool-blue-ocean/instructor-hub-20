import React, {
  useEffect,
  createRef,
  useState,
  useRef,
  useContext,
} from "react";
import styles from "./MainPage.module.css";
import Chart from "chart.js/auto";
import CohortContext from "../../../../../Context/CohortContext";

const MainPage = () => {
  const [assessments, setAssessments] = useState([]);
  const { cohort } = useContext(CohortContext);

  useEffect(() => {
    (async () => {
      const response = await fetch(
        `https://blueoceanapi-ucyq.onrender.com/students_assessment_scores/${cohort}`
      );
      const assess = await response.json();
      setAssessments(assess);
    })();
    return () => {};
  }, [cohort]);

  const chartRef = createRef();
  const chartInstanceRef = useRef(null); // Store chart instance reference

  const cohortData = {
    cohort: assessments.map((assess) => assess.cohort_number),
    averageGrade: assessments.map((assess) => assess.grade),
  };

  const createChart = () => {
    const myChartRef = chartRef.current.getContext("2d");

    if (chartInstanceRef.current) {
      // Destroy existing chart if it exists
      chartInstanceRef.current.destroy();
    }

    // Group students based on their grades
    const groupedData = assessments.reduce((acc, assess) => {
      const { grade } = assess;
      if (acc[grade]) {
        acc[grade] += 1;
      } else {
        acc[grade] = 1;
      }
      return acc;
    }, {});

    const grades = Object.keys(groupedData);
    const studentCounts = Object.values(groupedData);

    // Define an array of colors
    const colors = [
      "rgba(255, 71, 71, 1)",
      "rgba(108, 71, 255, 1)",
      "rgba(71, 178, 255, 1)",
      "rgba(75, 255, 71, 1)",
      "rgba(240, 255, 71, 1)",
      "rgba(255, 137, 71, 1)",
      "rgba(255, 117, 117, 1)",
      "rgba(255, 117, 208, 1)",
      "rgba(117, 156, 255, 1)",
      "rgba(117, 255, 247, 1)",
    ];

    chartInstanceRef.current = new Chart(myChartRef, {
      type: "doughnut",
      data: {
        labels: grades,
        datasets: [
          {
            data: studentCounts,
            backgroundColor: colors,
          },
        ],
      },
      options: {
        responsive: true,
      },
    });
  };

  useEffect(() => {
    createChart();
  }, [assessments]);

  return (
    <div className={styles["student-container"]}>
      <div className={styles["student-title"]}>
        <span className={styles["title"]}>Average Grades</span>
      </div>
      <div className={styles["table-container"]}>
        <div className={styles["table-cont"]}>
          <div className={styles["chart-container"]}>
            <canvas ref={chartRef}></canvas>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
