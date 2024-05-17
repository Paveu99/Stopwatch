import {Button} from "../components/buttons/Button.tsx";
import '../styles/ButtonsView.scss'
interface Functions {
    onStart: () => void;
    onStop: () => void;
    onReset: () => void;
    onLap: () => void;
    isRunning: boolean;
}

export const ButtonsView = ({onStart, onStop, onReset, onLap, isRunning}: Functions) => {
    return <div className="button-layout">
        <Button color={"green"} onClick={onStart} text={"Start"}/>
        <Button color={"red"} onClick={onStop} text={"Stop"}/>
        <Button color={"blue"} disabled={!isRunning} onClick={onLap} text={"Lap"}/>
        <Button color={"black"} onClick={onReset} text={"Reset"}/>
    </div>
}