import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  // Step 2: Create state variables to hold input values and the result.
  const [inputValues, setInputValues] = useState({
    input1: 0,
    input2: 0,
    input3: 0,
    input4: 0,
    input5: 0,
    result: '', // State variable for the result
  });

  // Step 3: Event handler to update input values in the state.
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValues({
      ...inputValues,
      [name]: value,
    });
  };

  // Step 4: Calculate and display the result based on input values.
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

  return (
    <>
      <input type="number" name="input1" value={inputValues.input1} onChange={handleInputChange}/><br />
      <input type="number" name="input2" value={inputValues.input2} onChange={handleInputChange}/><br />
      <input type="number" name="input3" value={inputValues.input3} onChange={handleInputChange}/><br />
      <input type="number" name="input4" value={inputValues.input4} onChange={handleInputChange}/><br />
      <input type="number" name="input5" value={inputValues.input5} onChange={handleInputChange}/><br />
      <button onClick={calculateResult}>Click</button>
      <div>Result: {inputValues.result}</div>
    </>
  );
}

export default App;