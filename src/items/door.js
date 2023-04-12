import { useNavigate } from "react-router-dom";

const Door = ({data}) => {
    const nav = useNavigate()
    return (
        <div className="door"
                onClick={() => nav(`${data?.route}`)}
                style={{...data.styles}}
        >door</div>
    );
}

export default Door;

