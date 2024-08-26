import React, { useState } from 'react'
import './App.css'

export const App = () => {
  const [height, setHeight] = useState("10");
  const [weight, setWeight] = useState("45");
  const [bmi, setBmi] = useState(null);
  const [bmistatus, setBmistatus] = useState("");
  const [error, setError] = useState("");
  const CalculateBmi = () => {
    const isValidHeight = /^\d+$/.test(height);
    const isValidWeight = /^\d+$/.test(weight);
    if (isValidHeight && isValidWeight) {
      setError("")
      const heightInmeter = height / 100;
      const bmiValue = weight / (heightInmeter * heightInmeter);
      setBmi(bmiValue.toFixed(2));
      if (bmiValue < 18.5) {
        setBmistatus("Under weight");
      } else if ((bmiValue >= 18.5) && (bmiValue < 24.9)) {
        setBmistatus("Normal weight");
      } else if ((bmiValue >= 25) && (bmiValue < 29.9)) {
        setBmistatus("Over Weight");
      } else {
        setBmistatus("Obese");
      }
    } else {
      setError("Please enter the valid height and width");
      setBmi(null);
      setBmistatus("");
    }
  }
  const ClearAll = () => {
    setHeight("");
    setWeight("");
    setBmi(null);
    setBmistatus("");
  }
  return (
    <>
      <div className='main'>
        <div className="container">
          <div className='leftright'>
            <div className="left">
              <img src="/BMI-calculator-logo.svg" alt="image" />
            </div>
            <div className="right">
              <div className='text1'>BMI Calculator</div>
              {error && <p className='error'>{error}</p>}
              <div className="inputdata">
                <label htmlFor="height">Height : </label>
                <input type="text" name="" id="height" value={height} onChange={(e) => { setHeight(e.target.value); }} />
                <label htmlFor="weight">Weight : </label>
                <input type="text" name="" id="weight" value={weight} onChange={(e) => { setWeight(e.target.value); }} />
              </div>
              <div className='button-con'>
                <button onClick={CalculateBmi} className='callbutton'>Calculator</button>
                <button onClick={ClearAll} className='callbutton'>Clear</button>
              </div>
              {bmi !== null && (
                <div className="result">
                  <div className="text2">Your BMI Value : {bmi}</div>
                  <div className="status">Status : {bmistatus}</div>
                </div>
              )} 
            </div>
          </div>
          <div className='design'>Designed  by <span>KATHIRESAN</span></div>
        </div>
      </div>
    </>
  )
}
