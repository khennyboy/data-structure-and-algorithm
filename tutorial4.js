class Node {
  constructor(value) {
    this.head = value;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    this.head = new Node(value);
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
    newNode.prev = this.tail;
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
    this.head.prev = newNode;
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
    this.head.prev = null;
    if (this.length != 0) {
      this.length--;
    }
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
  }
}
const myDoublyLinkedList = new DoublyLinkedList(1);
myDoublyLinkedList.push(2);
myDoublyLinkedList.push(3);
myDoublyLinkedList.push(4);
myDoublyLinkedList.pop();
myDoublyLinkedList.shift()
myDoublyLinkedList.unshift(1)
console.log(myDoublyLinkedList);
