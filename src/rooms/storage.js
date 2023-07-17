import GenericRoom from "./genericRoom";
import { useState } from "react";
import Door from "../items/door";
import PlaceholderBox from "../items/placeholderBox";

const Storage = ({handleClick}) => {
    const [data, setData] = useState({
        roomName: "storage",
        roomWidth: 200,
        roomLength: 200,
        roomHeight: 500,
        rightWallColor: "brown",
        leftWallColor: "brown",
    });
    const items = {
        doors: [
            {
            proto: Door,
            wall: "left",
            route: "/bedroom",
            styles: {
                left: 20,
                background: "Sienna",
                },
            }],
        placeholderBoxes: [{
            proto: PlaceholderBox,
            wall: "floor",
            styles: {
                top: 0,
                left: 80,
                width: 100, // dont work yet if not custom (fixed ???)
                height: 100,
            },
        }],
    }
    

    return <GenericRoom data={data} items={items} handleClick={handleClick} />
}

export default Storage;