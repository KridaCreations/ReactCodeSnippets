import usetoggle from "./hooks/usertoggle";


function Toggleuse()
{
    const [state,toggle] = usetoggle(true);

    return (
        <div>
            state is {state?"ON":"OFF"}
            <button onClick={toggle}>
                click me to swith the toggle state
            </button>
        </div>
    )
}

export default Toggleuse;