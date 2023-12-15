import React from 'react';

const SubjectList = ({ setSelectedSubject }) => {
  const subjects = ['aptitude', 'os', 'dbms', 'networking', 'oops'];

  return (
    <div className="subject-list">
      {subjects.map((subject) => (
        <button key={subject} onClick={() => setSelectedSubject(subject)}>
          {subject}
        </button>
      ))}
    </div>
  );
}

export default SubjectList;
