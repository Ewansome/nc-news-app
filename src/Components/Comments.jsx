import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import * as api from "../api";
import Commenter from "./Commenter";
import DeleteComment from "./DeleteComment";

export default function Comments() {
  const { articleId } = useParams();
  const [comments, setComments] = useState([]);
  const [commentId, setCommentId] = useState("");
  const [comment, setComment] = useState("");

  useEffect(() => {
    api.fetchArticleComments(articleId).then((commentData) => {
      setComments(commentData);
    });
  }, [articleId]);

  return (
    <div>
      <Link to="/">Homepage</Link>
      <h2>Comments</h2>
      <Commenter
        setCommentId={setCommentId}
        comment={comment}
        setComment={setComment}
        comments={comments}
        setComments={setComments}
        articleId={articleId}
      />
      {comments.map((comment) => {
        const { body, author, votes, created_at, comment_id } = comment;
        return (
          <div key={comment_id} className="articlesList">
            <p>{body}</p>
            <hr></hr>
            <p>Author: {author}</p>
            <p>Votes: {votes}</p>
            <p>Created at: {created_at}</p>
            <DeleteComment
              setComments
              commentId={comment_id}
              setCommentId={setCommentId}
              comment={comment}
            />
          </div>
        );
      })}
    </div>
  );
}
