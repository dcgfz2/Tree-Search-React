import React from 'react';

import "./rendertree.css";

const RenderTree = ({data,height,onClick, traverse}) => (
  <div className="tree-container">
    <svg >

      {//Render relational lines
        data.nodeLevelView(0, [],data.root).map((nodes,level,levelArray) =>
        nodes.map((node,offset) => {
          //Render from parent to child
          if(node.children.length > 0){
            return node.children.map((child) => {
              return( <RenderRelation key={level+"/"+levelArray[level+1].findIndex(x => x.value === child.value)}
                 parx={((1+offset)*(100/(nodes.length+1)))+'%'}
              pary={((1+level)*(100/height))+'%'}
              x={((levelArray[level+1].findIndex(x => x.value === child.value))+1)*(100/(levelArray[level+1].length+1))+'%'}
              y={((level+2)*(100/height))+'%'}/>)
            })
        }
      else{return undefined}
        })
      )}

      {//Render nodes on a per level basis
        data.nodeLevelView(0, [],data.root).map((nodes,level) =>
          nodes.map((node,offset) => {
            if(traverse.includes(node.value)){
              return <RenderNode key={level+"/"+offset} x={((1+offset)*(100/(nodes.length+1)))+'%'} y={((1+level)*(100/height))+'%'} node={node} e={onClick} fillColor="#FFD6BA"/>
            }
            else{
              return <RenderNode key={level+"/"+offset} x={((1+offset)*(100/(nodes.length+1)))+'%'} y={((1+level)*(100/height))+'%'} node={node} e={onClick} fillColor="#FAF9F9"/>
            }
          })
        )
      }
    </svg>
  </div>
);

const RenderNode = ({x,y,node,e,fillColor}) => (
  <g>
    <circle id={node.value} cx={x} cy={y} r="15" stroke="#555B6E" fill={fillColor} onClick={function(){e(node)}}/>
    <text x={x} y={y} textAnchor="middle" stoke="555B6E" fill="#89B0AE"> {node.value} </text>
  </g>
);

const RenderRelation = ({parx,pary,x,y}) => (
  <line x1={parx} y1={pary} x2={x} y2={y} stroke="#555B6E" />
);

export default RenderTree;
