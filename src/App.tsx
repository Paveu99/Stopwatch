import './App.scss'
import {StopwatchView} from "./views/StopwatchView.tsx";
import {Stopwatches} from "./components/stopwatches/Stopwatches.tsx";

function App() {

  return <div className="page">
    <StopwatchView/>
    <div>
      <Stopwatches/>
    </div>
  </div>
}

export default App
