import { useState } from "react";

export default function Counter(props) {
    const [counter, setCounter] = useState(0);

    const incrementCounterHandler = () => {
        setCounter(oldCounter => oldCounter + 1);
    };

    const decrementCounterHandler = () => {
        setCounter(oldCounter => oldCounter - 1);
    }

    const resetCounterHanlder = () => {
        setCounter(0);
    }

    return (
        <div>
            <h3>Counter: {counter}</h3>
            <button onClick={incrementCounterHandler}>+</button>
            <button onClick={resetCounterHanlder}>0</button>
            <button onClick={decrementCounterHandler}>-</button>
        </div>
    );
};