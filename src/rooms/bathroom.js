import GenericRoom from "./genericRoom";
import { useState } from "react";
import Door from "../items/door";
import Bathtub from "../items/bathtub";


const Bathroom = () => {
    const [data, setData] = useState({
        roomName: "bathroom",
        roomWidth: 300,
        roomLength: 300,
        roomHeight: 260,
        rightWallColor: "PowderBlue",
        leftWallColor: "PowderBlue",
    });

    const items = {
        doors: [{
            proto: Door,
            route: "/hall",
            wall: "right",
            styles: { 
                left: 120, 
                background: "LightSeaGreen"
                }
        }],
        bathtubs: [{
            proto: Bathtub,
            wall: "floor",
            styles: { top: 20, left: 0}
        }]
    }

    return <GenericRoom data={data} items={items} />
}

export default Bathroom;