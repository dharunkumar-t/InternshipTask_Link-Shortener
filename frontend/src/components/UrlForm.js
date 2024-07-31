// frontend/src/components/UrlForm.js

import axios from "axios";
import React, { useState } from "react";

const UrlForm = ({ setUrls }) => {
  const [longUrl, setLongUrl] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/urls", {
        longUrl,
      });
      setUrls((prevUrls) => [...prevUrls, response.data]);
      setLongUrl("");
    } catch (error) {
      console.error("Error shortening URL:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={longUrl}
        onChange={(e) => setLongUrl(e.target.value)}
        placeholder="Enter long URL"
        required
      />
      <button type="submit">Shorten</button>
    </form>
  );
};

export default UrlForm;
