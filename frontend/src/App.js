import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

/* CSS Imports */
import './App.css';

/* Page Imports */
import Landing from 'pages/Landing';
import Login from 'pages/Login';
import Register from 'pages/Register';
import RegisterSuccess from 'pages/RegisterSuccess';
import ForgotPassword from 'pages/ForgotPassword';
import ForgotPasswordOTP from 'pages/ForgotPasswordOTP';

import Dashboard from 'pages/Dashboard';

function App() {
    return (
        <Router>
            <main className='app'>
                <Routes>
                    <Route path='/' element={<Landing />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/register/success' element={<RegisterSuccess />} />
                    <Route path='/resetpassword' element={<ForgotPassword />} />
                    <Route path='/resetpassword/:id' element={<ForgotPasswordOTP />} />
                    <Route path='/dashboard' element={<Dashboard />} />
                </Routes>
            </main>
        </Router>
    )
}

export default App;