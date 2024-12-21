import React from "react";
import "../Css/Comment.css";
function CommentCreate() {
  return (
    <div className="create-container">
      <h1>Comments</h1>
      <div className="create">
        <input type="text" />
        <button>Add</button>
      </div>
    </div>
  );
}

export default CommentCreate;
