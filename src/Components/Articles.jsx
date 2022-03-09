import React from "react";
import { useEffect } from "react";
import ArticleCard from "./ArticleCard";
import * as api from "../api";

export default function Articles(props) {
  const { allArticles, setAllArticles } = props;

  useEffect(() => {
    api.fetchArticles().then((allArticles) => {
      setAllArticles(allArticles);
    });
  }, [setAllArticles]);

  return (
    <div>
      <p>All articles:</p>

      <ArticleCard allArticles={allArticles} setAllArticles={setAllArticles} />
    </div>
  );
}
