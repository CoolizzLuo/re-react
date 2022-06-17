import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import FetchChallenge from './ch15-challenge-fetch/FetchChallenge';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FetchChallenge />
  </React.StrictMode>
);

