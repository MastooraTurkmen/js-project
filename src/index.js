import React from 'react';
import { createRoot } from 'react-dom/client';
import 'normalize.css'
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);