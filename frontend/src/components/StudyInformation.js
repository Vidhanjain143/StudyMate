import React, { useState } from 'react';
import { Link, useNavigate,useParams } from 'react-router-dom';
import axios from 'axios'
import './StudyInformation.css';

const StudyInformation = () => {
  const [inputValues, setInputValues] = useState({
    input1: 0,
    input2: 0,
    input3: 0,
    input4: 0,
    input5: 0,
    result: '', // State variable for the result
  }); // Initialize UNS as null
  const handleInputsChange = (e) => {
    const { name, value } = e.target;
    setInputValues({
      ...inputValues,
      [name]: value,
    });
  };
  const [isLoading, setIsLoading] = useState(false);

  // Define a function to scale values from 1-100 to 0-1
  const scaleValue = (value) => (value - 1) / 99;
  const { subject } = useParams();

  // Define a function to handle input changes
  const handleInputChange = (e, setter) => {
    const inputValue = parseInt(e.target.value, 10);
    if (!isNaN(inputValue) && inputValue >= 1 && inputValue <= 100) {
      setter(scaleValue(inputValue));
    }
  };
  async function calculateResult()  {
    const { input1, input2, input3, input4, input5 } = inputValues;
    // Calculate your result based on the input values here.
    const response = await axios.post('http://localhost:8000/calculate', 
      {
          STG: input1,
          SCG: input2,
          STR: input3,
          LPR: input4,
          PEG: input5
      }
      ,{
      headers: {
        'Content-Type': 'application/json',
      }}
    ).then((response)=>response.data )
    .catch((error) =>{ console.log(error) } )
    console.log(response)
    const result1 = response[0];
    setInputValues({
      ...inputValues,
      result: result1,
    });
  };
  // Function to submit the values to the ML model (you can replace this with your actual API call)
  // const submitValues = () => {
  //   setIsLoading(true);
  //   // Simulating an API call delay (replace this with your actual API call)
  //   setTimeout(() => {
  //     setIsLoading(false);
  //     // You can send the values stg, scg, str, lpr, peg to your ML model here
  //     // Replace the following with your actual ML prediction logic
  //     const prediction = Math.random(); // Replace with your actual prediction
  //     setUNS(prediction);
  //   }, 2000); // Simulate a 2-second API call delay
  // };

  const navigate = useNavigate();

  const getCategory = (uns) => {
    if (uns <= 0.33) {
      return "beginner";
    } else if (uns <= 0.66) {
      return "moderate";
    } else {
      return "advanced";
    }
  };

  // const handlePracticeClick = () => {
  //   if (uns !== null) {
  //     const userCategory = getCategory(uns);
  //     navigate(`/notesandtests/${subject}?category=${userCategory}`);
  //   }
  // };

  return (
    <>
    <div id="study-information" className='study-information'>
    <br/>
    <h1 className='study-info-head'><b>Study Information for {subject} Subject</b></h1>
    <div className="study-info-container">
      
      <div className="input-container">
        <label>STG (The degree of study time for goal object materials)</label>
        <input type="number"  name="input1" value={inputValues.input1} step='0.1' onChange={handleInputsChange} />
        <p className="scaled-value">Scaled Value: {inputValues.input1}</p>
      </div>

      <div className="input-container">
        <label>SCG (The degree of repetition number of user for goal object materials)</label>
        <input
          type="number" name="input2" step='0.1'
          value={inputValues.input2} onChange={handleInputsChange} 
        />
        <p className="scaled-value">Scaled Value: {inputValues.input2}</p>
      </div>

      <div className="input-container">
        <label>STR (The degree of study time of user for related objects with goal object)</label>
        <input
          type="number" name="input3" step='0.1'
          value={inputValues.input3} onChange={handleInputsChange} 
        />
        <p className="scaled-value">Scaled Value: {inputValues.input3}</p>
      </div>

      <div className="input-container">
        <label>LPR (The exam performance of user for related objects with goal object)</label>
        <input
          type="number" name="input4" step='0.1'
          value={inputValues.input4} onChange={handleInputsChange} 
        />
        <p className="scaled-value">Scaled Value: {inputValues.input4}</p>
      </div>

      <div className="input-container">
        <label>PEG (The exam performance of user for goal objects)</label>
        <input
          type="number" name="input5" step='0.1'
          value={inputValues.input5} onChange={handleInputsChange} 
        />
        <p className="scaled-value">Scaled Value: {inputValues.input5}</p>
      </div>

      <button className="submit-button" onClick={calculateResult}>Submit</button>

      {isLoading && <div className="loading-spinner"></div>}

        <div className="result-message">
          UNS Category: {inputValues.result} 
          {/* <button className="practice-button" onClick={handlePracticeClick}>Practice</button> */}
        </div>
    </div>
    </div>
    </>
  );
};

export default StudyInformation;
