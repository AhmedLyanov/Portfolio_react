
   import React from 'react';
   import ReactDOM from 'react-dom/client';
   import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
   import CoverPage from './pages/coverPage'; 
   import LogoPage from './pages/logoPage'; 

   const root = ReactDOM.createRoot(document.getElementById('root'));
   root.render(
     <React.StrictMode>
       <Router>
         <Routes>
           <Route path="/" element={<CoverPage />} />
           <Route path="/logo" element={<LogoPage />} />
         </Routes>
       </Router>
     </React.StrictMode>
   );