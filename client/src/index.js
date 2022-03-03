import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { AuthProvider } from "./context/AuthContext";


ReactDOM.render(
  <div className='entire-page'>
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
  </div>,
  document.getElementById('root')
);


