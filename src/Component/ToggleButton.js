import React from 'react';
import Two from "../Component/Two.js"
function ToggleButton(props){
    return (
        <div>
            <button onClick={props.toggleTheme}>
                Toggle
            </button>
        </div>
    )
}
export default ToggleButton;