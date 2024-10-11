import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './output.css';
// import Index from './page/Index';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
