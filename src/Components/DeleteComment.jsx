import { useState } from "react";
import { useParams } from "react-router-dom";
import * as api from "../api";

export default function DeleteComment(props) {
  const { articleId } = useParams();
  const { commentId, setComments, comments, posted } = props;
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [disabled, setDisabled] = useState(false);

  return (
    <>
      <button
        disabled={disabled}
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

      {error ? (
        <p>Could not delete this comment, try refreshing the page!</p>
      ) : null}
    </>
  );
}

//if optimistically rendered disable button
//if comment idd = undefined disable delete button

//or
//create state for if comment posted and use to re render fetchArtcileCommets

//put username in comments map function, if username == map username, render button
