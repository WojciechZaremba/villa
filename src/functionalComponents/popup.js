import './popup.css'
import Poster from '../items/poster';
import BlackboardCanvas from '../items/blackBoardCanvas'
import { handler } from "../App.js"
import { useContext } from 'react'

// const Popup = (props, blackboard = false) => {
const Popup = ({popElement, trigger}) => {
    const handleClick = useContext(handler)
    if (popElement === "blackboard") {
        return (trigger &&
            <div className="popup" onClick={(e)=>handleClick(e)}>
                <div className="popup-inner" style={{display: "flex", flexDirection: "column"}}>
                    <BlackboardCanvas />
                </div>
            </div>
        )
    }

    let imgUrl
    let propWidth
    let propHeight

    let roomImages = document.getElementsByClassName("wall-poster")
    let index = 0
    let imagesArray = [...roomImages]
    index = imagesArray.indexOf(popElement)
    
    function imageSwapper(e) { // image swapper swaps images
        const imageToSwap = document.getElementsByClassName("popup-poster")[0]
        let nextImage
        let nextWidth
        let nextHeight
        if (e === "right") {
            index++
            if (index >= roomImages.length) index = 0
            nextImage = window.getComputedStyle(roomImages[index]).backgroundImage
            nextWidth = window.getComputedStyle(roomImages[index]).width
            nextHeight = window.getComputedStyle(roomImages[index]).height
        } else if (e === "left") {
            index--
            if (index < 0) index = roomImages.length - 1
            nextImage = window.getComputedStyle(roomImages[index]).backgroundImage
            nextWidth = window.getComputedStyle(roomImages[index]).width
            nextHeight = window.getComputedStyle(roomImages[index]).height
        }
        imageToSwap.style.backgroundImage = nextImage
        nextWidth = parseInt(nextWidth.substring(0, nextWidth.length - 2), 10)
        console.log(nextWidth)
        imageToSwap.style.width = `${nextWidth * 4}px`
        nextHeight = parseInt(nextHeight.substring(0, nextHeight.length - 2), 10)
        console.log(nextHeight)
        imageToSwap.style.height = `${nextHeight * 4}px`

        console.log(e)
        console.log(roomImages)
        console.log(document.getElementsByClassName("popup-poster")[0])
    }

    if (popElement) {
        imgUrl = window.getComputedStyle(popElement).backgroundImage
        propWidth = window.getComputedStyle(popElement).width
        propWidth = parseInt(propWidth.substring(0, propWidth.length - 2), 10) //string px to a number
        propHeight = window.getComputedStyle(popElement).height
        propHeight = parseInt(propHeight.substring(0, propHeight.length - 2), 10) //string px to a number
    }
    
    return (trigger &&
        <div className="popup" onClick={(e)=>handleClick(e)} >
            <div className="popup-inner" onClick={(e)=>handleClick(e)}>
                <div className="arrow arleft" onClick={(e) => imageSwapper("left")}></div>
                <Poster popup={true} 
                        data={{width: propWidth, height: propHeight}} 
                        handleClick={handleClick} 
                        image={imgUrl}/>
                <div className="arrow arright" onClick={(e) => imageSwapper("right")}></div>
            </div>
        </div>)
}

export default Popup;