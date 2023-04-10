import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from '../pages/main';
import FavouritePage from '../pages/Favourite';
import PersonalPage from '../pages/Profile';
import LoginPage from '../pages/Auth/Login';
import SignupPage from '../pages/Auth/Signup';
import Header from '../widgets/Header/HeaderContent';

const App = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/main" element={<MainPage />} />
                <Route path="/" element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/profile" element={<PersonalPage />} />
                <Route path="/favourite" element={<FavouritePage />} />
            </Routes>
        </>
    );
};

export default App;
