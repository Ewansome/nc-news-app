import React from "react";
import { useEffect } from "react";
import ArticleCard from "./ArticleCard";
import * as api from "../api";
import { Link } from "react-router-dom";
import OrderBy from "./OrderBy";

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
    <>
      <h3>Link to topics page:</h3>
      <div className="categoryButtons">
        <Link to="/topics">
          <button className="navButtons">Topics</button>
        </Link>
      </div>
      <OrderBy allArticles={allArticles} setAllArticles={setAllArticles} />
      <hr></hr>
      <h2>Click an article to read more about it...</h2>
      <h2>All articles:</h2>

      <ArticleCard
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        allArticles={allArticles}
        setAllArticles={setAllArticles}
      />
    </>
  );
}
