import { Link } from 'react-router-dom';
import { useState } from 'react';
import GenericRoom from './genericRoom';
import image from "../assets/panOdKota.jpg";
import Door from '../items/door';
import Poster from '../items/poster';


const Hall = ({handleClick}) => {
    const [data, setData] = useState({
        roomName: "hall",
        roomWidth: 250,
        roomLength: 790,
        roomHeight: 300,
        rightWallColor: "DarkSlateGrey",
        leftWallColor: "DarkSlateGrey",
        // rightWallColor: "lightcoral",
        // leftWallColor: "lightcoral",
        floorColor: "whitesmoke",
    });
    const items = {
        posters: [{
            proto: Poster,
            image: image,
            positionTop: "78px",
            positionLeft: "80px",
            width: "116px",
            height: "160px",
            wall: "right",
            handler: handleClick,
        }],
        doors: [{
            proto: Door,
            wall: "left",
            positionLeft: 320,
            color: "Pink",
            route: "/bedroom"
        },
        {
            proto: Door,
            wall: "left",
            positionLeft: 560,
            color: "LightSeaGreen",
            route: "/bathroom"
        }]
    }
    return (
            <GenericRoom data={data} items={items} handleClick={handleClick} />
    );
}

export default Hall;