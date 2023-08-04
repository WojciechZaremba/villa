import { useState } from 'react';
import GenericRoom from './genericRoom';
import chojrak from "../assets/courageCss.jpg";
import imageAstronaut from "../assets/seagull-7282992_1280.webp"
import Door from '../items/door';
import Poster from '../items/poster';


const Hall = () => {
    const [data, setData] = useState({
        roomName: "hall",
        roomWidth: 250,
        roomLength: 790,
        roomHeight: 300,
        rightWallColor: "DarkSlateGrey",
        leftWallColor: "DarkSlateGrey",
        floorColor: "whitesmoke",
    });
    const items = {
        posters: [{
            proto: Poster,
            wall: "left",
            styles: {
                backgroundImage: `url(${imageAstronaut})`,
                top: 85,
                left: 320,
                width: 110,
                height: 110,
            },
          },
          {
            proto: Poster,
            wall: "right",
            styles: {
                backgroundImage: `url(${chojrak})`,
                top: "78px",
                left: "80px",
                width: "116px",
                height: 160
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
            <GenericRoom data={data} items={items} />
    )
}

export default Hall