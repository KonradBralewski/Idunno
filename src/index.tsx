import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from "./App"
import AppContext from './Context/IdunnoContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <AppContext subComponents={<App />}/>
);
