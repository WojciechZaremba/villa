import image from "../assets/courageCss.jpg"
import Poster from "../items/poster"
import Door from"../items/door"

console.log(image)

const GenericRoom = ({data, items, handleClick}) => {
    const roomOffset = (data?.roomLength - (data?.roomWidth + data?.roomLength) / 2) * .7;
    return (
        <div className='genericRoom'>genericRoom: {data?.roomName}
            <div className='genericRoomOrigin' style={{left: roomOffset}}>
                <div    className="floor" style={{
                                backgroundColor: data?.floorColor,
                                width: data?.roomWidth,
                                height: data?.roomLength,                              
                                }}>floor
                    <div className="leftClip clipping" style={{
                                width: data?.roomWidth + 25,
                                top: data?.roomLength,                              
                                }}>leftClip</div>
                    <div className="rightClip clipping" style={{
                                height: data?.roomLength + 25,                              
                                }}>rightClip</div>
                    <Poster />
                </div>
                <div className="rightWall" style={{
                                backgroundColor: data?.rightWallColor,
                                width: data?.roomWidth,
                                height: data?.roomHeight, 
                                }}>rightWall
                <Poster data={items} handleClick={handleClick} image={image}/>
                {items?.door?.wall == "right" && <Door data={items}/>}
                    <div className="rightClip clipping" >rightClip</div>
                    <div className="topClip clipping" style={{
                                width: data?.roomWidth + 25,
                                }}>topClip</div>
                </div>
                <div className="leftWall" style={{
                                backgroundColor: data?.leftWallColor,
                                width: data?.roomLength,
                                height: data?.roomHeight, 
                                }}>leftWall
                    <Poster />
                    {items?.door?.wall == "left" && <Door data={items}/>}
                    <div className="leftClip clipping">leftClip</div>
                    <div className="topClip clipping" style={{
                                width: data?.roomLength + 25,
                                }}>topClip</div>
                </div>
            </div>
        </div>
    );
}

export default GenericRoom