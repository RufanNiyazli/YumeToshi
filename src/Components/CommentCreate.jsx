import React, { useState } from "react";
import "../Css/Comment.css";
import { db } from "../Firebase";
import { getAuth } from "firebase/auth";
import { collection, addDoc, Timestamp } from "firebase/firestore";

function CommentCreate({ id }) {
  const [comment, setComment] = useState("");

 const addComment = async () => {
    if (comment.trim() === "") {
      return alert("Boş mesaj olmaz.");
    }

    if (!id) {
      return alert("Keçərsiz anime ID-si!");
    }

    try {
      const auth = getAuth();
      const user = auth.currentUser;

      if (!user) {
        return alert("Şərh yazmaq üçün daxil olun!");
      }

      const docRef = await addDoc(collection(db, "comments"), {
        comment: comment,
        anime_id: id,
        userEmail: user.email,
        userName: user.displayName || "Anonymous",
        createdAt: Timestamp.fromDate(new Date())
      });

      console.log("Şərh əlavə edildi: ", docRef.id);
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
    </div>
  );
}

export default CommentCreate;
