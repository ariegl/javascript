import { useState } from "react";

function Count(){

    const [counter, setCounter] = useState(0);

    return (
        <>
            <h1>Count: {counter} clicks</h1>
            <button onClick={() => { setCounter(counter + 1) }}>CLICK ME!</button>
            <button onClick={() => { setCounter(0)}}>Reset</button>
        </>    
    )
}

export default Count;