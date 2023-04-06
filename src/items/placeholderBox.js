import "./placeholderBox.css"

const PlaceholderBox = ({data, custom = false}) => {

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

        return (
            <div className="placeholderContainer">
                <div className="placeholderOrigin" 
                    style={{
                        transform: `translate3d(0,0,${customElevation}px)`,
                        left: custompostitionLeft,
                        top: customPostitionRight
                        }}>
                    <div className="placeholderLeft" 
                        style={{
                        backgroundImage: customImage,
                        backgroundColor: customColorLeft,
                        // left: custompostitionLeft,
                        width: customWidth,
                        height: customHeight,
                        top: customDepth,
                        transform: `rotateX(-90deg) rotateY(0deg) rotateZ(0deg) 
                                    translate3d(0px, ${-customHeight}px,0px)`
                }}></div>
                    <div className="placeholderRight" 
                        style={{
                        backgroundImage: customImage,
                        backgroundColor: customColorRight,
                        // left: data?.positionRight,
                        width: customHeight,
                        height: customDepth,
                        left: customWidth,
                        transform: `rotateX(0deg) rotateY(90deg) rotateZ(0deg) 
                                    translate3d(${-customHeight}px, 0px,  0px)`
                }}></div>
                    <div className="placeholderDefHidden" 
                        style={{
                        backgroundImage: customImage,
                        backgroundColor: customColorRight,
                        // left: data?.positionRight,
                        width: customHeight,
                        height: customDepth,
                        left: customWidth,
                        transform: `rotateX(0deg) rotateY(90deg) rotateZ(0deg) 
                                    translate3d(${-customHeight}px, 0px,  ${-customWidth}px)`
                }}></div>
                    <div className="placeholderTop" 
                        style={{
                        backgroundImage: customImage,
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