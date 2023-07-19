import PlaceholderBox from "./placeholderBox"
// import { useState, useEffect } from 'react';
// TODO: make water flow

const Bathtub = ({data}) => {

    const side0 = { 
        width: 15,
        height: 70,
        depth: 150,
        elevation: 0,
        postitionLeft: 0,
        positionRight: 0,
        backgroundColorLeft: "henydew",
        backgroundColorRight: "snow",
        backgroundColorTop: "henydew",
    }
    const side1 = {
        width: 15,
        height: 70,
        depth: 150,
        elevation: 0,
        postitionLeft: 70,
        positionRight: 0,
        backgroundColorLeft: "henydew",
        backgroundColorRight: "snow",
        backgroundColorTop: "henydew",
    }
    const side2 = {
        width: 85,
        height: 70,
        depth: 15,
        elevation: 0,
        postitionLeft: 0,
        positionRight: 150,
        backgroundColorLeft: "henydew",
        backgroundColorRight: "snow",
        backgroundColorTop: "henydew",
    }
    const side3 = {
        width: 85,
        height: 70,
        depth: 15,
        elevation: 0,
        postitionLeft: 0,
        positionRight: 0,
        backgroundColorLeft: "henydew",
        backgroundColorRight: "snow",
        backgroundColorTop: "henydew",
    }
    const floorReflection = {
        width: 85,
        height: 70,
        depth: 165,
        elevation: -70,
        postitionLeft: 0,
        positionRight: 0,
        backgroundColorLeft: "henydew",
        backgroundColorRight: "snow",
        backgroundColorTop: "henydew",
    }


    return (<div className="bathtubeContainer">
                <div className ="bathtubeOrigin" 
                    style={{...data.styles, position: "relative"}}>
                    <PlaceholderBox data={side0} custom={true} clickable={true}/>
                    <PlaceholderBox data={side1} custom={true} clickable={true}/>
                    <PlaceholderBox data={side2} custom={true} clickable={true}/>
                    <PlaceholderBox data={side3} custom={true} clickable={true}/>
                    <PlaceholderBox data={floorReflection} custom={true} clickable={true}/>
                </div>
            </div>)
}

export default Bathtub
