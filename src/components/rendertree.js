import React from 'react';

import "./rendertree.css";

const RenderTree = ({data,height,onClick}) => (
  <div className="tree-container">
    <svg >

      {//Render relational lines
        data.nodeLevelView(0, [],data.root).map((nodes,level,levelArray) =>
        nodes.map((node,offset) => {
          //Render from parent to child
          if(node.children.length > 0){
            return node.children.map((child) => {
              return( <RenderRelation parx={((1+offset)*(100/(nodes.length+1)))+'%'}
              pary={((1+level)*(100/height))+'%'}
              x={((levelArray[level+1].findIndex(x => x.value === child.value))+1)*(100/(levelArray[level+1].length+1))+'%'}
              y={((level+2)*(100/height))+'%'}/>)
            })
        }})
      )}

      {//Render nodes on a per level basis
        data.nodeLevelView(0, [],data.root).map((nodes,level) =>
          nodes.map((node,offset) => {
            return <RenderNode x={((1+offset)*(100/(nodes.length+1)))+'%'} y={((1+level)*(100/height))+'%'} node={node} e={onClick}/>
          })
        )
      }
    </svg>
  </div>
);

const RenderNode = ({x,y,node,e}) => (
  <g>
    <circle cx={x} cy={y} r="15" stroke="#555B6E" fill="#FAF9F9" onClick={function(){e(node)}}/>
    <text x={x} y={y} textAnchor="middle" stoke="555B6E" fill="#FFD6BA"> {node.value} </text>
  </g>
);

const RenderRelation = ({parx,pary,x,y}) => (
  <line x1={parx} y1={pary} x2={x} y2={y} stroke="#555B6E" />
);

export default RenderTree;
