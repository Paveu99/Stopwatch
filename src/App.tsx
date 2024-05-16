import './App.scss'
import {StopwatchView} from "./views/StopwatchView.tsx";

function App() {

  return <div className="page">
    <StopwatchView/>
    <div>LOGS</div>
    <LeaderBoard laps={laps}/>
  </div>
}

export default App
