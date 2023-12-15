import React from 'react';
import { useParams } from 'react-router-dom';

const NotesPage = () => {
  const { difficulty, subject } = useParams();

  const notes = getNotes(difficulty,subject);

  if (notes) {
    return (
      <div>
        <h1>{subject} - {difficulty} Notes</h1>
        <div className="notes-content">
          {notes}
        </div>
      </div>
    );
  } else {
    return <div>No notes available for this subject and difficulty.</div>;
  }
};

function getNotes(subject, difficulty) {
  // Implement your logic to retrieve notes based on subject and difficulty.
  // Return the notes or null if they don't exist.
  // Example logic:

  if (subject === 'dbms') {
    if (difficulty === 'beginner') {
      return 'DBMS Beginner notes content goes here.';
    } else if (difficulty === 'moderate') {
      return 'DBMS Moderate notes content goes here.';
    } else if (difficulty === 'advanced') {
      return 'DBMS Advanced notes content goes here.';
    }
  }
  // Add similar logic for other subjects.

  return null; // Return null if no notes are found.
}

export default NotesPage;
