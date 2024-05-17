interface Props {
    singleLap: string;
    index: number;
}

export const SingleLap = ({singleLap, index}: Props) => {
    return <div className="leaderboard-row">
        <div className="index">{index}.</div>
        <div className="time">{singleLap}</div>
    </div>
}