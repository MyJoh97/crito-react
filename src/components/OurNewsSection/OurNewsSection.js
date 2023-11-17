import React, { useState, useEffect } from 'react';
import ArticleBoxes from '../Assets/ArticleBoxes';
import SmallNumberBoxes from '../Assets/SmallNumberBoxes';
import { useNavigate } from 'react-router-dom';

const OurNewsSection = () => {
  const [articles, setArticles] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch data from the API
    fetch('https://win23-assignment.azurewebsites.net/api/articles')
      .then((response) => response.json())
      .then((data) => setArticles(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const handleArticleClick = (articleId) => {
    navigate(`/NewsDetails/${articleId}`);
  };

  const getImageStyles = (articleId) => {
    if (articleId === '1') {
      return { width: '100%', height: '300px' };
    }
    return {}; 
  };

  return (
    <div className="news-and-articles">
      <div className="container">
        <div className="news-title">
          <h3>Our News & Articles</h3>
        </div>
        <div className="articles">
          {articles.map((article) => (
            <ArticleBoxes
              key={article.id}
              selection={article.id}
              title={article.title}
              imageSrc={article.imageUrl}
              section={article.category}
              text={article.content}
              onClick={() => handleArticleClick(article.id)}
              imageStyle={getImageStyles(article.id)}
            />
          ))}
        </div>
        <div className="number-box">
          <SmallNumberBoxes text="<" />
          <SmallNumberBoxes color="black-box" text="1" />
          <SmallNumberBoxes text="2" />
          <SmallNumberBoxes text="3" />
          <SmallNumberBoxes text="..." />
          <SmallNumberBoxes text="9" />
          <SmallNumberBoxes text=">" />
        </div>
      </div>
    </div>
  );
};

export default OurNewsSection;