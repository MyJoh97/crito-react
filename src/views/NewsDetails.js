import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const NewsDetails = () => {
  const { articleId } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    // Fetch data for the specific article using the provided articleId
    fetch(`https://win23-assignment.azurewebsites.net/api/articles/${articleId}`)
      .then((response) => response.json())
      .then((data) => setArticle(data))
      .catch((error) => console.error('Error fetching article details:', error));
  }, [articleId]);

  if (!article) {
    return <div>Loading...</div>; // You can add a loading indicator
  }

  // Render detailed information about the article
  return (
    <div>
      <h2>{article.title}</h2>
      <img src={article.imageSrc} alt={`Image for ${article.title}`} />
      <p>{article.content}</p>
      {/* Display other details as needed */}
    </div>
  );
};

export default NewsDetails;