import GenericRoom from "./genericRoom";
import { useState } from "react";


const Bathroom = ({handleClick}) => {
    const [data, setData] = useState({
        roomName: "bathroom",
        roomWidth: 300,
        roomLength: 300,
        roomHeight: 260,
        rightWallColor: "PowderBlue",
        leftWallColor: "PowderBlue",
    });


    return <GenericRoom data={data} handleClick={handleClick} />
}

export default Bathroom;