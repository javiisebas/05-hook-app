import React, { useEffect, useState } from 'react'
import AppRouter from './AppRouter'
import UserContext from './UserContext'

const MainApp = () => {

    const [user, setUser] = useState({});

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem('user') || []))
    }, []);

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(user))
    }, [user]);


    return (
        <UserContext.Provider value={{ user, setUser }}>
            <AppRouter />
        </UserContext.Provider>
    )
}

export default MainApp
