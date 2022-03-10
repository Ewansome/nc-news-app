import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import ArticlePage from "./ArticlePage";
import Articles from "./Articles";
import Topics from "./Topics";
import Topic from "./Topic";
import ErrorPage from "./ErrorPage";
import { Link } from "react-router-dom";
import OrderBy from "./OrderBy";
import Comments from "./Comments";

export default function Main() {
  const [topic, setTopic] = useState("");
  const [allArticles, setAllArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  return (
    <div className="main">
      <div className="mainTitles"></div>
      <h3>Link to topics page:</h3>
      <div className="buttonContainer">
        <Link to="/topics">
          <button className="navButtons">Topics</button>
        </Link>
      </div>
      <OrderBy allArticles={allArticles} setAllArticles={setAllArticles} />
      <hr></hr>
      <h2>Click an article to read more about it...</h2>

      <Routes>
        <Route
          path="/"
          element={
            <Articles
              error={error}
              setError={setError}
              isLoading={isLoading}
              setIsLoading={setIsLoading}
              allArticles={allArticles}
              setAllArticles={setAllArticles}
            />
          }
        />
        <Route
          path={`/articles/:articleId`}
          element={
            <ArticlePage
              error={error}
              setError={setError}
              isLoading={isLoading}
              setIsLoading={setIsLoading}
            />
          }
        />
        <Route
          path={`/topics`}
          element={
            <Topics
              setTopic={setTopic}
              isLoading={isLoading}
              setIsLoading={setIsLoading}
            />
          }
        />
        <Route
          path={`/topics/:topic`}
          element={
            <Topic
              error={error}
              setError={setError}
              topic={topic}
              isLoading={isLoading}
              setIsLoading={setIsLoading}
            />
          }
        />
        <Route path={`/articles/:articleId/comments`} element={<Comments />} />
        <Route path={`*`} element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

//put error and loading state on each child component for rendering purposes
