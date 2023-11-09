import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Home from './views/Home';
import News from './views/News';
import Contacts from './views/Contacts';
import NotFound from './views/NotFound';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Contacts' element={<Contacts />} />
        <Route path='/News' element={<News />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    <App />
  </React.StrictMode>
);


