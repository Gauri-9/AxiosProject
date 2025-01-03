import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import axios from 'axios';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import Blogs from "./Pages/Blogs";
import Contact from "./Pages/Contact";
import NoPage from "./Pages/NoContact";

export default function App() {
  const [quotes, setQuotes] = useState([]); // State to store the fetched quotes
  const [loading, setLoading] = useState(true); // State to handle loading state
  const [error, setError] = useState(null); // State to handle errors

  useEffect(() => {
    // Fetch data from the API when the component mounts
    axios.get('https://dummyjson.com/quotes')
      .then(function (response) {
        setQuotes(response.data.quotes); // Store the fetched quotes in state
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch(function (error) {
        setError("There was an error fetching the quotes!"); // Handle errors
        setLoading(false); // Set loading to false even if there's an error
        console.error(error);
      });
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>

      {/* Display the fetched quotes or error */}
      <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
        <h1>Fetched Quotes</h1>
        {loading ? (
          <p>Loading quotes...</p>
        ) : error ? (
          <p style={{ color: 'red' }}>{error}</p>
        ) : (
          <ul>
            {quotes.map((quote) => (
              <li key={quote.id}>
                <blockquote>
                  "{quote.quote}" - <strong>{quote.author}</strong>
                </blockquote>
              </li>
            ))}
          </ul>
        )}
      </div>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);