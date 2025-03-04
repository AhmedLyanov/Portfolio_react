
   import React from 'react';
   import ReactDOM from 'react-dom/client';
   import Section from './components/sectionTop/section';
   import Header from './components/header/header';

   const root = ReactDOM.createRoot(document.getElementById('root'));
   root.render(
     <React.StrictMode>
       <Header />
       <Section />
     </React.StrictMode>
   );