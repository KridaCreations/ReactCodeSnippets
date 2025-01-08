import { useState } from "react"


function usetoggle(initialstate)
{
    const [state,setstate] = useState(initialstate);
    let toggle = () => {
        setstate(!state);
    };
    return [state,toggle];
}

export default usetoggle;