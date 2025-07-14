class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(value, position = null) {
    const newNode = new Node(value);

    // Empty list: insert as head
    if (!this.head) {
      this.head = newNode;
      return;
    }

    // No position specified: append at end
    if (position === null) {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
      return;
    }

    // Insert at head if position <= 1
    if (position <= 1) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }

    // Traverse to the node before the target position
    let current = this.head;
    let prev = null;
    let i = 1;

    while (current && i < position) {
      prev = current;
      current = current.next;
      i++;
    }

    // Insert between prev and current
    if (prev) {
      prev.next = newNode;
      newNode.next = current;
    } else {
      // Should never get here since position > 1, but safety check
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  printList() {
    let current = this.head;
    let result = "";
    while (current) {
      result += current.value + "->";
      current = current.next;
    }
    console.log(result + "null");
  }
}

let list = new LinkedList();
list.insert(10, -6); // insert at head
list.insert(20, 1); // insert at head again
list.insert(30, 2); // insert at position 2
list.insert(40, 100); // insert at position beyond length: append at end
list.insert(50); // no position: append at end
list.printList();
