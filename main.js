const BinarySearchTree = require("./bst");

// Q5. Create an algorithm to find the height of a tree.
// time complexity is O(n) because it has to traverse every single node.
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
  } else if (root.right !== null) {
    return maxHeightFinder(root.right, num + 1);
  } else {
    return maxHeightFinder(root.left, num + 1);
  }
}

// Q5 validate a binary search tree algorithm
let last_logged;

function isValidBST(root) {
  console.log(this.key)

  if (root === null) {
    console.log("root is null");
    return true;
  }
  if (!isValidBST(root.left)) {
    console.log('no left root')
    return false;
  }

  if (last_logged !== null && root.key <= last_logged) {
    console.log('root key is <= last logged')
    return false;
  }

  last_logged = root.key;

  if (!isValidBST(root.right)) {
    console.log('no right root')
    return false;
  }
  console.log('made it to bottom')

  return true;
}


function main() {
  let bstree = new BinarySearchTree();
  let tt = new Tree();

console.log(tt.isValidBSTB())

  bstree.insert("E");
  bstree.insert("A");
  bstree.insert("S");
  bstree.insert("Y");
  bstree.insert("Q");
  bstree.insert("U");
  bstree.insert("E");
  bstree.insert("S");
  bstree.insert("T");
  bstree.insert("I");
  bstree.insert("O");
  bstree.insert("N");

  //console.log(bstree);

  console.log(!!isValidBST(bstree));
  //console.log(maxHeightFinder(bst));

  //console.log(bst.find('T'));

  //console.log(bstree);
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
