class BinarySearchTreeCustom {
  constructor(key = null, value = null, parent = null) {
    this.key = key;
    this.value = value;
    this.parent = parent;
    this.left = null;
    this.right = null;
  }

  insert(key, value) {
    if(!this.key){
      this.key = key;
      this.value = value;
    }
    else if(key < this.key) {
      if(!this.left) {
        this.left = new BinarySearchTreeCustom(key, value, this);
      }
      else {
        this.left.insert(key, value);
      }
    }
    else {
      if(!this.right) {
        this.right = new BinarySearchTreeCustom(key, value, this);
      }
      else {
        this.right.insert(key, value)
      }
    }
  }

  find(key) {
    if(this.key === key){
      return this.value;
    }
    else if (key < this.key && this.left) {
      return this.left.find(key);
    }
    else if (key > this.key && this.right) {
      return this.right.find(key);
    }
    else {
      throw new Error('Key Error');
    }
  }

  remove(key) {
    if (this.key === key) {
      if (this.left && this.right) {
        const successor = this.right._findMin();
        this.key = successor.key;
        this.value = successor.value;
        successor.remove(successor.key);
      } 
      else if (this.left) {
        this._replaceWith(this.left);
      } 
      else if (this.right) {
        this._replaceWith(this.right);
      } 
      else {
        this._replaceWith(null);
      }
    } 
    else if (key < this.key && this.left) {
      this.left.remove(key);
    } 
    else if (key > this.key && this.right) {
      this.right.remove(key);
    } 
    else {
      throw new Error('Key Error');
    }
  }

  _findMin(){
    if(!this.left) {
      return this;
    }
    return this.left._findMin();
  }
}
module.exports = BinarySearchTreeCustom;