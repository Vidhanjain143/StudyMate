import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import './Dashboard.css'; // Create a CSS file for your dashboard styles

const Dashboard = () => {
  const subjectsData = {
    Oops: {
      labels: [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
      ],
      scores: [80, 60, 75, 90, 70, 85, 78, 92, 88, 75, 70, 83],
    },
    OS: {
      labels: [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
      ],
      scores: [90, 70, 80, 85, 75, 88, 72, 90, 87, 78, 75, 89],
    },
    Networking: {
      labels: [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
      ],
      scores: [70, 80, 75, 70, 85, 68, 75, 82, 79, 73, 70, 77],
    },
    DBMS: {
      labels: [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
      ],
      scores: [85, 75, 90, 80, 70, 89, 82, 94, 90, 81, 78, 92],
    },
    Aptitude: {
      labels: [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
      ],
      scores: [75, 80, 70, 85, 90, 73, 79, 88, 85, 77, 75, 80],
    },
  };

  const [selectedSubject, setSelectedSubject] = useState('Oops');

  const subjectChangeHandler = (event) => {
    setSelectedSubject(event.target.value);
  };

  const chartData = {
    options: {
      xaxis: {
        categories: subjectsData[selectedSubject].labels,
      },
    },
    series: [
      {
        name: 'Percentage of Marks Scored',
        data: subjectsData[selectedSubject].scores,
      },
    ],
  };

  return (
    <div className="dashboard">
      <h1>Student Performance Dashboard</h1>
      <label htmlFor="subjectSelect">Select a Subject:</label>
      <select id="subjectSelect" onChange={subjectChangeHandler} value={selectedSubject}>
        {Object.keys(subjectsData).map((subject) => (
          <option key={subject} value={subject}>
            {subject}
          </option>
        ))}
      </select>

      <div className="chart-container">
        <ReactApexChart options={chartData.options} series={chartData.series} type="line" height={350} />
      </div>

      <div className="student-info">
        <div className="info-card">
          <div className="info-title">Total Tests</div>
          <div className="info-value">25</div>
        </div>
        <div className="info-card">
          <div className="info-title">Questions Attempted</div>
          <div className="info-value">567</div>
        </div>
        <div className="info-card">
          <div className="info-title">Correct Answers</div>
          <div className="info-value">432</div>
        </div>
        <div className="info-card">
          <div className="info-title">Incorrect Answers</div>
          <div className="info-value">135</div>
        </div>
        <div className="info-card">
          <div className="info-title">Highest Score</div>
          <div className="info-value">95%</div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
