import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import uuid from "react-uuid";

const Detail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const todos = useSelector((state) => state.todos);
  const todo = todos.filter((todo) => todo.id === id)[0];
  const all = useSelector((state) => state.comments);
  const dispatch = useDispatch();
  const [comment, setComment] = useState(""); // Define comment and setComment

  const handleComment = () => {
    if (comment.trim() === "") {
      return; // Do not submit an empty comment
    }

    const newComment = {
      id: uuid(),
      comment: comment,
    };

    dispatch({ type: "ADD_COMMENT", payload: newComment });

    setComment("");
  };

  return (
    <div>
      {todo.id}
      <br />
      {todo.title}
      <br />
      {todo.body}
      <br />
      {todo.isDone.toString()}
      <br />
      <br />
      <div>
        <input
          type='text'
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder='Leave your comment'
        />
        <button onClick={handleComment}>Leave Comment</button>
        <h5>Comments:</h5>
        {all.map((comment) => (
          <div key={comment.id}>
            <p>{comment.comment}</p>
          </div>
        ))}
      </div>
      <button onClick={() => navigate("/")}>Go back</button>
    </div>
  );
};

export default Detail;
