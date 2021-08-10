import React from 'react';

import "./controlpanel.css";

const ControlPanel = ({selected,size,addEvent,resetEvent,goalEvent,handleAlgo,handleGoal}) => (
  <div className="controls-container">
    <div className="selected-node">
    <h3>Selected Node</h3>
      <svg>
        <circle cx="0" cy="0" r="15" stroke="#555555" fill="#555555"/>
        <text x="0" y="0" textAnchor="middle" stoke="#555555" fill="#FFFFFF"> {selected?.value} </text>
        </svg>
    </div>
    <div className="option-container">
      <button className="button add" onClick={addEvent}>+</button>
      <button className="button" onClick={resetEvent}>Reset</button>
      <h3>Goal node</h3>
      <select name="goalNode" onChange={handleGoal}>
        {[...Array(size+1).keys()].map((options,index)=>{
          return<option key={index} value={options}>{options}</option>
        })}
      </select>
      <select name="algorithms" onChange={handleAlgo}>
        <option value="0">Depth-First</option>
        <option value="1">Breadth-First</option>
      </select>
      <button className="button" onClick={goalEvent}>Find Goal!</button>
    </div>
  </div>
);

export default ControlPanel;
