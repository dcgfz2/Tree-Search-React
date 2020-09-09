import React from 'react';
import SearchTree from './lib/searchtree';
import RenderTree from './components/rendertree';
import ControlPanel from './components/controlpanel';
import Instructions from './components/instructions';

import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);

    let startTree = new SearchTree(0);

    this.state = {
        tree: startTree,
        selected: startTree.root,
        algorithm: "0",
        goal: "0",
        traverse: []
    };
    this.treeSize = 0;
  }

  reset = () => {
    let startTree = new SearchTree(0);
    this.setState({tree: startTree,
    selected: startTree.root,
    goal: "0"});
    this.treeSize = 0;
  }

  selectNode = (node) => {
    this.setState({selected: node});
  }

  insertNode = () => {
    this.treeSize++;
    this.state.tree.insert(this.state.selected,this.treeSize);
    //This function changes data from deep withn the tree so an update must be forced
    this.forceUpdate();
  }

  findGoal = () => {
    let path = [];
    switch(this.state.algorithm){
      case "0": //Depth-First
      path = this.state.tree.traverseDepth(this.state.goal);
        break;
      case "1": //Breadth-First
      path = this.state.tree.traverseBreadth(this.state.goal);
        break;
      default:
    }

    //Set up animations on delay

    path.forEach((value,index) => {
      setTimeout(() => {
        this.setState({traverse: path.slice(0,index+1)})
      },1500*index);
    });

    setTimeout(() => {
      this.setState({traverse: []})
    },1500*path.length+2);

  }


  handleAlgo = (event) => {
    this.setState({algorithm: event.target.value});
  }

  handleGoal = (event) => {
    this.setState({goal: event.target.value});
  }

  render(){
    return (
      <div className="main-container">
         <RenderTree data={this.state.tree} height={this.state.tree.maxDepth(this.state.tree.root)} onClick={this.selectNode} traverse={this.state.traverse}/>
         <ControlPanel selected={this.state.selected} size ={this.treeSize} addEvent={this.insertNode} resetEvent={this.reset} goalEvent={this.findGoal} handleAlgo={this.handleAlgo} handleGoal={this.handleGoal}/>
         <Instructions />
     </div>
    );
  }
}
export default App;
