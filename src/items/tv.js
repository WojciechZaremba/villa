import PlaceholderBox from "./placeholderBox"
import noSignal from "../assets/noSignal.gif"
import { useState, useEffect } from 'react';

const TV = ({data}) => {
    console.log("%cTV","color: blue")
    const [count, setCount] = useState(() => {
        const storedCount = localStorage.getItem('count');
        return storedCount !== null ? Number(storedCount) : 0;

    });
    const [screenData, setScreenData] = useState({
        backgroundImage: count % 2 === 1 ? noSignal : "none",
        backgroundColorLeft: "white",
        backgroundColorRight: "#343434",
        backgroundColorTop: "#343434",
        width: 240,
        height: 150,
        depth: 10,
        postitionLeft: 0,
        positionRight: 0,
        elevation: 8,
        border: 6,
        boxShadow: count % 2 === 0 ? "inset 41px 72px 135px 28px rgba(0, 0, 0, 1)" : "none",
        cursor: "pointer"
    });

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  },[]);


    // console.log("%cTV DATA","color: black", data)
    const screen = {
        backgroundImage: noSignal,
        backgroundColorLeft: "white",
        backgroundColorRight: "#343434",
        backgroundColorTop: "#343434",
        width: 240,
        height: 150,
        depth: 10,
        postitionLeft: 0,
        positionRight: 0,
        elevation: 8,
        border: 6,
        // boxShadow: "inset 41px 72px 135px 28px rgba(0, 0, 0, 1)"
    }
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
        elevation: 0
    }

   function handleClick() {
        // setCount(count + 1)
        setCount((count => {
            const newCount = count + 1
            localStorage.setItem('count', newCount)
            return newCount
        }))
        // console.log(count % 2)
        // if (count > 5) {
        // //     console.log("%cbigger than 15","color: magenta")
        //     setScreenData({...screenData, backgroundImage: "none"})}
        count % 2 === 1 && setScreenData({...screenData, 
            backgroundImage: "none",
            boxShadow: "inset 41px 72px 135px 28px rgba(0, 0, 0, 1)"
        })
        count % 2 === 0 && setScreenData({...screenData, 
            backgroundImage: noSignal,
            boxShadow: "none"
        })
        // count % 2 == 1 && setScreenData({...screenData, backgroundImage: noSignal})
        // count % 2 !== 0 && setScreenData({...screenData, backgroundImage: noSignal})
   }

    return (
        <div id="test" className="TVContainer" onClick={() =>{handleClick()}}>
            {/* <div className="TVOrigin" 
                style={{
                    position: "relative",
                    top: `${data?.positionTop}px`,
                    left: `${data?.positionLeft}px`,
                    transform: `rotateX(0deg) rotateY(0deg) rotateZ(${data?.rotationDeg}deg) 
                                translate3d(0px,0px, 0px)`,
                    transformOrigin: "centre"
                }}> */}
            <div className="TVOrigin" 
                style={{...data.styles, position: "relative", width: 0, height: 0}}>
                    {count}
                <PlaceholderBox data={screenData} custom={true} clickable={true}/>   
                <PlaceholderBox data={base} custom={true} clickable={true}/>   
            </div>
        </div>
     )
}

export default TV