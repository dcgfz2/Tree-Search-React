import React from 'react';

import "./instructions.css";

const Instructions = () => (
    <div className="instructions-container">

        <h3>How to use</h3>
       <p>Use <button className="button add">+</button> to add new nodes to the selected node </p>
        
        <p>The currently selected node is shown on the panel above (root node 0 by default)</p>

        <p>Click on a node to select it</p>

        <p>The <button className="button">Reset</button>  button resets the tree back to just the root node "0"</p>

        <p>To traverse, select the id of the goal node and the desired algorithm from under the "Goal Node" section then use <button className="button" >Find Goal!</button> to start the the traversal animation!</p>
    </div>
)

export default Instructions;