class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(value) {
    this.first = new Node(value);
    this.length = 1;
  }
  push(value) {
    if (!this.first) {
      this.first = new Node(value);
      return;
    }
    let temp = new Node(value);
    temp.next = this.first;
    this.first = temp;
    this.length++;
  }
  pop() {
    let temp = this.first;
    this.first = this.first.next;
    temp.next = null;
    this.length--;
    return temp;
  }
  min() {
    if (this.length === 0) {
      return undefined;
    }
    let min = this.first.value;
    let temp = this.first;
    while (temp) {
      if (temp.value < min) {
        min = temp.value;
      }
      temp = temp.next;
    }
    return min;
  }
  isValidParenthesis(str) {
    const stack = [];
    const brackets = {
      "{": "}",
      "[": "]",
      "(": ")",
    };
    for (let char of str) {
      if (brackets[char]) {
        stack.push(char);
      } else {
        const top = stack.pop();
        if (!top || brackets[top] !== char) {
          return false;
        }
      }
    }
    return stack.length === 0;
  }
  reverseString(str) {
    let stack = [];
    for (let char of str) {
      stack.push(char);
    }
    let reverseStr = "";
    while (stack.length > 0) {
      reverseStr += stack.pop();
    }
    return reverseStr;
  }
}

let theStack = new Stack(10);
theStack.push(2);
theStack.push(3);
theStack.push(4);
theStack.push(1);
theStack.push(0);
console.log(theStack.min());
console.log(theStack.isValidParenthesis("({})"));
console.log(theStack.isValidParenthesis("{({}}"));
console.log(theStack.reverseString("hello world"));
console.log(theStack);
