import React from "react";
import { useState, useEffect } from "react";
import Newsitem from "./Newsitem";

const Newsboard = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${
      import.meta.env.VITE_API_KEY
    }`;
    console.log(url);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setArticles(data.articles);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className=" bg-dark text-light full-width">
      <h2 className="text-center py-4">Latest News</h2>
      <div className="container flex-wrap justify-content-center gap-3 flex-row d-flex">
      {articles.map((article, index) => {
        return <Newsitem key={index} title={article.title} description={article.description} src={article.urlToImage} newsUrl={article.url} />;
      })}
      </div>
    </div>
  );
};

export default Newsboard;
