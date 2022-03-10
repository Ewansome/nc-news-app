import { useState } from "react";
import * as api from "../api";

export default function Commenter(props) {
  const { comments, setComments, articleId } = props;
  const [comment, setComment] = useState("");
  const [error, setError] = useState(false);

  const handleChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newComment = {
      body: String(comment),
      username: "happyamy2016",
      votes: 0,
      created_at: String(new Date()),
      comment_id: comments.length,
    };
    setError(false);
    setComment("");
    setComments((comments) => {
      return [newComment, ...comments];
    });
    api.postComment(articleId, newComment).catch((err) => {
      setError(true);
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Write you're own comment:
          <input type="text" value={comment} onChange={handleChange} />
        </label>
        <button type="submit">Submit comment</button>
      </form>
      {error ? <p>Your comment could not be posted!</p> : null}
    </>
  );
}
