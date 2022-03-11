import { useState } from "react";
import AscOrDesc from "./AscOrDesc";

export default function OrderBy(props) {
  const { allArticles, setAllArticles } = props;

  return (
    <div className="articleButtonsAndParas">
      <h3>Choose a category to sort articles by:</h3>
      <div className="categoryButtons">
        <button
          className="navButtons"
          onClick={() => {
            setAllArticles((allArticles) =>
              [...allArticles].sort((a, b) =>
                a.comment_count < b.comment_count ? 1 : -1
              )
            );
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
      <AscOrDesc allArticles={allArticles} setAllArticles={setAllArticles} />
    </div>
  );
}
