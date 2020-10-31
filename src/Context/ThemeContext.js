import React, { useState } from "react";
import { useSelector } from "react-redux";

export const ThemeContext = React.createContext({
    'theme' : 'dark' , 
    toggleTheme : () => {}  ,
});

export function ThemeProvider(props){
    const [theme , setTheme] = useState('dark');
    function toggleTheme () {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    }
    return <ThemeContext.Provider value={{theme, setTheme , toggleTheme}}>
        {props.children}
    </ThemeContext.Provider>
}
export default ThemeContext;