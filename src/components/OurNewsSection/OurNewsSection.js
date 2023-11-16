import React, { useState, useEffect } from 'react';
import ArticleBoxes from '../Assets/ArticleBoxes';
import SmallNumberBoxes from '../Assets/SmallNumberBoxes';
import { useNavigate } from 'react-router-dom';
import NewsImage1 from '../../images/news-1.png';
import NewsImage2 from '../../images/news-2.png';
import NewsImage3 from '../../images/news-3.png';
import NewsImage4 from '../../images/news-4.png';
import NewsImage5 from '../../images/news-5.png';
import NewsImage6 from '../../images/news-6.png';
import NewsImage7 from '../../images/news-7.png';
import NewsImage8 from '../../images/news-8.png';
import NewsImage9 from '../../images/news-9.png';

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
    // Navigate to NewsDetails component with the selected article's ID
    navigate(`/NewsDetails/${articleId}`);
  };

  const getImageForArticle = (articleId) => {
    switch (articleId) {
      case '1':
        return NewsImage1;
      case '2':
        return NewsImage2;
        case '3':
          return NewsImage3;
        case '4':
          return NewsImage4;
          case '5':
        return NewsImage5;
      case '6':
        return NewsImage6;
        case '7':
        return NewsImage7;
        case '8':
        return NewsImage8;
        case '9':
        return NewsImage9;
      default:
        return null; 
    }
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
              // day={article.day}
              // month={article.month}
              section={article.category}
              text={article.content}
              onClick={() => handleArticleClick(article.id)}
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