import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { AuthProvider } from './context/AuthContext';
import { BrowserRouter } from 'react-router-dom'



ReactDOM.render(
  <div className='entire-page'>
  <React.StrictMode>
  <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
  </div>,
  document.getElementById('root')
);


