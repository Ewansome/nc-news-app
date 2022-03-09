import { useEffect, useState } from "react";
import * as api from "../api";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function ArticlePage() {
  const { articleId } = useParams();
  const [article, setArticle] = useState([]);

  useEffect(() => {
    api.fetchArticleId(articleId).then((articleData) => {
      setArticle(articleData);
    });
  }, [articleId]);

  return (
    <div>
      <Link to="/">Homepage</Link>
      <ul className="articlesList">
        <li className="articleTitle">{article.title}</li>
        <li>{article.body}</li>
        <br></br>
        <hr></hr>
        <li>{article.topic}</li>
        <li>{article.author}</li>
        <li>{article.votes}</li>
        <li>{article.created_at}</li>
        <li>{article.comment_count}</li>
      </ul>
    </div>
  );
}
