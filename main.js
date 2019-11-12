const BinarySearchTree = require('./bst');

// Q5. Create an algorithm to find the height of a tree.
function maxHeightFinder(root, num = 1) {
  // here's just base case -- if you get an empty root(because you definitely will at some point, just return a depth of zero because there's nothing in the tree!
  if (root === null) {
    return 0;
  }
  // this is your terminating case. a leaf node doesn't have any children, and so the root at that point will have null value. at this point just return the depth/num
  if (root.right === null && root.left === null) {
    return num;
  }
  //Use Math.max to get the highest between the two root depths. the rest of this code is just handling the individual root cases.
  if (root.right && root.left) {
    return Math.max(
      maxHeightFinder(root.right, num + 1),
      maxHeightFinder(root.left, num + 1)
    );
  } 
  else if (root.right !== null) {
    return maxHeightFinder(root.right, num + 1);
  } 
  else {
    return maxHeightFinder(root.left, num + 1);
  }
}

function main() {
  let bst = new BinarySearchTree();

  bst.insert('E');
  bst.insert('A');
  bst.insert('S');
  bst.insert('Y');
  bst.insert('Q');
  bst.insert('U');
  bst.insert('E');
  bst.insert('S');
  bst.insert('T');
  bst.insert('I');
  bst.insert('O');
  bst.insert('N');

  console.log(maxHeightFinder(bst));

  //console.log(bst.find('T'));

  //console.log(bst);
}
main();

/* 4. what does this function do?
function tree(t){
    if(!t){
        return 0;
    }
    return tree(t.left) + t.value + tree(t.right)
}

loops through the tree to add up all of the values of all of the nodes on both sides.

*/