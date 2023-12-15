import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './NoteCard.css';

const NoteCard = ({ note, isDisabled }) => {
  const [showNotes, setShowNotes] = useState(true);
  const navigate = useNavigate();

  const navigateToNotes = () => {
    navigate(`/notes/${getDifficulty(note.title)}/${getSubject(note.title)}`);
  };

  const getSubject = (title) => {
    if (title.toLowerCase().includes('dbms')) {
      return 'dbms';
    } else if (title.toLowerCase().includes('os')) {
      return 'os';
    } else if (title.toLowerCase().includes('networking')) {
      return 'networking';
    } else if (title.toLowerCase().includes('oop')) {
      return 'oop';
    } else if (title.toLowerCase().includes('aptitude')) {
      return 'aptitude';
    } else {
      return 'unknown';
    }
  };

  const getDifficulty = (title) => {
    if (title.toLowerCase().includes('beginner')) {
      return 'beginner';
    } else if (title.toLowerCase().includes('moderate')) {
      return 'moderate';
    } else if (title.toLowerCase().includes('advanced')) {
      return 'advanced';
    } else {
      return 'unknown';
    }
  };

  const loadNotes = () => {
    setShowNotes(true);
  };

  return (
    <div className={`note-card ${isDisabled ? 'disabled' : ''}`}>
      <div className="note-image-container">
        <img src={note.image} alt={note.title} className="note-image" />
      </div>
      <h3>{note.title}</h3>
      <p>{note.content}</p>
      <div className='d-flex'>
        <button className="read-notes-button" onClick={showNotes ? navigateToNotes : loadNotes}>
          {showNotes ? 'Notes' : 'Hide Notes'}
        </button>
        <Link to={`/test/${getSubject(note.title)}/${getDifficulty(note.title)}`}>
          <button className={`read-notes-button ${isDisabled ? 'disabled' : ''}`}>
            Take Test
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NoteCard;
