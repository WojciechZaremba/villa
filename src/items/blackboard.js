import PlaceholderBox from "./placeholderBox"
import { useState, useEffect } from 'react'

const Blackboard = ({data}) => {

    const frame = {
        width: 150,
        height: 200,
        depth: 10,
        elevation: 100,
        boxShadow: "rgba(0, 0, 0, 0.2) 20px 25px 60px -40px inset",
    }
    const frame1 = {
        width: 150,
        height: 8,
        depth: 40,
        elevation: 100
    }
    const leftLegTop = {
        width: 16,
        height: 210,
        depth: 16,
        elevation: 100,
        positionRight: -15,
    }
    const rightLegTop = {
        width: 16,
        height: 210,
        depth: 16,
        elevation: 100,
        postitionLeft: 134,
        positionRight: -15
    }
    const leftLegBottom = {
        width: 16,
        height: 100,
        depth: 16,
        elevation: 0,
        positionRight: -15,
        boxShadow: "inset rgb(0, 0, 0, .3) 0px 40px 30px -20px",
        moreShadows: {
            right: "rgba(0, 0, 0, 0.3) 90px 0px 30px -50px inset",
            ambientShadowBottom: true,
        }
        // boxShadow: "rgba(0, 0, 0, 0.3) 90px 0px 30px -50px inset"

    }
    const rightLegBottom = {
        width: 16,
        height: 100,
        depth: 16,
        elevation: 0,
        postitionLeft: 134,
        positionRight: -15,
        boxShadow: "inset rgb(0, 0, 0, .3) 0px 40px 30px -20px",
        moreShadows: {
            left: "rgba(0, 0, 0, 0.3) 90px 0px 30px -50px inset",
            ambientShadowBottom: true,
        }
    }


    return (
        <div id="test" className="BlackboardContainer" onClick={(e) =>{console.log(e)}}>
            <div className={`BlackboardOrigin ${data.customClass}`} style={{...data.styles, position: "relative", width: 0, height: 0}}>llllllllllllllllll
                <PlaceholderBox data={frame} custom={true} clickable={true}/>   
                <PlaceholderBox data={frame1} custom={true} clickable={true}/>   
                <PlaceholderBox data={leftLegTop} custom={true} clickable={true}/>   
                <PlaceholderBox data={rightLegTop} custom={true} clickable={true}/>   
                <PlaceholderBox data={leftLegBottom} custom={true} clickable={true}/>   
                <PlaceholderBox data={rightLegBottom} custom={true} clickable={true}/>   
            </div>
        </div>
     )
}

export default Blackboard