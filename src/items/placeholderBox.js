import "./placeholderBox.css"


const PlaceholderBox = ({data, custom = false, clickable = false}) => {
    
    let customClasses = ""
    clickable && (customClasses = customClasses.concat(" ", "clickable"))
    console.log(customClasses)


    if (!custom) {

        return (
            <div className="placeholderContainer">qwer
                <div className="placeholderOrigin">asdf
                    <div className="placeholderLeft" >zxcv</div>
                    <div className="placeholderRight">zxcv</div>
                    <div className="placeholderTop">zxcv</div>
                </div>
            </div>
        )

    } else {

        const customWidth = data.width
        const customHeight = data.height
        const customDepth = data.depth
        const customColorLeft = data.backgroundColorLeft
        const customColorRight = data.backgroundColorRight
        const customColorTop = data.backgroundColorTop
        const custompostitionLeft = data.postitionLeft
        const customPostitionRight = data.positionRight
        const customElevation = data.elevation
        const customImage = data.backgroundImage
        const border = data.border
        const boxShadow = data.boxShadow

        console.log('%ccustomImage', "color: brown", customImage)

        return (
            <div className="placeholderContainer">
                <div className="placeholderOrigin" 
                    style={{
                        transform: `translate3d(0,0,${customElevation}px)`,
                        left: custompostitionLeft,
                        top: customPostitionRight
                        }}>
                    <div className={`placeholderLeft ${customClasses}`}
                        style={{
                            backgroundImage: `url(${customImage})`,
                            // backgroundImage: `none`,
                            backgroundColor: customColorLeft,
                            border: `solid #111 ${border}px`,
                            boxSizing: "border-box",
                            boxShadow: boxShadow,
                        // left: custompostitionLeft,
                            width: customWidth,
                            height: customHeight,
                            top: customDepth,
                            transform: `rotateX(-90deg) rotateY(0deg) rotateZ(0deg) 
                                    translate3d(0px, ${-customHeight}px,0px)`
                }}></div>
                    <div className={`placeholderRight ${customClasses}`}
                        style={{
                        backgroundImage: `url(${""})`,
                        backgroundColor: customColorRight,
                        // left: data?.positionRight,
                        width: customHeight,
                        height: customDepth,
                        left: customWidth,
                        transform: `rotateX(0deg) rotateY(90deg) rotateZ(0deg) 
                                    translate3d(${-customHeight}px, 0px,  0px)`
                }}></div>
                    <div className={`placeholderDefHidden ${customClasses}`}
                        style={{
                        backgroundImage: `url(${""})`,
                        backgroundColor: customColorRight,
                        // left: data?.positionRight,
                        width: customHeight,
                        height: customDepth,
                        left: customWidth,
                        transform: `rotateX(0deg) rotateY(90deg) rotateZ(0deg) 
                                    translate3d(${-customHeight}px, 0px,  ${-customWidth}px)`
                }}></div>
                    <div className={`placeholderTop ${customClasses}`}
                        style={{
                        backgroundImage: `url(${""})`,
                        backgroundColor: customColorTop,
                        // left: data?.positionLeft,
                        width: customWidth,
                        height: customDepth,
                        transform: `translate3d(0, 0, ${customHeight}px)`
                }}></div>
                </div>
            </div>
        )
    }
}


export default PlaceholderBox;