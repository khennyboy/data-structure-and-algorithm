// Creating a linked list
// A linked list is a linear data structure where elements are stored in nodes, each containing a value and a reference (or pointer) to the next node.
// It allows for efficient insertion and deletion operations.

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// The Node class defines a structure with a value to store data
// and a next pointer initialized to null, representing the next node in the linked list.
// The constructor takes a value parameter to
// set the node's data and creates a node with no link to the next node initially.

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    let newnode = new Node(value);
    if (!this.head) {
      this.head = newnode;
      return;
    }
    newnode.next = this.head.next;
    this.head.next = newnode;
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

  delete(value) {
    // this runs if no element in the node
    if (!this.head) {
      console.log("list is empty no element to delete");
      return;
    }
    // this check if the element is at the start of the node
    if (this.head.value === value) {
      this.head = this.head.next;
      return;
    }
    // this runs if 2 conditions above is not met
    let prev = null;
    let current = this.head;
    while (current && current.value !== value) {
      prev = current;
      current = current.next;
    }
    if (!current) {
      console.log("value is not found in list");
      return;
    }
    prev.next = current.next;
  }
}

let list = new LinkedList();
list.append(10);
list.append(20);
list.append(30);
list.append(40);
list.printList();
