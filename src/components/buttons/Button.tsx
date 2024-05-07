interface Props {
    onClick: () => void;
    text: string;
}

export const Button = ({onClick, text}: Props) => {
    return <button className="click-button" onClick={onClick}>
        {text}
    </button>
}