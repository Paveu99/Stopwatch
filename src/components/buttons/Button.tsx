interface Props {
    onClick: () => void;
    text: string;
    color: string;
    disabled?: boolean;
}

export const Button = ({onClick, text, color, disabled}: Props) => {
    return <button className="click-button" onClick={onClick} disabled={disabled} style={{backgroundColor: `${color}`}}>
        {text}
    </button>
}