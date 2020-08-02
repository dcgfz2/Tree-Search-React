import React from 'react';
import SearchTree from './lib/searchtree';
import RenderTree from './components/rendertree';
import ControlPanel from './components/controlpanel';

import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        selected: null,
    };
    
    this.tree = new SearchTree(0);
    let noder = this.tree.insert(this.tree.root,5);
    this.tree.insert(noder,47);
    this.tree.insert(noder,96);
    this.tree.insert(this.tree.insert(this.tree.root,8),7);

  }

  selectNode = (node) => {
    this.setState({selected: node});
    console.log("SELECTED NODE " + JSON.stringify(this.state.selected))
  }

  render(){
    return (
      <div className="main-container">
         <RenderTree data={this.tree} height={this.tree.maxDepth(this.tree.root)} onClick={this.selectNode}/>
         <ControlPanel selected={this.state.selected} />
      </div>
    );
  }
}
export default App;
