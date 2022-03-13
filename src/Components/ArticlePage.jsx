import { useEffect, useState } from "react";
import * as api from "../api";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import Liker from "./Liker";

export default function ArticlePage(props) {
  const { articleId } = useParams();
  const [article, setArticle] = useState([]);
  const { isLoading, setIsLoading, error, setError } = props;

  useEffect(() => {
    setIsLoading(true);
    api
      .fetchArticleId(articleId)
      .then((articleData) => {
        setArticle(articleData);
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
  }, [articleId, setIsLoading, setError]);

  if (isLoading) return <h2>loading...</h2>;
  if (error) return <ErrorPage status={error.status} msg={error.msg} />;
  return (
    <div>
      <button className="homepageButton">
        <Link to="/">Homepage</Link>
      </button>
      <ul className="articlesList">
        <li className="articleTitle">{article.title}</li>
        <li>{article.body}</li>
        <br></br>
        <hr></hr>
        <li>Topic: {article.topic}</li>
        <li>Author: {article.author}</li>

        <li>created at: {article.created_at}</li>
        <li>Comment count: {article.comment_count}</li>
        <Link to={`/articles/${articleId}/comments`}>
          <li>Click to view comments...</li>
        </Link>
        <Liker votes={article.votes} articleId={article.article_id} />
      </ul>
    </div>
  );
}
