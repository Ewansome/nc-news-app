import React from "react";
import { useEffect } from "react";
import ArticleCard from "./ArticleCard";
import * as api from "../api";

export default function Articles(props) {
  const { allArticles, setAllArticles, isLoading, setIsLoading } = props;

  useEffect(() => {
    setIsLoading(true);
    api.fetchArticles().then((allArticles) => {
      setAllArticles(allArticles);
      setIsLoading(false);
    });
  }, [setAllArticles, setIsLoading]);

  if (isLoading) return <h2>loading...</h2>;

  return (
    <div>
      <p>All articles:</p>

      <ArticleCard
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        allArticles={allArticles}
        setAllArticles={setAllArticles}
      />
    </div>
  );
}
