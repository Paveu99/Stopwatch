import {useEffect, useRef, useState} from "react";

// interface Props {
//     lap: (time: string) => void
// }

export const Stopwatches = () => {
    const startRefMain = useRef<number>(0);
    const intervalRefMain = useRef<number | undefined>(undefined);
    const startRefLap = useRef<number>(0);
    const intervalRefLap = useRef<number | undefined>(undefined);
    const [isRunning, setIsRunning] = useState<boolean>(false);
    const [elapsedTimeMain, setElapsedTimeMain] = useState<number>(0);
    const [elapsedTimeLap, setElapsedTimeLap] = useState<number>(0);

    function startClock() {
        setIsRunning(true);
        startRefMain.current = Date.now() - elapsedTimeMain;
        startRefLap.current = Date.now() - elapsedTimeLap;
    }

    function stopClock() {
        setIsRunning(false);
    }

    function lapClock() {
        if (isRunning) {
            console.log(time(elapsedTimeLap))
            setElapsedTimeLap(0);
            startRefLap.current = Date.now();
        }
    }

    function resetClock() {
        setElapsedTimeMain(0);
        setElapsedTimeLap(0);
        setIsRunning(false);
    }

    useEffect(() => {
        if(isRunning) {
            intervalRefMain.current = setInterval(() => {
                setElapsedTimeMain(Date.now() - startRefMain.current)
            }, 10)
            intervalRefLap.current = setInterval(() => {
                setElapsedTimeLap(Date.now() - startRefLap.current)
            }, 10)
        }

        return () => {
            clearInterval(intervalRefMain.current)
            clearInterval(intervalRefLap.current)
        }
    }, [isRunning]);

    const time = (elapsedTime: number) => {
        let minutes: number | string = Math.floor((elapsedTime / (1000 * 60)) % 60);
        let seconds: number | string = Math.floor((elapsedTime / 1000) % 60);
        let milliseconds: number | string = Math.floor((elapsedTime % 1000) / 10);

        minutes = String(minutes).padStart(2, '0');
        seconds = String(seconds).padStart(2, '0');
        milliseconds = String(milliseconds).padStart(2, '0');

        return `${minutes}:${seconds}:${milliseconds}`;
    };

    return (
        <div className="stopwatches">
            <button onClick={startClock}>Start</button>
            <button onClick={stopClock}>Stop</button>
            <button onClick={lapClock} disabled={!isRunning}>Lap</button>
            <button onClick={resetClock}>Reset</button>
            <div className="display">{time(elapsedTimeMain)}</div>
            <div className="display">{time(elapsedTimeLap)}</div>
        </div>
    );
}