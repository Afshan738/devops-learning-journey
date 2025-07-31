import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api/quotes";

function App() {
  const [quoteData, setQuoteData] = useState({ quote: 'Loading your daily inspiration...', author: '' });
  const [isLoading, setIsLoading] = useState(true);

  const fetchQuote = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(API_URL);
      setQuoteData(response.data);
    } catch (error) {
      setQuoteData({ quote: 'Failed to fetch quote. Is the backend server running?', author: 'Error' });
      console.error("Error fetching quote:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <main className="container">
      <div className={`quote-card ${isLoading ? 'loading' : ''}`}>
        <h1 className="title">Quote of the Day</h1>
        <blockquote className="quote-content">
          <p className="quote-text">{quoteData.quote}</p>
          <cite className="quote-author">{quoteData.author}</cite>
        </blockquote>
        <button onClick={fetchQuote} disabled={isLoading}>
          {isLoading ? 'Loading...' : 'New Quote'}
        </button>
      </div>
       <p className="tagline">Afshan Qasim's Docker Practice</p>
    </main>
  );
}

export default App;