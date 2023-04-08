import PlaceholderBox from "./placeholderBox"
import { useState, useEffect } from 'react';


const Bathtub = ({data, items}) => {

    const side0 = {
        styles: {
            top: 0,
            left: 80,
            width: 100,
            height: 100,
        },
        wall: "floor"
    }
    const side1 = {
        
    }
    const side2 = {
        
    }
    const side3 = {
        
    }


    return (<div className="bathtubeContainer">
                <div className ="bathtubeOrigin" 
                    style={{...items?.bathtub?.styles, position: "relative"}}>
                    <PlaceholderBox data={side0} custom={true} clickable={true}/>
                </div>
            </div>)
}

export default Bathtub
