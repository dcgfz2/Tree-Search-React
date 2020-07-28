import React from 'react';
import SearchTree from './lib/searchtree';
import RenderTree from './components/rendertree';
import ControlPanel from './components/controlpanel';

import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.selected = null;
    this.state = {

    };
    this.tree = new SearchTree(0);
    let noder = this.tree.insert(this.tree.root,5);
    this.tree.insert(noder,47);
    this.tree.insert(noder,96);
    this.tree.insert(this.tree.insert(this.tree.root,8),7);
  }

  selectNode = (node) => {
    this.selected = node;
    console.log("SELECTED NODE " + JSON.stringify(node))
  }

  render(){
    return (
      <div className="main-container">
         <RenderTree data={this.tree} height={this.tree.maxDepth(this.tree.root)} onClick={this.selectNode}/>
         <ControlPanel data={this.selected} />
      </div>
    );
  }
}
export default App;
