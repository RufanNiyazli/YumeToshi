import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchComments, getAnimeId, getSelectedComment } from "../Slices/CommentSlice";
import "../Css/Comment.css";
import { useParams } from "react-router-dom";

const formatDate = (isoString) => {
  const date = new Date(isoString);
  return date.toLocaleString();
};

function CommentList({ addCommentTrigger }) {
  const dispatch = useDispatch();
  const { selectedComments, loading, error } = useSelector((state) => state.comment);
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchComments());
    dispatch(getAnimeId(id));
  }, [dispatch, id]);

  useEffect(() => {
    dispatch(getSelectedComment());
  }, [dispatch, id, addCommentTrigger]);

  if (loading) return <div className="loading">Şərhlər yüklənir...</div>;
  if (error) return <div className="error">Xəta: {error}</div>;

  return (
    <div className="commentlist-container">
      <ul>
        {selectedComments.map((comment, index) => (
          <li key={index}>
            <p className="author-comment">
              <strong>{comment.author}:</strong> {comment.comment}
            </p>
            <p className="datetime">
              <small>{comment.createdAt ? formatDate(comment.createdAt) : "Tarix mövcud deyil"}</small>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CommentList;
