// App.js
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import NotesandTests from './components/NotesandTests'
import NotesDisplayPage from './components/NotesDisplayPage';
import HomePage from './components/HomePage';
import TestPage from './components/TestPage';
import Dashboard from './components/Dashboard';
import MentorList from './components/MentorList';
import Login from './components/Login';
import Signup from './components/Signup';
import Navbar from './components/Navbar';
import Chat from './components/Chat';
import StudyInformation from './components/StudyInformation';
import SubjectCards from './components/SubjectCards';
import io from "socket.io-client";
import JoinChat from './components/JoinChat';
const socket=io.connect("http://localhost:3001");
function App() {
  return (
    <Router>
      <div className="App">
  <Navbar/>
        <Routes>
        <Route path="/" element={<HomePage/>}/>
          <Route path="/notes" element={<><NotesandTests /></>} />
          <Route path="/login" element={<><Login /></>} />
          <Route path="/signup" element={<><Signup /></>} />
          <Route path="/community" element={<><JoinChat/></>} />
          <Route path="/dashboard" element={<><Dashboard/></>} />
          <Route path="/mentors" element={<MentorList/>} />
          <Route path="/test/:subject/:difficulty" element={<TestPage/>} />
          <Route path="/notes/:difficulty/:subject" element={<NotesDisplayPage />} />
          <Route path="/studentform/:subject" element={<StudyInformation/>} />
          <Route path="/allsubjects" element={<SubjectCards/>} />
          <Route path="/notesandtests/:subject/:userCategory" element={<NotesandTests />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;