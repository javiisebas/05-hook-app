import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import AboutScreen from './AboutScreen';
import HomeScreen from './HomeScreen';
import LoginScreen from './LoginScreen';
import NavBar from './NavBar';

const AppRouter = () => {
    return (
        <BrowserRouter>

            <NavBar />

            <div className="container py-4">
                <Routes>
                    <Route path='/' element={<HomeScreen />} />
                    <Route path='/about' element={<AboutScreen />} />
                    <Route path='/login' element={<LoginScreen />} />
                    <Route element={<HomeScreen />} />
                </Routes>
            </div>

        </BrowserRouter>
    )
}

export default AppRouter