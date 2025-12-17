// Linked list
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = new Node(value);
    // this tail pointing to same head, so any changes to the tail affect the head
    this.tail = this.head;
    this.length = 1;
  }
  push(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }
  pop() {
    if (!this.head) {
      console.log("Nothing to remove in the list ");
      return null;
    }
    let temp = this.head;
    let prev = this.head;
    while (temp.next) {
      prev = temp;
      temp = prev.next;
    }
    this.tail = prev;
    this.tail.next = null;
    if (this.length != 0) {
      this.length--;
    }
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return temp;
  }
  unshift(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }
  shift() {
    if (!this.head) {
      console.log("Nothing to remove in the list ");
      return null;
    }
    let temp = this.head.next;
    this.head = temp;
    if (this.length != 0) {
      this.length--;
    }
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
  }
  getFirst() {
    return this.head;
  }
  getLast() {
    return this.tail;
  }
  get(index) {
    let counter = 1;
    let temp = this.head;
    while (temp) {
      if (counter === index) {
        return temp;
      }
      counter++;
      temp = temp.next;
    }
  }
  set(index, value) {
    let temp = this.get(index);
    if (temp) {
      temp.head = value;
      return true;
    }
    console.log(temp);
    return false;
  }
  insert(index, value) {
    if (!this.head) {
      this.head = new Node(value);
      this.tail = new Node(value);
      return;
    }
    let newNode = new Node(value);
    let prevNode,
      nextNode = null;
    if (index <= 1) {
      this.unshift(value);
      this.length++;
      return;
    }
    if (index >= this.length) {
      this.push(value);
      this.length++;
      return;
    }
    prevNode = this.get(index - 1);
    nextNode = this.get(index + 1);
    prevNode.next = newNode;
    newNode.next = nextNode;
    this.length++;
  }
  size() {
    return this.length;
  }
  clear() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
}

const myLinkedList = new LinkedList(1);
myLinkedList.push(2);
myLinkedList.push(3);
myLinkedList.push(4);
myLinkedList.insert(2, 10);
console.log(myLinkedList);
console.log(myLinkedList.size());

// let x = {
//   first: 2,
//   hello: {
//     second: 3,
//     third: 4,
//   },
// };
// let y = x.hello;
// y.second = 4;
// console.log(x);
