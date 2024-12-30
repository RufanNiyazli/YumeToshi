import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchComments } from "../Slices/CommentSlice";

const formatDate = (isoString) => {
  const date = new Date(isoString);
  return date.toLocaleString(); 
};

function CommentList() {
  const dispatch = useDispatch();
  const { comments, loading, error } = useSelector((state) => state.comment);

  useEffect(() => {
    if (!loading) {
      dispatch(fetchComments());
    }
  },[dispatch]);

  if (loading === "loading") {
    return <div className="loading">Şərhlər yüklənir...</div>;
  }

  if (loading === "failed") {
    return <div className="error">Xəta: {error}</div>;
  }

  return (
    <div>
      <h2>Comments</h2>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>
            <p>
              <strong>{comment.author}:</strong> {comment.comment}
            </p>
            <p>
              <small>
                {comment.createdAt
                  ? formatDate(comment.createdAt)
                  : "Tarix mövcud deyil"}
              </small>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CommentList;
