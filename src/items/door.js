import { useNavigate } from "react-router-dom";

const Door = ({data}) => {
    console.log("%cDoor component","color: red", data.positionLeft)
    const nav = useNavigate()

    const doorLeft = data?.positionLeft

    return (
        <div className="door"
                onClick={() => nav(`${data?.route}`)}
                style={{
                    backgroundColor: data?.color,
                    left: data?.positionLeft,
                }}
        >door</div>
    );
}

export default Door;