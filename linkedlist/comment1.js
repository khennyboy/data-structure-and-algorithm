class CommentNode {
  constructor(text, author) {
    this.text = text;
    this.author = author;
    this.next = null;
  }
}

class CommentList {
  constructor() {
    this.head = null;
  }

  addComment(text, author) {
    const newComment = new CommentNode(text, author);
    if (!this.head) {
      this.head = newComment;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newComment;
  }

  deleteComment(text) {
    if (!this.head) return;
    if (this.head.text === text) {
      this.head = this.head.next;
      return;
    }
    let prev = null;
    let current = this.head;
    while (current && current.text !== text) {
      prev = current;
      current = current.next;
    }
    if (!current) return; // not found
    prev.next = current.next;
  }

  printComments() {
    let current = this.head;
    while (current) {
      console.log(`${current.author}: ${current.text}`);
      current = current.next;
    }
  }
}

let comment = new CommentList();
comment.addComment("sheriff", "awesome");
comment.printComments();

