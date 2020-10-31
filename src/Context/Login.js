import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';

export default function Login() {
    const theme = useContext(ThemeContext);
    let style = {} ;
    if(theme.theme=== 'dark'){
        style = {
            background : 'blue' ,
            color: 'black' , 
        }
    }
    else{
        style = {
            background : 'white' , 
            color : 'blue' , 
        }
    }
    return <div style={{style}}>
        Login
        <hr>
        </hr>
    </div>
}