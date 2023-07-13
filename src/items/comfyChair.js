import PlaceholderBox from "./placeholderBox"

const ComfyChair = ({data}) => {

    const sit = {
        width: 100,
        height: 60,
        depth: 100,
        elevation: 0,
        postitionLeft: 0,
        positionRight: 0,
        backgroundColorRight: "burlywood",
        moreShadows: {
            hidden: "rgba(0, 0, 0, 0.15) 12px 0px 35px -15px inset",
            ambientShadowBottom: true,
        }
    }
    const back = {
        width: 30,
        height: 130,
        depth: 100,
        elevation: 0,
        postitionLeft: 100,
        positionRight: 0,
        backgroundColorRight: "burlywood",
        moreShadows: {
            hidden: "rgba(0, 0, 0, 0.1) 12px 0px 35px -15px inset",
            ambientShadowBottom: true,
        }
    }
    const armRight = {
        width: 130,
        height: 90,
        depth: 30,
        elevation: 0,
        postitionLeft: 0,
        positionRight: -30,
        backgroundColorRight: "burlywood",
        moreShadows: {
            hidden: "rgba(0, 0, 0, 0.2) 12px 0px 35px -15px inset",
            top: "rgba(0, 0, 0, .5) -1px 0px 29px -18px inset",
            ambientShadowBottom: true,
        }
    }
    const armLeft = {
        width: 130,
        height: 90,
        depth: 30,
        elevation: 0,
        postitionLeft: 0,
        positionRight: 100,
        backgroundColorRight: "burlywood",
        moreShadows: {
            hidden: "rgba(0, 0, 0, 0.2) 12px 0px 35px -15px inset",
            left: "rgba(0, 0, 0, 0.2) -8px 0px 35px -1px inset",
            top: "rgba(0, 0, 0, .5) -1px 0px 29px -18px inset",
            ambientShadowBottom: true,
        }
    }

    return (
        <div className="comfyChair">CHAIR
                <div className={`comfy${data.customClass || ""}`} 
                    style={{...data.styles, position: "relative", width: 0, height: 0}}>
                    <PlaceholderBox data={sit} custom={true}/>   
                    <PlaceholderBox data={back} custom={true}/>   
                    <PlaceholderBox data={armRight} custom={true}/>   
                    <PlaceholderBox data={armLeft} custom={true}/>   
                </div>
        </div>
    )
}

export default ComfyChair