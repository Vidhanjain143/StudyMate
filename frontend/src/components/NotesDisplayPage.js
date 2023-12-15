// NotesDisplayPage.js

import React from 'react';
import { useParams } from 'react-router-dom';
import DBMSBeginnerNotes from './DBMSBeginnerNotes';
import DBMSAdvanced from './DBMSAdvanced';
import OOPsBeginner from './OOPsBeginner';
import OSBeginnerNotes from './OSBeginnerNotes';
const NotesDisplayPage = () => {
  const { difficulty, subject } = useParams();

  const notesContent = getNotesContent(subject, difficulty);

  return (
    <div>
      <h1>{subject} - {difficulty} Notes</h1>
      <div className="notes-content">
        {notesContent}
      </div>
    </div>
  );
};

function getNotesContent(subject, difficulty) {
  // Implement logic to retrieve notes content based on subject and difficulty.
  // Return the appropriate content for the given subject and difficulty.
  // You can fetch data from your data source or use predefined content.
  // For example:
  if (subject === 'dbms' && difficulty === 'beginner') {
    return (
<DBMSBeginnerNotes/>
    )
  }
     else if (subject === 'os' && difficulty === 'beginner') {
    return <OSBeginnerNotes/>;
  }
  else if (subject === 'oop' && difficulty === 'beginner') {
    return <OOPsBeginner/>;
  }
  else if (subject === 'networking' && difficulty === 'beginner') {
    return <DBMSAdvanced/>;
  }
  else if (subject === 'aptitude' && difficulty === 'beginner') {
    return <DBMSAdvanced/>;
  }
  else if (subject === 'os' && difficulty === 'moderate') {
    return <OSBeginnerNotes/>;
  }

  else if (subject === 'oop' && difficulty === 'moderate') {
    return <OOPsBeginner/>;
  }

  else if (subject === 'dbms' && difficulty === 'moderate') {
    return <DBMSAdvanced/>
  }

  else if (subject === 'networking' && difficulty === 'moderate') {
    return <DBMSAdvanced/>;
  }

  else if (subject === 'aptitude' && difficulty === 'moderate') {
    return <DBMSAdvanced/>;
  }

  else if (subject === 'os' && difficulty === 'advanced') {
    return <OSBeginnerNotes/>;
  }

  else if (subject === 'oop' && difficulty === 'advanced') {
    return <OOPsBeginner/>;
  }

  else if (subject === 'networking' && difficulty === 'advanced') {
    return <OSBeginnerNotes/>;
  }

  else if (subject === 'dbms' && difficulty === 'advanced') {
    return <DBMSAdvanced/>
  }

  else if (subject === 'aptitude' && difficulty === 'advanced') {
    return <DBMSAdvanced/>;
  }

  // Add more conditions for other subjects and difficulties.
  // Return 'No notes available for this subject and difficulty.' as a default message.
  return 'No notes available for this subject and difficulty.';
}

export default NotesDisplayPage;
