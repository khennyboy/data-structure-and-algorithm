class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return;
    }
    let temp = this.root;
    while (true) {
      if (newNode.value === temp.value) {
        return undefined;
      }
      if (newNode.value < temp.value) {
        if (temp.left === null) {
          temp.left = newNode;
          return this; // this authomatically stops the function
        }
        temp = temp.left;
      } else {
        if (temp.right === null) {
          temp.right = newNode;
          return this; // this authomatically stops the function
        }
        temp = temp.right;
      }
    }
  }
  includes(value) {
    let temp = this.root;
    while (temp) {
      if (value < temp.value) {
        temp = temp.left;
      } else if (value > temp.value) {
        temp = temp.right;
      } else if (value == temp.value) {
        return true;
      }
    }
    return false;
  }
  bfs() {
    let current = this.root;
    let queue = [];
    let data = [];
    queue.push(current);
    console.log(queue);
    while (queue.length) {
      current = queue.shift();

      data.push(current.value);

      if (current.left) {
        queue.push(current.left);
      }
      if (current.right) {
        queue.push(current.right);
      }
    }
    return data;
  }
  dfspreOrder(node = this.root, data = []) {
    if (node == null) return data;
    data.push(node.value);
    if (node.left) {
      this.dfspreOrder(node.left, data);
    }
    if (node.right) {
      this.dfspreOrder(node.right, data);
    }
    return data;
  }
  dfsPostOrder(node = this.root, data = []) {
    if (node == null) return data;

    if (node.left) {
      this.dfsPostOrder(node.left, data);
    }

    if (node.right) {
      this.dfsPostOrder(node.right, data);
    }

    data.push(node.value);
    return data;
  }
  dfsInOrder(node = this.root, data = []) {
    if (node == null) return data;

    if (node.left) {
      this.dfsInOrder(node.left, data);
    }
    data.push(node.value);
    if (node.right) {
      this.dfsInOrder(node.right, data);
    }
    return data;
  }
}

const tree = new BST();
tree.insert(5);
tree.insert(3);
tree.insert(8);
tree.insert(1);
tree.insert(4);
tree.insert(7);
tree.insert(9);
console.log(tree.dfspreOrder());
console.log(tree.dfsPostOrder());
console.log(tree.dfsInOrder());
// console.log(tree.bfs());

function recursive(n) {
  return n != 1 ? n * recursive(n - 1) : 1;
}
console.log(recursive(5));

/** 
Call dfsPostOrder(5)
 -> Call dfsPostOrder(3)
     -> Call dfsPostOrder(1)
         -> push 1
     -> Call dfsPostOrder(4)
         -> push 4
     -> push 3
 -> Call dfsPostOrder(8)
     -> Call dfsPostOrder(7)
         -> push 7
     -> Call dfsPostOrder(9)
         -> push 9
     -> push 8
-> push 5
*/
