// frontend/src/components/UrlList.js

import React from "react";

const UrlList = ({ urls }) => {
  return (
    <div>
      <h2>Shortened URLs</h2>
      <ul>
        {urls.map((url) => (
          <li key={url._id}>
            <a
              href={`http://localhost:5000/${url.shortUrl}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {url.longUrl}
            </a>{" "}
            - <span>{`http://localhost:5000/${url.shortUrl}`}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UrlList;
