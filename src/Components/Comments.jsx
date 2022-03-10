import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import * as api from "../api";

export default function Comments() {
  const { articleId } = useParams();
  const [comments, setComments] = useState([]);

  useEffect(() => {
    api.fetchArticleComments(articleId).then((commentData) => {
      setComments(commentData);
    });
  }, [articleId]);

  return (
    <div>
      <Link to="/">Homepage</Link>
      <h2>Comments</h2>
      {comments.map((comment) => {
        const { body, author, votes, created_at, comment_id } = comment;
        return (
          <div key={comment_id} className="articlesList">
            <p>{body}</p>
            <hr></hr>
            <p>Author: {author}</p>
            <p>Votes: {votes}</p>
            <p>Created at: {created_at}</p>
          </div>
        );
      })}
    </div>
  );
}
