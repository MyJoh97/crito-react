import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const NewsDetails = () => {
  const { articleId } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    fetch(`https://win23-assignment.azurewebsites.net/api/articles/${articleId}`)
      .then((response) => response.json())
      .then((data) => setArticle(data))
      .catch((error) => console.error('Error fetching article details:', error));
  }, [articleId]);

  if (!article) {
    return <div>Something went wrong.</div>;
  }


  return (
    <div>
      <h2>{article.title}</h2>
      <img src={article.imageSrc} alt={`Image for ${article.title}`} />
      <p>{article.content}</p>
    </div>
  );
};

export default NewsDetails;