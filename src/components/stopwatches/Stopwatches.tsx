import {useEffect, useRef, useState} from "react";
import '../../styles/StopwatchView.scss';
import {ButtonsView} from "../../views/ButtonsView.tsx";

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
        if (isRunning) {
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

    return <>
        <header className="upper-stopwatch">
            <section className="smaller-stopwatch left">
                <div style={{backgroundColor:"#3B6A77FF", height: "100%" ,borderTopLeftRadius: "20px",borderBottomLeftRadius: "1px" }}></div>
                <div style={{backgroundColor:"#3B6A77FF", height: "100%"}}></div>
                <div style={{backgroundColor:"#3B6A77FF", height: "100%"}}></div>
                <div style={{backgroundColor:"#3B6A77FF", height: "100%"}}></div>
            </section>
            <section className="smaller-stopwatch">
            <div>{time(elapsedTimeMain)}</div>
            </section>
        </header>
        <div className="bigger-stopwatch">
            <div className="display">{time(elapsedTimeLap)}</div>
        </div>
        <footer className="buttons">
            <ButtonsView isRunning={isRunning} onStart={startClock} onStop={stopClock} onReset={resetClock} onLap={lapClock}/>
        </footer>
    </>
}