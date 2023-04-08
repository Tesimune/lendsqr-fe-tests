import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './style/css/index.css';
import './style/css/style.css';
import App from './pages/App';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import User from './pages/User';
import NotFound from './pages/NotFound';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <div className='font-primary text-dark'>
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
            <Route index element={<App />} />
            <Route path="login" element={<Login />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="user/:id" element={<User />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </div>
);

