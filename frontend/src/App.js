// frontend/src/App.js

import React, { useEffect, useState } from "react";
import "./App.css";
import UrlForm from "./components/UrlForm";
import UrlList from "./components/UrlList";

const App = () => {
  const [urls, setUrls] = useState([]);

  useEffect(() => {
    const fetchUrls = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/urls");
        const data = await response.json();
        setUrls(data);
      } catch (error) {
        console.error("Error fetching URLs:", error);
      }
    };

    fetchUrls();
  }, []);

  return (
    <div className="App">
      <header>
        <h1>URL Shortener</h1>
      </header>
      <main>
        <UrlForm setUrls={setUrls} />
        <UrlList urls={urls} />
      </main>
      <footer>
        <div className="container">
          <p>&copy; 2024 Dharun Kumar T. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
