import { useNavigate } from "react-router-dom";

const Door = ({data}) => {
    console.log(data?.door)
    const nav = useNavigate()
    return (
        <div className="door"
                onClick={() => nav(`${data?.door?.route}`)}
                style={{
                    backgroundColor: `${data?.door?.color}`,
                    left: `${data?.door?.positionLeft}`,
                }}
        >door</div>
    );
}

export default Door;