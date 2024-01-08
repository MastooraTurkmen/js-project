import React from 'react';
import { createRoot } from 'react-dom/client';
import 'normalize.css'
import './index.css';
import App from './App';
import { store } from './pages/store';

const root = createRoot(document.getElementById('root'));
root.render(<App tab="home" />);