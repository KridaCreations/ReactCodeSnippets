import React, { useContext } from "react";
import { ThemeContext } from "../App";

function First()
{
    const theme = useContext(ThemeContext);
    return (
        <div>
            {theme}
        </div>
    )
}

export default First;


