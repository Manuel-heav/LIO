import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import App from './App';
import Login from './components/Login';
import Register from './components/Register';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App />}/>
    <Route path="/login" element={<Login />}/>
    <Route path="/register" element={<Register />}/>
  </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);


reportWebVitals();