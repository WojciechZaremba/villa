

const Poster = ({data, handleClick, image, popup = false}) => {
    console.log("data",data?.poster)
    let posterWidth = data?.poster?.width;
    let posterheight = data?.poster?.height;
    
    if (popup) {
        posterWidth = data?.width;
        posterheight = data?.height;
        console.log("popup poster")
        return (
            <div className="poster" 
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
    return (
        <div className="poster" 
            // onClick={()=>console.log("poster click")} 
            onClick={(e)=>handleClick(e)} 
            style={{
                backgroundImage: `url(${image})`,
                width: posterWidth,
                height: posterheight,
                left: "78px",
                top: "80px",
        }}>poster</div>
    )
}

export default Poster;