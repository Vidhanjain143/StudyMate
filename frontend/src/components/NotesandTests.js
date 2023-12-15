import React, { useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import SubjectList from './SubjectList';
import NoteList from './NoteList';
import TakeTest from './TakeTest';
import NotePage from './NotePage';

function NotesandTests() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const userCategory = searchParams.get('category');

  const [selectedSubject, setSelectedSubject] = useState(null);

  return (
    <div className="App">
      <div className="header">
        <h1>Notes and Tests</h1>
      </div>
      <div className="content-container">
        <div className="sidebar">
          <SubjectList setSelectedSubject={setSelectedSubject} />
        </div>
        <div className="main-content">
          <Routes>
            <Route path="/notes/:subject/:difficulty" element={<NotePage />} />
          </Routes>
          {selectedSubject && (
            <>
              <NoteList subject={selectedSubject} userCategory={userCategory} />
              <TakeTest subject={selectedSubject} userCategory={userCategory} />
            </>
          )}
        </div>
      </div>
      <div className="footer">
        <p>&copy; 2023 Notes and Tests</p>
      </div>
    </div>
  );
}

export default NotesandTests;
