import React from 'react';

import "./controlpanel.css";

const ControlPanel = ({selected}) => (
  <div className="controls-container">
      <h1> {selected?.value}</h1>
  </div>
);

export default ControlPanel;
