import { useContext } from "react"
import { testContextModule } from "../functionalComponents/handler.js";
import { handler } from "../App.js";


const Poster = ({data, image, popup = false}) => {
    const handleClick = useContext(handler)
    let posterWidth = data?.width;
    let posterheight = data?.height;
    
    if (popup) {
        posterWidth = data?.width;
        posterheight = data?.height;
        return (<div className="poster popup-poster"
                onClick={(e)=>handleClick(e)} 
                style={{
                    backgroundImage: image,
                    width: posterWidth * 4,
                    height: posterheight * 4,
                    position: "relative",
                    top: "0",
                    left: "0",
                    transform: "rotateX(0deg)"}}>
                poster
                </div>)
    }

    return (<div className="poster wall-poster" 
                onClick={(e)=>handleClick(e)} 
                style={{...data.styles}}>
            poster
            </div>)
}

export default Poster;