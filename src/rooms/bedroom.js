import imageColors from "../assets/kolory10.jpg"
import imageMan from "../assets/panOdKota.jpg"
import GenericRoom from './genericRoom';
import { useState } from 'react';

import Bed from "../items/bed";
import Door from"../items/door";
import Poster from "../items/poster";
import PlaceholderBox from "../items/placeholderBox";

import TV from "../items/tv";
import Blackboard from "../items/blackboard"
import ComfyChair from "../items/comfyChair"
import tvCabinet from "../items/tvCabinet"

const Bedroom = ({handleClick}) => {
    console.log("Bedroom here")
    const [data, setData] = useState({
        roomName: "bedroom",
        roomWidth: 550,
        roomLength: 550,
        roomHeight: 300,
        rightWallColor: "lightcoral",
        leftWallColor: "lightblue",
        floorColor: "whitesmoke",
    });

    const items = {
        posters: [{proto: Poster,
            handler: handleClick,
            wall: "left",
            styles: {backgroundImage: `url(${imageColors})`,
                    width: 160,
                    height: 120,
                    left: 80,
                    top: 115,
                    },},
            { proto: Poster,
            handler: handleClick,
            wall: "left",
            styles: {  backgroundImage: `url(${imageMan})`,
                width: 110,
                height: 110,
                left: 310,
                top: 88 }}],
        doors: [
            { proto: Door,
            route: "/storage",
            wall: "right",
            styles: {
                left: 320,
                background: "Sienna",
                }},
            { proto: Door,
            route: "/hall",
            wall: "right",
            styles: {
                left: 120,
                background: "Pink",
                }}],
        placeholderBox: {
            styles: {left: 300, top: 400},
        },
        bed: { proto: Bed,
                styles: {top: 88,
                        left: 80 }
        },
        tvs: [{
            proto: TV,
            styles: { top: 490,
                    left: 30,
                    elevation: 50,
                    transform: `rotateX(0deg) rotateY(0deg) rotateZ(270deg) 
                        translate3d(0px,0px, 48px)`,
                    transformOrigin: "centre" 
                    }
        }],
        tvCabinets: [{
            proto: tvCabinet,
            styles: {
                top: 255,
                left: 0,
                transformOrigin: "centre",
                transform: `rotateX(0deg) rotateY(0deg) rotateZ(0deg) 
                        translate3d(0px,0px,0px)`,
            }
        }],
        blackboards: [{
            proto: Blackboard,
            styles: {
                top: 163,
                left: 30,
                elevation: 0,
                transform: `rotateX(0deg) rotateY(0deg) rotateZ(305deg) 
                    translate3d(0px,0px, 0px)`,
                transformOrigin: "centre"
            }
        }],
        comfyChairs: [
            {
            proto: ComfyChair,
            styles: {
                top: 100,
                left: 400,
                elevation: 0,
                transform: `rotateX(0deg) rotateY(0deg) rotateZ(287deg) translate3d(-64px, 0px, 0px)`,
                transformOrigin: "centre"
            }
        },
            {
            proto: ComfyChair,
            styles: {
                top: 375,
                left: 470,
                elevation: 0,
                transform: `rotateX(0deg) rotateY(0deg) rotateZ(12deg) translate3d(-64px, 0px, 0px)`,
                transformOrigin: "centre"
            }
        }
    ]
    }
    return (<GenericRoom data={data} items={items} handleClick={handleClick} />)
}

export default Bedroom;