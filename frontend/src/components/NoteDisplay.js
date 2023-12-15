import React, { useState } from 'react';
import './NoteDisplay.css';
const NoteDisplay = ({ notes }) => {
  const [showNotes, setShowNotes] = useState(false);

  return (
    <div className="note-display">
      {/* <button onClick={() => setShowNotes(!showNotes)}>
        {showNotes ? 'Hide Notes' : 'Read Notes'}
      </button> */}
      {showNotes && (
        <div className="notes">
          {notes.map((note, index) => (
            <div key={index} className="note-card">
              <h3>{note.title}</h3>
              <p>{note.content}</p>
            </div>
          ))}
          <button className="take-test-button">Take Test</button>
        </div>
      )}
    </div>
  );
}

export default NoteDisplay;
