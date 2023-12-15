import React, { useState } from 'react';
import './SubjectCards.css';
import { Link } from 'react-router-dom';
import aptitude1 from '../images/aptitude1.png';
import dbms2 from '../images/dbms2.jpeg';
import networking2 from '../images/networking2.jpg';
import oops2 from '../images/oops2.webp';
import os3 from '../images/os3.jpg';
const subjects = [
  { name: 'DBMS', image: dbms2 },
  { name: 'Networking', image: networking2 },
  { name: 'Aptitude', image: aptitude1},
  { name: 'OOPs', image: oops2 },
  { name: 'OS', image: os3 },
];

const SubjectCards = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="subject-cards">
      {subjects.map((subject, index) => (
        <div
          key={index}
          className={`subject-card ${selectedCategory === subject.name ? 'selected' : ''}`}
        >
          <img src={subject.image} alt={subject.name} />
          <h3>{subject.name}</h3>
          <Link to={`/studentform/${subject.name}`} className="predict-button">
            Predict My Category
          </Link>
        </div>
      ))}
      
    </div>
  );
};

export default SubjectCards;
