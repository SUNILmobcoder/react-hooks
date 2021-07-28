import React, { useState } from 'react';
import ClassContextComponent from './components/classContextComponent';
import FunctionContextComponets from './components/functionContextComponets';

export const ThemeContext = React.createContext();

export default function MainContext() {
    const [darkTheme, setDarkTheme] = useState(true);
    const toggleTheme = () => {
        setDarkTheme( prevTheme => !prevTheme);
    }
    return (
        <>
        <ThemeContext.Provider value={darkTheme}>
            <button onClick={ toggleTheme} >Toggle Theme</button>
            <FunctionContextComponets />
            <ClassContextComponent />
        </ThemeContext.Provider>
        </>
    )
}