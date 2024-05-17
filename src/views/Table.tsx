import {SingleLap} from "./SingleLap.tsx";

interface Props {
    laps: string[];
}

export const Table = ({laps}: Props) =>{

    return <div className="leaderboard-table">
        {
            laps.map((lap, index, arr) => (
                <SingleLap singleLap={lap} index={arr.length-index} key={`${index}/${lap}`}/>
            ))
        }
    </div>
}