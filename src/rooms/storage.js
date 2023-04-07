import GenericRoom from "./genericRoom";
import { useState } from "react";
import Door from "../items/door";

const items = {
    doors: [
        {
        proto: Door,
        wall: "left",
        positionLeft: 20,
        color: "Sienna",
        route: "/bedroom"
        }],
}

const Storage = ({handleClick}) => {
    const [data, setData] = useState({
        roomName: "storage",
        roomWidth: 200,
        roomLength: 200,
        roomHeight: 500,
        rightWallColor: "brown",
        leftWallColor: "brown",
    });


    return <GenericRoom data={data} items={items} handleClick={handleClick} />
}

export default Storage;