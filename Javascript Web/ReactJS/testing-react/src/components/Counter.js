import { useState } from "react";

export default function Counter({props}) {
    const [count, setCount] = useState(() => {
        console.log("run state");
        return props.start
    });

    function decreaseNum() {
        if (count > 1) {
            setCount(state => state - 1);
        }
    }

    function increaseNum() {
        if (count < 10) {
            setCount(state => state + 1);
        }
    }

    return (
        <div>
            <h2>SoftUni Counter</h2>
            <button onClick={decreaseNum}>-</button>
            <span>{count}</span>
            <button onClick={increaseNum}>+</button>
        </div>
    )
}