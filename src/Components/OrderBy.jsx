import { useEffect, useState } from "react";
import * as api from "../api";

export default function OrderBy(props) {
  const { allArticles, setAllArticles } = props;
  const [typeOf, setTypeOf] = useState("");

  return (
    <div>
      <h3>Choose a category to sort articles by:</h3>
      <div>
        <button
          className="navButtons"
          onClick={() => {
            setTypeOf(allArticles.comment_count);
            setAllArticles((allArticles) =>
              [...allArticles].sort((a, b) =>
                a.comment_count > b.comment_count ? 1 : -1
              )
            );
          }}
        >
          Comments
        </button>
        <button
          className="navButtons"
          onClick={() => {
            setTypeOf(allArticles.votes);
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
            setTypeOf(allArticles.created_at);
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
          setAllArticles((allArticles) =>
            [...allArticles].sort((a, b) => (a.typeOf < b.typeOf ? 1 : -1))
          );
        }}
      >
        Ascending
      </button>
      <button
        className="navButton"
        onClick={() => {
          setAllArticles((allArticles) =>
            [...allArticles].sort((a, b) => (a.typeOf > b.typeOf ? 1 : -1))
          );
        }}
      >
        Descending
      </button>
    </div>
  );
}
