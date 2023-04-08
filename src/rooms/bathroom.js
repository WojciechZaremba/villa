import GenericRoom from "./genericRoom";
import { useState } from "react";
import Door from "../items/door";
import Bathtub from "../items/bathtub";


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
            route: "/hall",
            wall: "right",
            styles: {
                left: 20,
                background: "LightSeaGreen",
                },
            }],
        bathtub: {
            proto: Bathtub,
            styles: {
                top: 50,
                left: 50
            }
        }
    }


    return <GenericRoom data={data} items={items} handleClick={handleClick} />
}

export default Bathroom;