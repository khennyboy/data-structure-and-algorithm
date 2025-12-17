class Node {
  constructor(value) {
    this.head = value;
    this.next = null;
  }
}
class ReverseLinkedList {
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
    this.tail = newNode;
    this.length++;
  }
  reverse() {
    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;
    let next = temp;
    let prev = null;
    // the amazing part here is that we setting
    // the value of temp.next to previous value
    for (let i = 0; i < this.length; i++) {
      next = temp.next;
      temp.next = prev;
      prev = temp;
      temp = next;
    }
  }
}

const myReverseLinkedList = new ReverseLinkedList(1);
myReverseLinkedList.push(2);
myReverseLinkedList.push(3);
myReverseLinkedList.push(4);
myReverseLinkedList.reverse();
console.log(myReverseLinkedList);
