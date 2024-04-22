
import React from 'react';
import { render } from 'react-dom'; // <- This is the correct import // statement for React version 17
import './index.css';
import App from './App';
// import { BrowserRouter } from "react-router-dom";
const root = document.getElementById('root') // createRoot(container!) if you use TypeScript
render(
    <React.StrictMode>
      <App />
    </React.StrictMode>, root);