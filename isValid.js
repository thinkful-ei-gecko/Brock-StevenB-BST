const BinarySearchTree = require("./bst");

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.righ = null;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }
  isValidBSTB(node, left = null, right = null) {
    if (!node) {
      return true;
    }
    if (right !== null && node.data >= right) {
      return false;
    }
    if (left !== null && node.data <= left) {
      return false;
    }
    const leftSide = this.isValidBSTB(node.left, left, node.data);
    const rightSide = this.isValidBSTB(node.right, node.val, right);

    return leftSide && rightSide;
  }
}

function main() {
  const t = new Node(10);
  t.left = new Node(0);
  t.left.left = new Node(7);
  t.left.right = new Node(4);
  t.right = new Node(12);
  let tt = new Tree();

  console.log(tt.isValidBSTB(t));
}
main();
