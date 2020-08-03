import React from 'react';
import SearchTree from './lib/searchtree';
import RenderTree from './components/rendertree';
import ControlPanel from './components/controlpanel';

import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);

    var startTree = new SearchTree(0);

    this.state = {
        tree: startTree,
        selected: startTree.root,
    };
    this.treeSize = 0;
  }

  reset = () => {
    var startTree = new SearchTree(0);
    this.setState({tree: startTree,
    selected: startTree.root});
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

  render(){
    return (
      <div className="main-container">
         <RenderTree data={this.state.tree} height={this.state.tree.maxDepth(this.state.tree.root)} onClick={this.selectNode}/>
         <ControlPanel selected={this.state.selected} addEvent={this.insertNode} resetEvent={this.reset}/>
      </div>
    );
  }
}
export default App;
