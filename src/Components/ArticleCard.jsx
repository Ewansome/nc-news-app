import React from "react";
import { Link } from "react-router-dom";

export default function ArticleCard(props) {
  const { allArticles } = props;
  return (
    <div>
      {allArticles.map((article) => {
        const {
          article_id,
          title,
          body,
          topic,
          author,
          votes,
          created_at,
          comment_count,
        } = article;
        return (
          <ul className="articlesList">
            <li key="articletitle" className="articleTitle">
              {title}
            </li>
            <li key="articlebody" className="body">
              {body}
            </li>
            <br></br>
            <hr></hr>
            <li key="articletopic" className="allArticlesTopic">
              Topic: {topic}
            </li>
            <li key="articleauthor" className="author">
              Author: {author}
            </li>
            <li key="articlevotes" className="votes">
              Votes: {votes}
            </li>
            <li key="articlecreated_at" className="created_at">
              Created at: {created_at}
            </li>
            <li key="articlecomments" className="comment_count">
              Comments: {comment_count}
            </li>
            <li>
              <Link to={`/articles/${article_id}`}>View full article</Link>
            </li>
          </ul>
        );
      })}
    </div>
  );
}
