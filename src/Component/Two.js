import React from 'react';
import ThemeContext from "../Context/ThemeContext.js";
function Two(props) {
    return (
        <div>
            <ThemeContext.Consumer>
                {({theme}) => <>
                    <h2 style={{ color: theme ? 'blue' : 'black' }}>Hi From Two</h2>
                    <p>theme : {theme}</p>
                </>
                }
            </ThemeContext.Consumer>
        </div>
    )
}
export default Two;