import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import { HashRouter } from 'react-router-dom';
import { unstable_HistoryRouter } from 'react-router-dom';
import { MemoryRouter } from 'react-router-dom';
import {StaticRouter} from 'react-router-dom/server'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* This component is going to provide bunch of information related routing to all other 
      components in our application which will work seamlessly.*/}
    <BrowserRouter>
      <App />
    </BrowserRouter>
    
  </React.StrictMode>
);

