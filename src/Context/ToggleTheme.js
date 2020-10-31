import React , {useContext} from "react";
import ThemeContext from "../Context/ThemeContext.js";

export default function ToggleTheme () {
    const themeContext = useContext(ThemeContext);
    return (
        <button onClick={themeContext.toggleTheme}>
            Toggle
        </button>
    );
}