

const Poster = ({data, handleClick, image, popup = false}) => {
    // console.log("data",data)

    let posterWidth = data?.width;
    let posterheight = data?.height;
    let posterLeft = data?.positionLeft;
    let posterTop = data?.positionTop;
    
    if (popup) {
        posterWidth = data?.width;
        posterheight = data?.height;
        // console.log("popup poster")
        return (
            <div className="poster popup-poster" 
                // onClick={()=>console.log("poster click")} 
                onClick={(e)=>handleClick(e)} 
                style={{
                    backgroundImage: image,
                    width: posterWidth * 4,
                    height: posterheight * 4,
                    position: "relative",
                    top: "0",
                    left: "0",
                    transform: "rotateX(0deg)"
                }}>poster</div>
                )}
        image = data?.image
                return (
        <div className="poster wall-poster" 
            // onClick={()=>console.log("poster click")} 
            onClick={(e)=>handleClick(e)} 
            style={{
                backgroundImage: `url(${image})`,
                width: posterWidth,
                height: posterheight,
                left: posterLeft,
                top: posterTop,
        }}>poster</div>
    )
}

export default Poster;