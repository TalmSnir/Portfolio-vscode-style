import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import DataContext from './context/DataContext';
import { BrowserRouter } from 'react-router-dom';
import SiteTheme from './SiteTheme';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <DataContext>
        <SiteTheme>
          <App />
        </SiteTheme>
      </DataContext>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
