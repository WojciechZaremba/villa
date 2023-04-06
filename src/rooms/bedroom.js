import imageColors from "../assets/kolory10.jpg"
import imageMan from "../assets/panOdKota.jpg"
import { Link } from 'react-router-dom';
import GenericRoom from './genericRoom';
import { useState } from 'react';

import Bed from "../items/bed";
import Door from"../items/door";
import Poster from "../items/poster";
import PlaceholderBox from "../items/placeholderBox";

import TV from "../items/tv";

const Bedroom = ({handleClick}) => {
    const [data, setData] = useState({
        roomName: "bedroom",
        roomWidth: 550,
        roomLength: 550,
        roomHeight: 300,
        rightWallColor: "lightcoral",
        leftWallColor: "lightblue",
        floorColor: "whitesmoke",
    });
    // const [items, setItems] = useState({
    //     poster: {
    //         source: "../items/poster",
    //         positionTop: ,
    //         positionLeft: ,
    //     },
    //     carpet: {
    //         positionTop: ,
    //         positionLeft: ,
    //         color: ,
    //     }

    // })
    const items = {
        posters: [
            {
            proto: Poster,
            image: imageColors,
            positionTop: 115,
            positionLeft: 80,
            width: 160,
            height: 120,
            wall: "left",
            handler: handleClick,
            },
            {
            proto: Poster,
            image: imageMan,
            positionTop: 88,
            positionLeft: 310,
            width: 110,
            height: 110,
            wall: "left",
            handler: handleClick,
            }
        ],
        doors: [
            {
            proto: Door,
            wall: "right",
            positionLeft: 320,
            color: "Sienna",
            route: "/storage"
            },
            {
            proto: Door,
            wall: "right",
            positionLeft: 120,
            color: "Brown",
            route: "/hall"
            },
    ],
        placeholderBox: {
            positionTop: 88,
            positionLeft: 80,
            width: 160,
            height: 120,
            wall: "floor"
        },
        bed: {
            proto: Bed,
            positionTop: 88,
            positionLeft: 80,
        },
        tvs: [{
            proto: TV,
            positionTop: 100,
            positionLeft: -100,
            elevation: 0,
            rotationDeg: 285
        }]
    }
    

    return (
            <GenericRoom data={data} items={items} handleClick={handleClick} />


        // <div className="genericRoom bedroom">Bedroom
        //     <div className="genericRoomOrigin bedroomOrigin">
        //         <div className="floor">floor
        //             <div className="leftClip clipping">leftClip</div>
        //             <div className="rightClip clipping">rightClip</div>
        //             <div className="carpet">carpet</div>
        //             {/* <div className="floorLight">light</div> */}
        //         </div>
        //         {/* <GenericRoom></GenericRoom> */}
        //         <div className="rightWall">rightWall
        //             <div className="door">door
        //                 < Link to={`/hall`} />
        //             </div>
        //             <div className="rightClip clipping">rightClip</div>
        //             <div className="topClip clipping">topClip</div>
        //             <div className="wallLight">light</div>
        //             <div className="poster" onClick={handleClick}>poster</div>
        //         </div>
        //         <div className="leftWall">leftWall
        //             <div className="window">window</div>
        //             <div className="leftClip clipping">leftClip</div>
        //             <div className="topClip clipping">topClip</div>
        //         </div>
        //     </div>
        // </div>
    );
}

export default Bedroom;