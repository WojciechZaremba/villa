import PlaceholderBox from "./placeholderBox"
import wood from "../assets/wood.png"

const tvCabinet = ({data}) => {
    console.log("TV")
    
    const top = {
        width: 85,
        height: 12,
        depth: 250,
        elevation: 35,
        texture: false,
        backgroundColorLeft: "",
        backgroundColorRight: "burlywood",
        backgroundColorTop: "",
    }
    const legRight = {
        width: 85,
        height: 35,
        depth: 12,
        elevation: 0,
        texture: false,
        backgroundColorRight: "burlywood",
    }
    const legLeft = {
        width: 85,
        height: 35,
        depth: 12,
        elevation: 0,
        texture: false,
        postitionLeft: 0,
        positionRight: 238,
        backgroundColorRight: "burlywood",
    }
    const bottom = {

    }

    return (
        <div className="tvCabinetContainer">
            <div className ="tvCabinetOrigin" style={{...data.styles, position: "relative"}}>
                <PlaceholderBox data={top} custom={true} />
                <PlaceholderBox data={legLeft} custom={true} />
                <PlaceholderBox data={legRight} custom={true} />
            </div>
        </div>
    )
}

export default tvCabinet