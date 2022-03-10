import React from "react";
import { useState } from "react";
import * as api from "../api";

export default function Liker(props) {
  const [increment, setIncrement] = useState(0);
  const { votes, articleId } = props;

  const handleIncrement = (incVotes) => {
    setIncrement((currentIncrement) => {
      return currentIncrement + incVotes;
    });
    api.patchArticles(articleId, 1).catch(() => {
      setIncrement((currentIncrement) => {
        return currentIncrement - incVotes;
      });
    });
  };

  return (
    <>
      <div>
        <p>Votes: {votes + increment}</p>
      </div>
      <div>
        <button disabled={increment === 1} onClick={() => handleIncrement(1)}>
          ❤️
        </button>
        <button disabled={increment === -1} onClick={() => handleIncrement(-1)}>
          💔
        </button>
      </div>
    </>
  );
}
