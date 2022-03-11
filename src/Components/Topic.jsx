import { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import * as api from "../api";
import ErrorPage from "./ErrorPage";
import Liker from "./Liker";

export default function Coding(props) {
  const { topic } = useParams();
  const [topicInfo, setTopicInfo] = useState([]);
  const { isLoading, setIsLoading, error, setError } = props;

  useEffect(() => {
    setIsLoading(true);
    api
      .fetchArticles(topic)
      .then((topicData) => {
        setTopicInfo(topicData);
        setIsLoading(false);
        setError(null);
      })
      .catch(
        ({
          response: {
            data: { msg },
            status,
          },
        }) => {
          setError({ msg, status });
          setIsLoading(false);
        }
      );
  }, [topic, setIsLoading, setError]);

  if (isLoading) return <h2>loading...</h2>;
  if (error) return <ErrorPage status={error.status} msg={error.msg} />;

  return (
    <div>
      <div className="topicPageButtons">
        <button className="homepageButton">
          <Link to="/">Homepage</Link>
        </button>
        <button className="topicsButton">
          <Link to="/topics">Topics</Link>
        </button>
      </div>

      <h1>{topic} articles</h1>

      {topicInfo.map((info) => {
        const {
          title,
          author,
          topic,
          body,
          votes,
          created_at,
          comment_count,
          article_id,
        } = info;

        return (
          <>
            <ul className="articlesList">
              <li className="articleTitle">{title}</li>
              <li>{body}</li>
              <hr></hr>
              <li>Author: {author}</li>
              <li>Topic: {topic}</li>
              <li>Date: {created_at}</li>
              <li>Comments: {comment_count}</li>
              <Link to={`/articles/${article_id}`}>View full article</Link>
              <Liker votes={votes} article_id={article_id} />
            </ul>
          </>
        );
      })}
    </div>
  );
}
