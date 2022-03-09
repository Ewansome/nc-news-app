import { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import * as api from "../api";

export default function Coding() {
  const { topic } = useParams();
  const [topicInfo, setTopicInfo] = useState([]);

  useEffect(() => {
    api.fetchArticles(topic).then((topicData) => {
      console.log(topicData);
      setTopicInfo(topicData);
    });
  });

  console.log(topic);
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
