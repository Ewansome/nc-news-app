import { useState } from "react";

export default function OrderBy(props) {
  const { allArticles, setAllArticles } = props;
  const [direction, setDirection] = useState(true);

  return (
    <div>
      <h3>Choose a category to sort articles by:</h3>
      <div>
        <button
          className="navButtons"
          onClick={() => {
            if (direction) {
              setAllArticles((allArticles) =>
                [...allArticles].sort((a, b) =>
                  a.comment_count > b.comment_count ? 1 : -1
                )
              );
            } else {
              setAllArticles((allArticles) => {
                [...allArticles].sort((a, b) => {
                  a.comment_count > b.comment_count ? -1 : 1;
                });
              });
            }
          }}
        >
          Comments
        </button>
        <button
          className="navButtons"
          onClick={() => {
            setAllArticles((allArticles) =>
              [...allArticles].sort((a, b) => (a.votes > b.votes ? 1 : -1))
            );
          }}
        >
          Votes
        </button>
        <button
          className="navButtons"
          onClick={() => {
            setAllArticles((allArticles) =>
              [...allArticles].sort((a, b) =>
                a.created_at > b.created_at ? 1 : -1
              )
            );
          }}
        >
          Date
        </button>
      </div>

      <h3>Choose what order they return in:</h3>
      <button
        className="navButton"
        onClick={() => {
          setDirection(true);
        }}
      >
        Ascending
      </button>
      <button
        className="navButton"
        onClick={() => {
          setDirection(false);
        }}
      >
        Descending
      </button>
    </div>
  );
}
