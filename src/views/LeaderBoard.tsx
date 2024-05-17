import {Table} from "./Table.tsx";
import '../styles/LeaderBoard.scss'

interface Props {
    laps: string[];
}

export const LeaderBoard = ({laps}: Props) => {
    return <div className="leaderboard-view">
        <h2>LAP TIMES</h2>
        <Table laps={laps}/>
    </div>
}