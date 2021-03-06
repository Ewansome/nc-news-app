import { useState } from "react";
import * as api from "../api";

export default function Commenter(props) {
  const { setComments, articleId, comment, setComment } = props;
  const [error, setError] = useState(false);

  const handleChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newComment = {
      body: String(comment),
      username: "cooljmessy",
      author: "",
      votes: 0,
      created_at: String(new Date()),
    };

    setError(false);
    setComments((comments) => {
      return [newComment, ...comments];
    });
    api
      .postComment(articleId, newComment)
      .then(() => {
        api.fetchArticleComments(articleId).then((comments) => {
          setComments(comments);
        });
      })
      .catch((err) => {
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
