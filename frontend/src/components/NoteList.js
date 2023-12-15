import React from 'react';
import NoteCard from './NoteCard';
import NoteDisplay from './NoteDisplay'; // New component
import aptitude1 from '../images/aptitude1.png';
import aptitude2 from '../images/aptitude2.webp';
import aptitude3 from '../images/aptitude3.png';
import dbms1 from '../images/dbms1.png';
import dbms2 from '../images/dbms2.jpeg';
import dbms3 from '../images/dbms3.png';
import networking1 from '../images/networking1.jpg';
import networking2 from '../images/networking2.jpg';
import networking3 from '../images/networking3.png';
import oops1 from '../images/oops1.webp';
import oops2 from '../images/oops2.webp';
import oops3 from '../images/oops3.jpg';
import os1 from '../images/os1.png';
import os2 from '../images/os2.jpeg';
import os3 from '../images/os3.jpg';

export const beginnerNotes = {
  aptitude: [
    {
      title: 'Beginner Level Aptitude',
      content: 'Beginner content for Aptitude 1.',
      image: aptitude1,
    },
    // Add more notes
  ],
  os: [
    {
      title: 'Beginner Level OS',
      content: 'Beginner content for Operating System.',
      image: os1,
    },
    // Add more notes
  ],
  dbms: [
    {
      title: 'Beginner Level DBMS',
      content: 'Beginner content for DBMS.',
      image: dbms1,
    },
    // Add more notes
  ],
  networking: [
    {
      title: 'Beginner Level Networking',
      content: 'Beginner content for Networking',
      image: networking1,
    },
    // Add more notes
  ],
  oops: [
    {
      title: 'Beginner Level OOPS',
      content: 'Beginner content for OOPS',
      image: oops3,
    },
    // Add more notes
  ],
}
  export const moderateNotes = {
    aptitude: [
      {
        title: 'Moderate Aptitude 2',
        content: 'Moderate content for Aptitude 2.',
        image: aptitude2,
      },
      // Add more notes
    ],
    os: [
      {
        title: 'OS Moderate',
        content: 'Moderate content for Aptitude 2.',
        image: os2,
      },
      // Add more notes
    ],
    dbms: [
      {
        title: 'DBMS Moderate',
        content: 'Moderate content for Aptitude 2.',
        image: dbms2,
      },
      // Add more notes
    ],
    networking: [
      {
        title: 'Networking Moderate',
        content: 'Moderate content for Aptitude 2.',
        image: networking2,
      },
      // Add more notes
    ],
    oops: [
      {
        title: 'OOPS Moderate',
        content: 'Moderate content for Aptitude 2.',
        image: oops2,
      },
      // Add more notes
    ],
  };
  
  export const advancedNotes = {
    aptitude: [
      {
        title: 'Advanced Aptitude 3',
        content: 'Advanced content for Aptitude 3.',
        image: aptitude3,
      },
      // Add more notes
    ],
    os: [
      {
        title: 'OS Advanced',
        content: 'Advanced content for Aptitude 3.',
        image: os3,
      },
      // Add more notes
    ],
    dbms: [
      {
        title: 'Advanced DBMS',
        content: 'Advanced content for DBMS',
        image: dbms3,
      },
      // Add more notes
    ],
    networking: [
      {
        title: 'Advanced Networking',
        content: 'Advanced content for Networking',
        image: networking3,
      },
      // Add more notes
    ],
    oops: [
      {
        title: 'Advanced OOPS',
        content: 'Advanced content for Aptitude 3.',
        image: oops1,
      },
      // Add more notes
    ],


};

// Add moderateNotes and advancedNotes in the same way as beginnerNotes

const NoteList = ({ subject, userCategory }) => {
  const notesByCategory = {
    beginner: beginnerNotes[subject],
    moderate: moderateNotes[subject],
    advanced: advancedNotes[subject],
  };

  const isUserCategoryBeginner = userCategory === 'beginner';

  return (
    <div className="note-list">
      <h2>{subject} Notes</h2>
      <div className="note-cards">
        {['beginner', 'moderate', 'advanced'].map((category) => (
          notesByCategory[category].map((note, index) => (
            <NoteCard
              key={index}
              note={note}
              isDisabled={!isUserCategoryBeginner && category !== userCategory}
            />
          ))
        ))}
      </div>
      <NoteDisplay notes={notesByCategory} />
    </div>
  );
}

export default NoteList;
