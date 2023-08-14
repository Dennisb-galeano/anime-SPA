import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom';

import './styles.css';
import { AnimeApp } from './AnimeApp.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AnimeApp/>
    </BrowserRouter>
  </React.StrictMode>,
);




/*orden de las importaciones:
  1. React
  2. importaciones de terceros, como react Router... etc
  3. mis importaciones 

*/