import React from "react";

function Comment() {
  return (
    <div>
      <div className="comment-container">
        <h1>Comments</h1>
        <div className="comment-section">
          <input type="text" />
          <button>Add</button>
        </div>
      </div>
    </div>
  );
}

export default Comment;
