import React from 'react';
import SearchTree from './lib/searchtree';
import RenderTree from './components/rendertree';
import ControlPanel from './components/controlpanel';

import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    };
    this.tree = new SearchTree(0);
    let noder = this.tree.insert(this.tree.root,5);
    this.tree.insert(noder,47);
    this.tree.insert(noder,96);
    this.tree.insert(this.tree.insert(this.tree.root,8),7);
  }
  render(){
    return (
      <div className="main-container">
         <RenderTree data={this.tree} height={this.tree.maxDepth(this.tree.root)}/>
         <ControlPanel data={this.tree} />
      </div>
    );
  }
}
export default App;
