import image from "../assets/courageCss.jpg"
import { Link } from 'react-router-dom';
import GenericRoom from './genericRoom';
import { useState } from 'react';

const Bedroom = ({handleClick}) => {
    const [data, setData] = useState({
        name: "bedroom",
        width: "300px",
        length: "500px",
        height: "300px",
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
            positionTop: "78px",
            positionLeft: "80px",
            width: "116px",
            height: "160px",
            wall: "left",
            handler: handleClick,
        },
        door: {
            wall: "right",
            positionLeft: "320px",
            color: "Sienna",
            route: "/hall"
        }
    }
    

    return (
            <GenericRoom onClick={handleClick} data={data} items={items} handleClick={handleClick} />


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