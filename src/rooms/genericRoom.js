import image from "../assets/courageCss.jpg"
import Poster from "../items/poster"
import Door from"../items/door"
import PlaceholderBox from "../items/placeholderBox"

console.log(image)

const GenericRoom = ({data, items, handleClick}) => {
    const roomOffset = (data?.roomLength - (data?.roomWidth + data?.roomLength) / 2) * .7;
    const roomOffsetVert = (data?.roomHeight - data?.roomHeight / 2);

    console.log(items?.poster?.image)
    console.log("all items", items)
    //const image = items?.poster?.image

    function postersProcessor(plane) {
        console.log("plane",plane)
        console.log("items processor",items?.posters)
        let postersNum = items?.posters?.length
        let posters = items?.posters
        console.log(postersNum)

        let postersComponents = []
        for (let i = 0; i < postersNum; i++) {
            if (posters[i].wall == plane) {
                postersComponents.push(<Poster data={posters[i]} key={i} handleClick={handleClick}></Poster>)
            }
            console.log(posters[i])
        }
        console.log(postersComponents)
        return <div>{postersComponents}</div>
    }
    postersProcessor("")

    return (
        <div className='genericRoom'>genericRoom: {data?.roomName}
            <div className='genericRoomOrigin' style={{left: roomOffset, top: roomOffsetVert}}>
                <div    className="floor" style={{
                                backgroundColor: data?.floorColor,
                                width: data?.roomWidth,
                                height: data?.roomLength,                              
                                }}>floor
                    {items?.placeholderBox && <PlaceholderBox></PlaceholderBox>}
                    <div className="leftClip clipping" style={{
                                width: data?.roomWidth + 25,
                                top: data?.roomLength,                              
                                }}>leftClip</div>
                    <div className="rightClip clipping" style={{
                                height: data?.roomLength + 25,                              
                                }}>rightClip</div>
                        {items?.poster?.wall == "floor" && <Poster data={items} handleClick={handleClick} image={image}/>}
                </div>
                <div className="rightWall" style={{
                                backgroundColor: data?.rightWallColor,
                                width: data?.roomWidth,
                                height: data?.roomHeight, 
                                }}>rightWall
                    {items?.poster?.wall == "right" && <Poster data={items} handleClick={handleClick} image={items?.poster?.image}/>}
                    
                    {postersProcessor("right")}
                    
                    {items?.door?.wall == "right" && <Door data={items}/>}
                    <div className="rightClip clipping" style={{
                        height: data?.roomHeight + 25
                    }}>rightClip</div>
                    <div className="topClip clipping" style={{
                                width: data?.roomWidth + 25,
                                top: data?.roomHeight
                                }}>topClip</div>
                </div>
                <div className="leftWall" style={{
                                backgroundColor: data?.leftWallColor,
                                width: data?.roomLength,
                                height: data?.roomHeight, 
                                }}>leftWall
                    
                    {/* {items?.poster?.wall == "left" && <Poster data={items} handleClick={handleClick} image={items?.poster?.image}/>} */}
                    {items?.door?.wall == "left" && <Door data={items}/>}

                    {postersProcessor("left")}

                    <div className="leftClip clipping" style={{
                        height: data?.roomHeight + 25
                    }}>leftClip</div>
                    <div className="topClip clipping" style={{
                                width: data?.roomLength + 25,
                                top: data?.roomHeight
                                }}>topClip</div>
                </div>
            </div>
        </div>
    );
}

export default GenericRoom