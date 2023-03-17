import GenericRoom from "./genericRoom";
import { useState } from "react";

const Storage = ({handleClick}) => {
    const [data, setData] = useState({
        roomName: "storage",
        roomWidth: 200,
        roomLength: 200,
        roomHeight: 500,
        rightWallColor: "brown",
        leftWallColor: "brown",
    });


    return <GenericRoom data={data} handleClick={handleClick} />
}

export default Storage;