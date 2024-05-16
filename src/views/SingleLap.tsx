interface Props {
    singleLap: string;
    index: number;
}

export const SingleLap = ({singleLap, index}: Props) => {
    return <div className="leaderboard-row">
        {index}.-{singleLap}
    </div>
}