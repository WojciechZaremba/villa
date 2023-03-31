import image from "../assets/kolory10.jpg"
import { Link } from 'react-router-dom';
import GenericRoom from './genericRoom';
import { useState } from 'react';

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
        poster: {
            source: "../items/poster",
            image: image,
            positionTop: 88,
            positionLeft: 80,
            width: 160,
            height: 120,
            wall: "left",
            handler: handleClick,
        },
        door: {
            wall: "right",
            positionLeft: 320,
            color: "Sienna",
            route: "/hall"
        }
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