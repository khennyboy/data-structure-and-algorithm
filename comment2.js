class CommentNode {
  constructor(text, author) {
    this.text = text;
    this.author = author;
    this.next = null; // link to next top-level comment
    this.replies = []; // replies under this comment
  }

  addReply(text, author) {
    const reply = new CommentNode(text, author);
    this.replies.push(reply);
  }
}

class CommentList {
  constructor() {
    this.head = null;
  }

  // Add new top-level comment
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

  // Print all top-level comments and their replies
  printComments() {
    let current = this.head;
    while (current) {
      console.log(`${current.author}: ${current.text}`);
      current.replies.forEach((reply) => {
        console.log(`  ↳ ${reply.author}: ${reply.text}`);
      });
      current = current.next;
    }
  }
}

const comments = new CommentList();

// Add top-level comments
comments.addComment("Great post!", "Alice");
comments.addComment("Thanks for sharing!", "Charlie");

// Add replies under first top-level comment
let firstComment = comments.head;
firstComment.addReply("Thanks Alice!", "Bob");
firstComment.addReply("I agree!", "Dave");

// Add reply under second comment
let secondComment = firstComment.next;
secondComment.addReply("You're welcome!", "Alice");

// Print all
comments.printComments();
