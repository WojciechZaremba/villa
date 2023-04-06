import PlaceholderBox from "./placeholderBox"

const TV = ({data}) => {
    console.log("%cTV DATA","color: black", data)
    const screen = {
        backgroundImage: "none",
        backgroundColorLeft: "red",
        backgroundColorRight: "green",
        backgroundColorTop: "blue",
        width: 240,
        height: 150,
        depth: 10,
        postitionLeft: 0,
        positionRight: 0,
        elevation: 8
    }
    const base = {
        backgroundImage: "none",
        backgroundColorLeft: "darkgray",
        backgroundColorRight: "gray",
        backgroundColorTop: "gray",
        width: 120,
        height: 8,
        depth: 50,
        postitionLeft: 60,
        positionRight: -15,
        elevation: 0
    }

    return (
        <div className="TVContainer">
            <div className="TVOrigin" 
                style={{
                    position: "relative",
                    top: `${data?.positionTop}px`,
                    left: `${data?.positionLeft}px`,
                    transform: `rotateX(0deg) rotateY(0deg) rotateZ(${data?.rotationDeg}deg) 
                                translate3d(0px,0px, 0px)`,
                    transformOrigin: "centre"
                }}>
                <PlaceholderBox data={screen} custom={true}/>   
                <PlaceholderBox data={base} custom={true}/>   
            </div>
        </div>
     )
}

export default TV