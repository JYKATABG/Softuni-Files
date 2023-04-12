import { useEffect, useState } from "react";

export default function Timer(props) {
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);

    let timer;
    useEffect(() => {
        timer = setInterval(() => {
            setSeconds(seconds + 1);

            if (seconds == 59) {
                setMinutes(minutes + 1);
                setSeconds(0);
            }
        }, 1000)
        return () => clearInterval(timer);
    });

    const stop = () => {
        clearInterval(timer);
    }

    const restart = () => {
        setMinutes(0);
        setSeconds(0);
    }


    return (
        <div>
            <h3>Timer</h3>
            Time: {minutes < 10 ? "0" + minutes : minutes}:{seconds < 10 ? "0" + seconds : seconds}
            <button onClick={stop}>Stop</button>
            <button onClick={restart}>Reset</button>
        </div>
    );
};