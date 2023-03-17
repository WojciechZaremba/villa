import { Link } from 'react-router-dom';
import { useState } from 'react';
import GenericRoom from './genericRoom';


const Hall = ({handleClick}) => {
    const [data, setData] = useState({
        roomName: "hall",
        roomWidth: 290,
        roomLength: 790,
        roomHeight: 300,
        rightWallColor: "DarkSlateGrey",
        leftWallColor: "DarkSlateGrey",
        // rightWallColor: "lightcoral",
        // leftWallColor: "lightcoral",
        floorColor: "whitesmoke",
    });
    const items = {
        poster: {
            source: "../items/poster",
            image: null,
            positionTop: "78px",
            positionLeft: "80px",
            width: "116px",
            height: "160px",
            wall: "right",
            handler: handleClick,
        },
        door: {
            wall: "left",
            positionLeft: "320px",
            color: "Sienna",
            route: "/bedroom"
        }
    }
    return (
            <GenericRoom data={data} items={items} handleClick={handleClick} />
    );
}

export default Hall;