import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import * as api from "../api";

export default function Topics(props) {
  const { setTopic, isLoading, setIsLoading } = props;
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    api.fetchArticleTopics().then((topicsData) => {
      setTopics(topicsData);
      setIsLoading(false);
    });
  }, [setIsLoading]);

  if (isLoading) return <h2>loading...</h2>;
  return (
    <div>
      <Link to="/">Homepage</Link>
      {topics.map((topic) => {
        const { slug, description } = topic;
        return (
          <div>
            <div>
              <Link to={`/topics/${topic.slug}`}>
                <button
                  className="topicsButtons"
                  onClick={() => setTopic(slug)}
                >
                  {slug}
                </button>
              </Link>
            </div>
            <div>
              <p>{description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
