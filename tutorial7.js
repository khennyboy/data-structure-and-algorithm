class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Queue {
  constructor(value) {
    this.first = new Node(value);
    this.last = this.first;
    this.length = 1;
  }
  enqueue(value) {
    let newNode = new Node(value);
    if (!this.first) {
      this.first = new Node(value);
      this.last = new Node(value);
      return;
    }
    this.last.next = newNode;
    this.last = newNode;
    this.length++;
  }
  dequeue() {
    if (this.length === 0) {
      return undefined;
    }
    let temp = this.first;
    if (this.length === 1) {
      this.first = null;
      this.last = null;
    }

    this.first = this.first.next;
    this.length--;
  }
}

let theQueue = new Queue(1);
theQueue.enqueue(2);
theQueue.enqueue(3);
theQueue.dequeue();
console.log(theQueue);
