// LandingPage.js
import React from 'react';
import './LandingPage.css';
import PlacementGuidanceImage from '../images/placementguidance.jpg'; // Replace with actual image paths
import LearningAnalyticsImage from '../images/performanceanalytics.png';
import OneToOneMentoringImage from '../images/mentoring.jpg';
import OpenCommunityImage from '../images/opencommunity.jpg';
import PredictLevelImage from '../images/predict.png';
import PlacementNotesImage from '../images/notesandtests.jpg';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header>
        <h1>Welcome to Study Mate</h1>
        <p>Your Ultimate Platform for Academic Success</p>
        <p>
          Study Mate provides a comprehensive set of features to enhance your learning experience
          and prepare you for success in academic and professional endeavors.
        </p>
      </header>
      <section className="feature">
        <div className="feature-info">
          <h2>Placement Guidance</h2>
          <p>
            Get expert advice and guidance for your placements. Our experienced mentors will help
            you navigate the complex world of job placements.
          </p>
        </div>
        <img className="img" src={PlacementGuidanceImage} alt="Placement Guidance" />
      </section>
      <section className="feature">
        <div className="feature-info">
          <h2>Learning Analytics</h2>
          <p>
            Track your learning progress with advanced analytics. Understand your strengths and
            areas for improvement to optimize your study sessions.
          </p>
        </div>
        <img className="img" src={LearningAnalyticsImage} alt="Learning Analytics" />
      </section>
      <section className="feature">
        <div className="feature-info">
          <h2>One-to-One Mentoring</h2>
          <p>
            Personalized mentoring sessions with industry experts. Receive individualized guidance
            to excel in your studies and career.
          </p>
        </div>
        <img className="img" src={OneToOneMentoringImage} alt="One-to-One Mentoring" />
      </section>
      <section className="feature">
        <div className="feature-info">
          <h2>Open Community</h2>
          <p>
            Join our vibrant community to solve doubts and share knowledge. Connect with fellow
            students and professionals to enhance your learning experience.
          </p>
        </div>
        <img className="img" src={OpenCommunityImage} alt="Open Community" />
      </section>
      <section className="feature">
        <div className="feature-info">
          <h2>Predict Your Level of Preparation</h2>
          <p>
            Utilize our prediction tool to assess your readiness for placements. Get insights into
            your current preparation level and identify areas for improvement.
          </p>
        </div>
        <img className="img" src={PredictLevelImage} alt="Predict Your Level of Preparation" />
      </section>
      <section className="feature">
        <div className="feature-info">
          <h2>Placement Notes and Tests</h2>
          <p>
            Access comprehensive notes and practice tests for important subjects like OOPs, DBMS,
            OS, Aptitude, Networking, and more. Sharpen your skills and boost your confidence for
            upcoming placements.
          </p>
        </div>
        <img className="img" src={PlacementNotesImage} alt="Placement Notes and Tests" />
      </section>
    </div>
  );
};

export default LandingPage;
