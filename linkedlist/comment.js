let idCounter = 1;
let replyId = null;
let isReply = false;

class CommentNode {
  constructor(text, author) {
    this.id = idCounter++;
    this.text = text;
    this.author = author;
    this.next = null;
    this.replies = [];
    this.timestamp = new Date();
  }

  addReply(text, author) {
    const reply = new CommentNode(text, author);
    this.replies.push(reply);
  }

  deleteReplyById(id) {
    // 1. Try to delete at this level
    const index = this.replies.findIndex((reply) => reply.id === id);
    if (index !== -1) {
      this.replies.splice(index, 1);
      return true; // stop immediately
    }

    // 2. Otherwise, go deeper into children
    for (const reply of this.replies) {
      if (reply.deleteReplyById(id)) {
        return true; // stop as soon as deleted
      }
    }

    return false; // not found anywhere
  }
}

class CommentList {
  constructor() {
    this.head = null;
  }
  // same as the one of the linked.js file
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

  deleteCommentById(id) {
    // this runs if no element in the node
    if (!this.head) return;
    // this checks if the element is at the start of the node
    if (this.head.id === id) {
      this.head = this.head.next;
      return;
    }
    let prev = null;
    let current = this.head;
    while (current && current.id !== id) {
      prev = current;
      current = current.next;
    }
    if (current) {
      prev.next = current.next;
    } else {
      let node = this.head;
      console.log(node, "node");
      while (node) {
        node.deleteReplyById(id);
        node = node.next;
      }
    }
  }

  renderComments() {
    let html = "";
    let current = this.head;
    while (current) {
      html += renderNode(current);
      current = current.next;
    }
    return html;
  }
}

// Global comment list
const comments = new CommentList();
// Sample data
comments.addComment("Great post!", "Alice");
let first = comments.head;
first.addReply("Thanks Alice!", "Bob");
first.addReply("I agree!", "Dave");
comments.addComment("Thanks for sharing!", "Charlie");
let second = comments.head.next;
second.addReply("I agreed", "Charlie2");
updateView();

// --- DOM handlers ---
function addNewComment(id = replyId, reply = isReply) {
  console.log(id, reply);
  const text = document.getElementById("newCommentText").value.trim();
  const author = document.getElementById("newCommentAuthor").value.trim();
  try {
    if (reply) {
      if (text && author) {
        findAndAddReply(comments.head, id, text, author);
        updateView();
      }
    } else {
      if (text && author) {
        comments.addComment(text, author);
        document.getElementById("newCommentText").value = "";
        document.getElementById("newCommentAuthor").value = "";
        updateView();
      }
    }
  } catch (error) {
  } finally {
    isReply = false;
    replyId = null;
  }
}

function replyToComment(id) {
  document.getElementById("newCommentText").focus();
  replyId = id;
  isReply = true;
}

function deleteComment(id) {
  comments.deleteCommentById(id);
  updateView();
}

// --- Helpers ---
function updateView() {
  document.getElementById("commentsContainer").innerHTML =
    comments.renderComments();
}

function renderNode(node, isReply = false) {
  let html = `
    <div class="${isReply ? "reply" : "comment"}">
    <span class="author">${node.author}</span><span class="text">: ${
    node.text
  }</span>
        <span class="time"> (${node.timestamp.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })})</span>

  <button onclick="replyToComment(${node.id})">↩️ Reply</button>
  <button onclick="deleteComment(${node.id})">🗑️ Delete</button>

  </div>`;
  for (const reply of node.replies) {
    html += renderNode(reply, true);
  }
  return html;
}

function findAndAddReply(node, id, text, author) {
  if (!node) return;
  if (node.id === id) {
    node.addReply(text, author);
    return;
  }
  for (const reply of node.replies) {
    findAndAddReply(reply, id, text, author);
  }
  if (node.next) {
    findAndAddReply(node.next, id, text, author);
  }
}
document
  .getElementById("newCommentText")
  .addEventListener("keypress", function (e) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      addNewComment();
    }
  });
