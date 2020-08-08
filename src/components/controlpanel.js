import React from 'react';

import "./controlpanel.css";

const ControlPanel = ({selected,addEvent,resetEvent,goalEvent,handleAlgo}) => (
  <div className="controls-container">
    <div className="selected-node">
    <h3>Selected Node</h3>
      <svg>
        <circle cx="0" cy="0" r="15" stroke="#555B6E" fill="#FAF9F9"/>
        <text x="0" y="0" textAnchor="middle" stoke="555B6E" fill="#FFD6BA"> {selected?.value} </text>
        </svg>
    </div>
    <div className="option-container">
      <button className="button add" onClick={addEvent}>+</button>
      <button className="button" onClick={resetEvent}>Reset</button>
      <p>Goal node:</p>
      <input type="text" defaultValue="0"/>
      <select name="algorithms" onChange={handleAlgo}>
        <option value="Depth-First">Depth-First</option>
        <option value="Breadth-First">Breadth-First</option>
      </select>
      <button className="button" onClick={goalEvent}>Find Goal!</button>
    </div>
  </div>
);

export default ControlPanel;
