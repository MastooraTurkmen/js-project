import React from 'react';
import { createRoot } from 'react-dom/client';
import 'normalize.css'
import './index.css';
import App from './App';

const root = createRoot(document.getElementById('root'));
root.render(<App tab="home" />);