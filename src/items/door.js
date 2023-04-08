import { useNavigate } from "react-router-dom";

const Door = ({data}) => {
    console.log("%cDoor component","color: red", data)
    const nav = useNavigate()

    const doorLeft = data?.positionLeft

    return (
        <div className="door"
                onClick={() => nav(`${data?.route}`)}
                style={{...data.styles}}
        >door</div>
    );
}

export default Door;