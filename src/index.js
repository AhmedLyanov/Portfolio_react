import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/header/header';
import Hero from './components/main/main';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Hero />
  </React.StrictMode>
);
