import axios from "axios";

export function fetchArticles(topic) {
  return axios
    .get(`https://nc-news-example-seminar-3-20.herokuapp.com/api/articles`, {
      params: {
        topic: topic,
      },
    })
    .then((res) => {
      return res.data;
    })
    .then(({ articles }) => {
      return articles;
    });
}

export function fetchArticleId(article_id) {
  return fetch(
    `https://nc-news-example-seminar-3-20.herokuapp.com/api/articles/${article_id}`
  )
    .then((res) => {
      return res.json();
    })
    .then((body) => {
      return body.article;
    });
}

export function fetchArticleTopics() {
  return fetch(
    `https://nc-news-example-seminar-3-20.herokuapp.com/api/topics
  `
  )
    .then((res) => {
      return res.json();
    })
    .then(({ topics }) => {
      return topics;
    });
}

export function fetchArticleComments(article_id) {
  return fetch(
    `
    https://nc-news-example-seminar-3-20.herokuapp.com/api/articles/${article_id}/comments
    `
  )
    .then((res) => {
      return res.json();
    })
    .then(({ comments }) => {
      return comments;
    });
}

export function patchArticles(articleId, votes) {
  return axios.patch(
    `https://nc-news-example-seminar-3-20.herokuapp.com/api/articles/${articleId}`,
    { inc_votes: votes }
  );
}

export function postComment(articleId, comment) {
  return axios.post(
    `
    https://nc-news-example-seminar-3-20.herokuapp.com/api/articles/${articleId}/comments`,
    comment
  );
}

export function deleteComment(comment_id) {
  return axios.delete(
    `
    https://nc-news-example-seminar-3-20.herokuapp.com/api/comments/${comment_id}
    `
  );
}
