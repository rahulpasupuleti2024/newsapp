import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./News.css";
import { signOut } from "firebase/auth";
import { data } from "./FirebaseConfig";
const News = () => {
  const [news, setNews] = useState([]);
  const [isGridView, setIsGridView] = useState(false);
  const history = useNavigate();

  useEffect(() => {
    const apiUrl =
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=c7d0971ee69f473e83aaa97af1acab2f";

    axios
      .get(apiUrl)
      .then((response) => {
        setNews(response.data.articles);
      })
      .catch((error) => {
        console.error("Error fetching news:", error);
      });
  }, []);

  const handleClick = () => {
    signOut(data).then((val) => {
      history("/");
    });
  };

  const toggleView = () => {
    setIsGridView((prev) => !prev);
  };

  return (
    <>
      <div className="hy">
        <button onClick={toggleView} className="toggle-btn">
          {isGridView ? "Switch to List View" : "Switch to Grid View"}{" "}
        </button>
        <button className="btn" onClick={handleClick}>
          SingnOut
        </button>
      </div>
      <div
        className={`news-container ${isGridView ? "grid-view" : "list-view"}`}
      >
        {news.map((article) => (
          <div key={article.title} className="news-item">
            <img src={article.urlToImage} alt={article.title} />
            <div className="news-details">
              <h2>{article.title.slice(0, 10)}</h2>
              <span>❤️</span>
              <a href={article.url} target="_blank" rel="noopener noreferrer">
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default News;
