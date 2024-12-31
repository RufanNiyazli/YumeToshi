import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { db } from "../Firebase";
import { addCommentToStore } from "../Slices/CommentSlice";
import CommentList from "./CommentList";

function CommentCreate() {
  const [comment, setComment] = useState("");
  const { id } = useParams();
  const dispatch = useDispatch();

  const addComment = async () => {
    if (comment.trim() === "") return alert("Boş mesaj olmaz.");
    if (!id) return alert("Anime ID-si tapılmadı!");

    try {
      const auth = getAuth();
      const user = auth.currentUser;
      if (!user) return alert("Şərh yazmaq üçün daxil olun!");

      const newComment = {
        comment,
        anime_id: id,
        userEmail: user.email,
        userName: user.displayName || "Anonymous",
        createdAt: new Date().toISOString(),
      };

      await addDoc(collection(db, "comments"), {
        ...newComment,
        createdAt: Timestamp.fromDate(new Date()),
      });

      dispatch(addCommentToStore(newComment));
      setComment("");
    } catch (error) {
      console.error("Şərh əlavə edərkən xəta baş verdi: ", error);
      alert("Şərh əlavə edilə bilmədi. Xahiş edirik yenidən cəhd edin.");
    }
  };

  return (
    <div className="create-container">
      <h1>Comments</h1>
      <div className="create">
        <input
          type="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Şərhinizi yazın..."
        />
        <button onClick={addComment}>Add</button>
      </div>
      <CommentList addCommentTrigger={comment} />
    </div>
  );
}

export default CommentCreate;
