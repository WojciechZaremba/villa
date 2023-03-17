

const Poster = ({data, handleClick, image, popup = false}) => {
    if (popup) {
        console.log("popup poster")
        return (
            <div className="poster" 
                // onClick={()=>console.log("poster click")} 
                onClick={(e)=>handleClick(e)} 
                style={{
                    backgroundImage: image,
                    width: "464px",
                    height: "640px",
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
                width: "116px",
                height: "160px",
                left: "78px",
                top: "80px",
        }}>poster</div>
    )
}

export default Poster;