const BinarySearchTree = require('./bst');

function main(){
  let bst = new BinarySearchTree();

  bst.insert(3);
  bst.insert(1);
  bst.insert(4);
  bst.insert(6);
  bst.insert(9);
  bst.insert(2);
  bst.insert(5);
  bst.insert(7);

  console.log(bst)
}
main();