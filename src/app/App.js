import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from '../pages/main';
import LoginPage from '../pages/Login';
import SignupPage from '../pages/Signup';
import Header from '../widgets/Header/HeaderContent';
import 'bootstrap/dist/css/bootstrap.min.css';
const App = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/main" element={<MainPage />} />
                <Route path="/" element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />} />
            </Routes>
        </>
    );
};

export default App;
