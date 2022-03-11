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
  const [posted, setPosted] = useState(false);
  console.log(comment);

  useEffect(() => {
    api.fetchArticleComments(articleId).then((commentData) => {
      setComments(commentData);
    });
  }, [articleId]);

  return (
    <div>
      <div className="commentPageButtons">
        <button className="homepageButton">
          <Link to="/">Homepage</Link>
        </button>
        <button className="homepageButton">
          <Link to={`/articles/${articleId}`}>Back to article</Link>
        </button>
      </div>

      <h2>Comments</h2>
      <Commenter
        posted={posted}
        setPosted={setPosted}
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
            <p>Comment ID: {comment_id}</p>
            <p>Author: {author}</p>
            <p>Votes: {votes}</p>
            <p>Created at: {created_at}</p>
            <DeleteComment
              posted={posted}
              setPosted={setPosted}
              comment={comment}
              comments={comments}
              setComments={setComments}
              commentId={comment_id}
            />
          </div>
        );
      })}
    </div>
  );
}
