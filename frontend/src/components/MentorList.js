import React, { useState } from 'react';
import './MentorList.css'; // Create a CSS file for mentor list styles

const mentorsData = [
  {
    id: 1,
    name: 'John Doe',
    domain: 'Web Development',
    image: 'web-dev.jpg', // Put image file in public folder
    contact: '123-456-7890',
    email: 'john.doe@example.com',
    college: 'Dayananda Sagar College of Engineering',
  },
  {
    id: 2,
    name: 'Alice Smith',
    domain: 'Machine Learning',
    image: 'ml.jpg',
    contact: '987-654-3210',
    email: 'alice.smith@example.com',
    college: 'Dayananda Sagar College of Engineering',
  },
  {
    id: 3,
    name: 'Bob Johnson',
    domain: 'Blockchain',
    image: 'blockchain.jpg',
    contact: '555-555-5555',
    email: 'bob.johnson@example.com',
    college: 'Dayananda Sagar College of Engineering',
  },
  {
    id: 3,
    name: 'Bob Johnson',
    domain: 'Blockchain',
    image: 'blockchain.jpg',
    contact: '555-555-5555',
    email: 'bob.johnson@example.com',
    college: 'Dayananda Sagar College of Engineering',
  },
  {
    id: 4,
    name: 'Bob Johnson',
    domain: 'Blockchain',
    image: 'blockchain.jpg',
    contact: '555-555-5555',
    email: 'bob.johnson@example.com',
    college: 'Dayananda Sagar College of Engineering',
  },
  {
    id: 5,
    name: 'Bob Johnson',
    domain: 'Blockchain',
    image: 'blockchain.jpg',
    contact: '555-555-5555',
    email: 'bob.johnson@example.com',
    college: 'Dayananda Sagar College of Engineering',
  },
  {
    id: 6,
    name: 'Bob Johnson',
    domain: 'Blockchain',
    image: 'blockchain.jpg',
    contact: '555-555-5555',
    email: 'bob.johnson@example.com',
    college: 'Dayananda Sagar College of Engineering',
  },
  {
    id: 7,
    name: 'Bob Johnson',
    domain: 'Blockchain',
    image: 'blockchain.jpg',
    contact: '555-555-5555',
    email: 'bob.johnson@example.com',
    college: 'Dayananda Sagar College of Engineering',
  },
  // Add more mentors with different domains
];

const MentorList = () => {
  const [selectedDomain, setSelectedDomain] = useState('All');

  const mentors = selectedDomain === 'All'
    ? mentorsData
    : mentorsData.filter(mentor => mentor.domain === selectedDomain);

  return (
    <div className="mentor-list">
      <div className="filter">
        <label>Filter by Domain:</label>
        <select onChange={(e) => setSelectedDomain(e.target.value)}>
          <option value="All">All</option>
          <option value="Web Development">Web Development</option>
          <option value="Machine Learning">Machine Learning</option>
          <option value="Blockchain">Blockchain</option>
          {/* Add more domain options */}
        </select>
      </div>
      <div className="mentors">
        {mentors.map(mentor => (
          <div key={mentor.id} className="mentor-card">
            <img src={mentor.image} alt={mentor.name} />
            <div className="mentor-info">
              <h3>{mentor.name}</h3>
              <p>Domain: {mentor.domain}</p>
              <p>Contact: {mentor.contact}</p>
              <p>Email: {mentor.email}</p>
              <p>College: {mentor.college}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MentorList;
