import { Link } from 'react-router-dom';
import { useState } from 'react';
import GenericRoom from './genericRoom';
import chojrak from "../assets/courageCss.jpg";
import panOdKota from "../assets/panOdKota.jpg";
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
            wall: "left",
            handler: handleClick,
            styles: {
                backgroundImage: `url(${panOdKota})`,
                top: 78,
                left: 320,
                width: 116,
                height: 160,
            },
            image: panOdKota,
            positionTop: "78px",
            positionLeft: "320px",
            width: "116px",
            height: "160px",
        },
        {
            proto: Poster,
            wall: "right",
            handler: handleClick,
            styles: {
                backgroundImage: `url(${chojrak})`,
                top: "78px",
                left: "80px",
                width: "116px",
                height: "160px"
                },
        }],
        doors: [{
            proto: Door,
            route: "/bedroom",
            wall: "left",
            styles: {
                left: 80,
                background: "Pink",
            },
        },
        {
            proto: Door,
            route: "/bathroom",
            wall: "left",
            styles: {
                left: 540,
                background: "LightSeaGreen",
            },
        }]
    }
    return (
            <GenericRoom data={data} items={items} handleClick={handleClick} />
    );
}

export default Hall;