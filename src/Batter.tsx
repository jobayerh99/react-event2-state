import { useState } from "react"

export default function Batter(){

    const [run, newRun] = useState(0)

    const increaseRun = () =>{
        newRun(run +1);
    }

    const increaseRun4 = () =>{
        newRun(run + 4);
    }

    const increaseRun6 = () =>{
        newRun(run + 6);
    }

    return(
        <div>
            <h3>Score Board</h3>
            <p>Total Score: {run}</p>
            <button onClick={increaseRun}>Add 1</button>
            <button onClick={increaseRun4}>Add 4</button>
            <button onClick={increaseRun6}>Add 6</button>
        </div>
    )
}