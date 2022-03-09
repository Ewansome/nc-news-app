import axios from "axios";

export function fetchArticles(topic) {
  return axios
    .get(`https://nc-news-example-seminar-3-20.herokuapp.com/api/articles`, {
      params: {
        topic: topic,
      },
    })
    .then((res) => {
      console.log(res.data);
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