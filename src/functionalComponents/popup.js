import './popup.css'
import Poster from '../items/poster';

const Popup = (props) => {
    console.log("%cPopup component","color: yellow")
    let imgUrl
    let propWidth
    let propHeight

    let roomImages = document.getElementsByClassName("wall-poster")
    let index = 0
    let imagesArray = [...roomImages]
    index = imagesArray.indexOf(props.popElement)
    
    function imageSwapper(e) {
        const imageToSwap = document.getElementsByClassName("popup-poster")[0]
        let nextImage
        let nextWidth
        let nextHeight
        if (e == "right") {
            index++
            if (index >= roomImages.length) index = 0
            nextImage = window.getComputedStyle(roomImages[index]).backgroundImage
            nextWidth = window.getComputedStyle(roomImages[index]).width
            nextHeight = window.getComputedStyle(roomImages[index]).height
        } else if (e == "left") {
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

    if (props.popElement) {
        imgUrl = window.getComputedStyle(props.popElement).backgroundImage
        // console.log("eeeeeeeeeeeeeeeeeeeeeeeeeeee",imgUrl)
        propWidth = window.getComputedStyle(props.popElement).width
        propWidth = parseInt(propWidth.substring(0, propWidth.length - 2), 10) //string px to a number
        propHeight = window.getComputedStyle(props.popElement).height
        propHeight = parseInt(propHeight.substring(0, propHeight.length - 2), 10) //string px to a number
        // console.log(imgUrl)
        // console.log(typeof propWidth)
        // console.log(typeof propHeight)
    }
    return (props.trigger &&
        <div className="popup">
            <div className="popup-inner">
                <div className="arrow arleft" onClick={(e) => imageSwapper("left")}></div>
                <Poster popup={true} 
                        data={{width: propWidth, height: propHeight}} 
                        handleClick={props.handleClick} 
                        image={imgUrl}/>
                <div className="arrow arright" onClick={(e) => imageSwapper("right")}></div>
            </div>
        </div>
    )
}

export default Popup;