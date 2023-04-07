import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from '../pages/main';
import Header from '../widgets/Header/HeaderContent';
const App = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<MainPage />} />
            </Routes>
        </>
    );
};

export default App;
