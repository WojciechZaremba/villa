

const Poster = ({data, handleClick, image}) => {
    console.log(data)
    console.log(handleClick)
    return (
        <div className="poster" 
            // onClick={()=>console.log("poster click")} 
            onClick={()=>handleClick()} 
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