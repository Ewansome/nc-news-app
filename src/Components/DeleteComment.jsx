import { useState } from "react";
import { useParams } from "react-router-dom";
import * as api from "../api";

export default function DeleteComment(props) {
  const { articleId } = useParams();
  const { commentId, setComments, comments } = props;
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <button
        onClick={() => {
          setIsLoading(true);
          setError(false);
          api
            .deleteComment(commentId)
            .then(() => {
              api.fetchArticleComments(articleId).then((commentsData) => {
                setComments(commentsData);
              });
              setIsLoading(false);
            })
            .catch((err) => {
              setError(true);
            });

          if (isLoading) return <h2>Loading...</h2>;
          return comments;
        }}
      >
        Delete comment
      </button>

      {error ? <p>Could not delete this comment!</p> : null}
    </>
  );
}
