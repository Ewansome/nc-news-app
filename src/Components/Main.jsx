import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import ArticlePage from "./ArticlePage";
import Articles from "./Articles";
import Topics from "./Topics";
import Topic from "./Topic";
import { Link } from "react-router-dom";

export default function Main() {
  const [topic, setTopic] = useState("");
  const [allArticles, setAllArticles] = useState([]);

  return (
    <div className="main">
      <div className="mainTitles">
        <h2>Click an article to read more about it...</h2>
        <h3>Select a drop down menu to search for a specific article</h3>
      </div>
      <div className="buttonContainer">
        <Link to="/topics">
          <button className="navButtons">Topics</button>
        </Link>

        <button className="navButtons">Authors</button>
        <button className="navButtons">Votes</button>
        <button className="navButtons">Date</button>
      </div>

      <Routes>
        <Route
          path="/"
          element={
            <Articles
              allArticles={allArticles}
              setAllArticles={setAllArticles}
            />
          }
        />
        <Route path={`/articles/:articleId`} element={<ArticlePage />} />
        <Route path={`/topics`} element={<Topics setTopic={setTopic} />} />
        <Route path={`/topics/:topic`} element={<Topic topic={topic} />} />
      </Routes>
    </div>
  );
}
