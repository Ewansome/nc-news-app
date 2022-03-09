import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import * as api from "../api";

export default function Topics(props) {
  const { setTopic } = props;
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    api.fetchArticleTopics().then((topicsData) => {
      console.log(topicsData);
      setTopics(topicsData);
    });
  }, []);

  {
    console.log(topics.slug);
  }
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
