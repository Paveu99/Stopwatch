import './App.scss'
import {StopwatchView} from "./views/StopwatchView.tsx";
import {useState} from "react";
import {LeaderBoard} from "./views/LeaderBoard.tsx";

function App() {

  const [laps, setLaps] = useState<string[]>([]);

  function addLap(lapsFromChild: string[]) {
    setLaps(lapsFromChild)
  }

  return <div className="page">
    <StopwatchView addLap={addLap}/>
    <LeaderBoard laps={laps}/>
  </div>
}

export default App
