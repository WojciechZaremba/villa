import PlaceholderBox from "./placeholderBox"
import noSignal from "../assets/noSignal.gif"
import { useState, useEffect } from 'react';

const TV = ({data}) => {

    const [count, setCount] = useState(() => { // every tv needs its own counter \/
        const storedCount = localStorage.getItem(`${data.customClass}`); 
        return storedCount !== null ? Number(storedCount) : 0;
    });

    const [screenData, setScreenData] = useState({
        customImageLeft: count % 2 === 1 ? noSignal : "none", // TODO: invent better names
        backgroundColorLeft: "white",
        backgroundColorRight: "#343434",
        backgroundColorTop: "#343434",
        width: 240,
        height: 150,
        depth: 10,
        postitionLeft: 0,
        positionRight: 0,
        elevation: 8,
        border: `solid #111 6px`,
        cursor: "pointer",
        moreShadows: {
            ambientShadowBottom: true,
            left: count % 2 === 0 ? "inset 41px 72px 135px 28px rgba(0, 0, 0, 1)" : "none"
        }
    });

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  },[]);

    const base = {
        backgroundImage: "none",
        backgroundColorLeft: "#343434",
        backgroundColorRight: "#343434",
        backgroundColorTop: "#343434",
        width: 120,
        height: 8,
        depth: 50,
        postitionLeft: 60,
        positionRight: -15,
        elevation: 0,
        moreShadows: {
            ambientShadowBottom: true,
        }
    }

   function handleClick(e) {
        setCount((count => {
            const newCount = count + 1
            localStorage.setItem(`${data.customClass}`, newCount)
            return newCount
        }))
        count % 2 === 1 && setScreenData({...screenData, 
            backgroundImage: "none",
            moreShadows: {
                ambientShadowBottom: true,
                left: "inset 41px 72px 135px 28px rgba(0, 0, 0, 1)"
            }
        })
        count % 2 === 0 && setScreenData({...screenData, 
            backgroundImage: noSignal,
            moreShadows: {
                ambientShadowBottom: true,
                left: "none"
            }
        })
   }

    return (
        <div id="test" className="TVContainer" onClick={(e) =>{handleClick(e)}}>
            <div className={`TVOrigin ${data.customClass}`} style={{...data.styles, position: "relative", width: 0, height: 0}}>
                {count}
                <PlaceholderBox data={screenData} custom={true} clickable={true}/>   
                <PlaceholderBox data={base} custom={true} clickable={true}/>   
            </div>
        </div>
     )
}

export default TV