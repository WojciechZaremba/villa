import GenericRoom from "./genericRoom";
import { useState } from "react";
import Door from "../items/door";


const Bathroom = ({handleClick}) => {
    const [data, setData] = useState({
        roomName: "bathroom",
        roomWidth: 300,
        roomLength: 300,
        roomHeight: 260,
        rightWallColor: "PowderBlue",
        leftWallColor: "PowderBlue",
    });

    const items = {
        doors: [
            {
            proto: Door,
            wall: "right",
            positionLeft: 20,
            color: "LightSeaGreen",
            route: "/hall"
            }],
    }


    return <GenericRoom data={data} items={items} handleClick={handleClick} />
}

export default Bathroom;