import "./placeholderBox.css"


const PlaceholderBox = ({data, custom = false, clickable = false, customClasses = ""}) => {
    clickable && (customClasses = customClasses.concat(" ", "clickable")) 
    /*why not just pass class as a parameter?*/

    if (!custom) {
        return (
            <div className="placeholderContainer">qwer
                <div className="placeholderOrigin" style={{...data.styles}}>asdf
                    <div className="placeholderLeft" >zxcv</div>
                    <div className="placeholderRight">zxcv</div>
                    <div className="placeholderTop">zxcv</div>
                </div>
            </div>
        )
    } else {
        // ???? redundant \/  \/  \/
        const customWidth = data.width
        const customHeight = data.height
        const customDepth = data.depth
        const customColorLeft = data.backgroundColorLeft || ""
        const customColorRight = data.backgroundColorRight || ""
        const customColorTop = data.backgroundColorTop || ""
        const custompostitionLeft = data.postitionLeft
        const customPostitionRight = data.positionRight
        const customElevation = data.elevation
        const customImage = data.backgroundImage
        const border = data.border
        const boxShadow = data.boxShadow
        const moreShadows = data.moreShadows || false
        // ???? redundant /\  /\  /\
        return (
            <div className={`placeholderContainer ${customClasses}`}>
                <div className={`placeholderOrigin ${customClasses}`} 
                    style={{
                        transform: `translate3d(0,0,${customElevation}px)`,
                        left: custompostitionLeft,
                        top: customPostitionRight}}>
                    <div className={`placeholderLeft ${customClasses}`} 
                        style={{ /*backgroundImage: `url(${customImage})`,*/
                            backgroundImage: data.customImageLeft ? `url(${customImage})` : `url(${""})`,
                            backgroundColor: customColorLeft, border: border, /*border: `solid #111 ${border}px`,*/ 
                            boxSizing: "border-box", 
                            boxShadow: moreShadows.left, /*boxShadow: boxShadow,*/ /*left: custompostitionLeft,*/ 
                            width: customWidth, 
                            height: customHeight, 
                            top: customDepth, 
                            transform: `rotateX(-90deg) rotateY(0deg) rotateZ(0deg) translate3d(0px, ${-customHeight}px,0px)`}}>
                        {data.image && 
                        <img className={`image ${customClasses}`} 
                            src={data.image} 
                            height={customHeight - data.frameThickness * 2} 
                            width={customWidth - data.frameThickness * 2} />}
                    </div>
                    <div className={`placeholderRight ${customClasses}`} 
                        style={{ /*backgroundImage: `url(${""})`,*/
                            backgroundImage: data.customImageRight ? `url(${customImage})` : `url(${""})`,
                            backgroundColor: customColorRight, /*left: data?.positionRight,*/ 
                            boxShadow: moreShadows.right || null, 
                            width: customHeight, 
                            height: customDepth, 
                            left: customWidth, 
                            transform: `rotateX(0deg) rotateY(90deg) rotateZ(0deg) translate3d(${-customHeight}px, 0px,  0px)`}}>
                    </div>
                    <div className={`placeholderDefHidden ${customClasses}`} 
                        style={{ /*backgroundImage: `url(${""})`,*/
                            backgroundImage: data.customImageDefHidden ? `url(${customImage})` : `url(${""})`,
                            backgroundColor: customColorRight, /*left: data?.positionRight,*/ 
                            boxShadow: moreShadows.hidden || null, 
                            width: customHeight, 
                            height: customDepth, 
                            left: customWidth, 
                            transform: `rotateX(0deg) rotateY(90deg) rotateZ(0deg) translate3d(${-customHeight}px, 0px,  ${-customWidth}px)`}}>
                    </div>
                    <div className={`placeholderTop ${customClasses}`} 
                        style={{ /*backgroundImage: `url(${""})`,*/
                            backgroundImage: data.customImageTop ? `url(${customImage})` : `url()`,
                            backgroundColor: customColorTop, /*left: data?.positionLeft,*/ 
                            boxShadow: moreShadows.top || null, 
                            width: customWidth, 
                            height: customDepth, 
                            transform: `translate3d(0, 0, ${customHeight}px)`}}>
                    </div>
                    {data.moreShadows?.ambientShadowBottom && 
                    <div className={`placeholderBottom ${customClasses}`} 
                        style={{
                            backgroundImage: `url(${""})`,
                            backgroundColor: customColorTop, /*left: data?.positionLeft,*/ 
                            width: customWidth, 
                            height: customDepth, 
                            transform: `translate3d(0, 0, 0)`, 
                            boxShadow: `0px 0px 44px 5px rgba(0, 0, 0, .5)`, /*soft*/ 
                            boxShadow: `0px 0px 20px 8px rgba(0, 0, 0, .2)`, /*best one?*/ 
                            boxShadow: `0px 0px 25px 0px rgba(0, 0, 0, .7)`}}>
                    </div>}
                </div>
            </div>
        )
    }
}

export default PlaceholderBox;