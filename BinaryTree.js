class Node {
  constructor(value) {
    this.val = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  add(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return;
    }
    let currentNode = this.root;
    while (currentNode) {
      if (newNode.val > currentNode.val) {
        if (!currentNode.right) {
          currentNode.right = newNode;
          return;
        }
        currentNode = currentNode.right;
      } else {
        if (!currentNode.left) {
          currentNode.left = newNode;
          return;
        }
        currentNode = currentNode.left;
      }
    }
  }

  preOrder(node, callback) {
    if (!node) return;
    if (callback) callback(node);

    this.preOrder(node.left, callback);

    this.preOrder(node.right, callback);
  }

  inOrder(node, callback) {
    if (!node) return;

    this.inOrder(node.left, callback);

    if (callback) callback(node);

    this.inOrder(node.right, callback);
  }

  postOrder(node, callback) {
    if (!node) return;

    this.postOrder(node.left, callback);

    this.postOrder(node.right, callback);

    if (callback) callback(node);
  }

  traverseDFS(callback, method) {
    if (method === 'preOrder') {
      return this.preOrder(this.root, callback);
    }
    if (method === 'inOrder') {
      return this.inOrder(this.root, callback);
    }
    return this.postOrder(this.root, callback);
  }

  traverseBFS(callback) {
    const queue = [this.root];

    while (queue.length) {
      const node = queue.shift();

      callback(node);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }
}

const myTree = new BinaryTree();
myTree.add(7);
myTree.add(10);
myTree.add(4);
myTree.add(12);
myTree.add(9);
myTree.add(3);
myTree.add(6);

// myTree.traverseDFS((node) => console.log(node.val), 'preOrder');
//           7(1)
//     4(2)         10(5)
//  3(3)   6(4) 9(6)   12(7)

// myTree.traverseDFS((node) => console.log(node.val), 'inOrder');
//           7(4)
//     4(2)         10(6)
//  3(1)   6(3) 9(5)   12(7)

// myTree.traverseDFS((node) => console.log(node.val), 'postOrder');
//           7(7)
//     4(3)         10(6)
//  3(1)   6(2) 9(4)   12(5)

// myTree.traverseBFS((node) => console.log(node.val));
//           7(1)
//     4(2)         10(3)
//  3(4)   6(5) 9(6)   12(7)
