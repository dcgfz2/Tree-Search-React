// Classes for defing a searchtree

class Node{
  constructor(value){
    this.value = value;
    this.children = [];
  }

  addChild(value){
    this.children.push(value);
  }

  removeChild(value){
    var index = this.children.findIndex(i => i.value === value);
    this.children.splice(index,1);
  }

  print(){
    console.log("Value " + this.value + " |Children " + JSON.stringify(this.children));
    this.children.forEach(function(item,index){
      item.print();
    });
  }
}

class SearchTree{
  constructor(value){
    this.root = new Node(value);
  }

  insert(parent, value){
    const newNode = new Node(value);
    parent.addChild(newNode);
    return newNode;
  }

  remove(parent, value){
    parent.removeChild(value);
  }

  maxDepth(node){
    if(node == null) return 0;

    var max = 0;
    node.children.forEach((item,index) => {
      let subtree = this.maxDepth(item);
      if(max < subtree) max = subtree;
    });

    return 1 + max;
  }

  nodeLevelView(depth,levels,node){
    //If array entry for said depth doesn't already exist then init
    if(depth === levels.length) levels.push(new Array(node));
    else{
      levels[depth].push(node);
    }

    node.children.forEach((item,index) => {
      this.nodeLevelView(depth+1,levels,item);
    });

    return levels;
  }

  traverseDepth(goal){
    let path = [];
    let order = [this.root];

    while(order.length){
      let node = order.shift()

      path.push(node.value);

      if(node.value == goal){
        return path;
      } else{
        order.unshift(...node.children);
      }
    }

    return path;
  }

  traverseBreadth(goal){
    let path = [];
    let order = [this.root];

    while(order.length){
      let node = order.shift()

      path.push(node.value);

      if(node.value == goal){
        return path;
      } else{
        order.push(...node.children);
      }
    }

    return path;
  }

  print(){
    this.root.print();
  }
}

export default SearchTree;
