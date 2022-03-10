import { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import * as api from "../api";
import ErrorPage from "./ErrorPage";

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
      <Link to="/">Homepage</Link>
      {topicInfo.map((info) => {
        const { title, author, topic, body, votes, created_at, comment_count } =
          info;

        return (
          <ul className="articlesList">
            <li className="articleTitle">{title}</li>
            <li>{body}</li>
            <hr></hr>
            <li>{author}</li>
            <li>{topic}</li>
            <li>{votes}</li>
            <li>{created_at}</li>
            <li>{comment_count}</li>
          </ul>
        );
      })}
    </div>
  );
}
