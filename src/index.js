import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Sara from './sara';
import Sara1 from './sara1';
import GotoPage from './gotoPage';


import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>

  <BrowserRouter>
  <Routes>
      <Route path="/" element={<App />}/>
      <Route path = "/sara" element={<Sara />} />
      <Route path="/sara1" element={<Sara1 />} />
      <Route path="/gotoPage" element={<GotoPage />} />

    
  </Routes>
</BrowserRouter>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
