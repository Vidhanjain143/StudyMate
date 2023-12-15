import React, { useEffect } from 'react';

const TakeTest = ({ subject, userCategory }) => {
  const isDisabled = userCategory !== subject;

  return (
    <div className="take-test">
      <h2>Take a Test</h2>
      {isDisabled ? (
        <p>You can take a test in your predicted category: {userCategory}</p>
      ) : (
        <button>Start Test for {subject}</button>
      )}
    </div>
  );
}

export default TakeTest;
