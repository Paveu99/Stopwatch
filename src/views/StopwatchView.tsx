import '../styles/StopwatchView.scss'
import {Stopwatches} from "../components/stopwatches/Stopwatches.tsx";

interface Props {
    addLap: (lapsFromChild: string[]) => void;
}

export const StopwatchView = ({addLap}: Props) => {
    return <div className="main_view">
        <Stopwatches addLap={addLap}/>
    </div>
}