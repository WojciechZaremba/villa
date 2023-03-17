import './popup.css'
import Poster from '../items/poster';

const Popup = (props) => {
    console.log(props)
    console.log(props.popElement?.style?.backgroundImage)
    let imgUrl
    if (props.popElement) {
        imgUrl = window.getComputedStyle(props.popElement).backgroundImage
        console.log(imgUrl)
    }
    return (props.trigger &&
        <div className="popup">
            <div className="popup-inner">
                popup-stuff
                <Poster popup={true} data={null} handleClick={props.handleClick} image={imgUrl}/>
            </div>
        </div>
    )
}

export default Popup;