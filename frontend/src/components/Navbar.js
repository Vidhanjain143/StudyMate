import React from 'react';
import { School } from '@mui/icons-material'; 
import './Navbar.css';
import { Link } from 'react-router-dom';
class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <div className="logo">
           <School fontSize="large"  style={{marginRight:'10px',marginLeft:'10px'}}/>
Study Mate
                  </div>
        <ul className="menu">
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/signup">Signup</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/notes">Notes</Link></li>
          <li><Link to="/allsubjects">Predictor</Link></li>
          <li><Link to="/mentors">Mentors</Link></li>
          <li><Link to="/community">Community</Link></li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
