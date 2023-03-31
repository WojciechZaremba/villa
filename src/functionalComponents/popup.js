import './popup.css'
import Poster from '../items/poster';

const Popup = (props) => {
    console.log("props",props)
    console.log(props.popElement?.style?.backgroundImage)
    let imgUrl
    let propWidth
    let propHeight
    if (props.popElement) {
        imgUrl = window.getComputedStyle(props.popElement).backgroundImage
        propWidth = window.getComputedStyle(props.popElement).width
        propWidth = parseInt(propWidth.substring(0, propWidth.length - 2), 10) //string px to a number
        propHeight = window.getComputedStyle(props.popElement).height
        propHeight = parseInt(propHeight.substring(0, propHeight.length - 2), 10) //string px to a number
        console.log(imgUrl)
        console.log(typeof propWidth)
        console.log(typeof propHeight)
    }
    return (props.trigger &&
        <div className="popup">
            <div className="popup-inner">
                <Poster popup={true} 
                        data={{width: propWidth, height: propHeight}} 
                        handleClick={props.handleClick} 
                        image={imgUrl}/>
            </div>
        </div>
    )
}

export default Popup;