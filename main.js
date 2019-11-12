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


function main() {
  let bstree = new BinarySearchTree();

  bstree.insert(3, 3);
  bstree.insert(1, 1);
  bstree.insert(4, 4);
  bstree.insert(6, 6);
  bstree.insert(9, 9);
  bstree.insert(2, 2);
  bstree.insert(5, 5);
  bstree.insert(7, 7);

  //console.log(bstree);
  //console.log(maxHeightFinder(bst));
  //console.log(bst.find('T'));
  //console.log(bstree);

  return bstree;
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

// problem 7

const thirdLargestNode = (node, newArr = []) => {
  if (node == null) {
    return newArr;
  }

  // push node.key into newArr, increment to the right, THEN check if a left key is present
  let nodeKey = node.key;
  newArr.push(nodeKey);

  thirdLargestNode(node.right, newArr);
  // thirdLargestNode(node.right.left, newArr);
  if (node.left) {
    thirdLargestNode(node.left, newArr);
  }

  return newArr;
}

const thirdLargestNodeSort = (bst) => {
  const BSTArray = thirdLargestNode(bst)
  const sortedArr = BSTArray.sort((a ,b) => b - a);
  return sortedArr[2];
} 

// console.log(main());
// console.log(thirdLargestNodeSort(main()));

// Problem 8

const balancedBst = (bst, leftCount = 0, rightCount = 0) => {
  if (!bst) 
    return 'No BST';

  leftCount = maxHeightFinder(bst.left);
  rightCount = maxHeightFinder(bst.right);

  return (Math.abs(leftCount - rightCount) > 1 ? false : true);
};

console.log(balancedBst(main()));