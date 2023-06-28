
import PlaceholderBox from "../items/placeholderBox"
import Bathtub from "../items/bathtub"
// import Bed from "../items/bed"
import React from "react"

const GenericRoom = ({data, items, handleClick, customOriginClass = ""}) => {
    const Television = items?.tvs?.[0]?.proto
    const tvData = items?.tvs?.[0]
    const blackboardData = items?.blackboards?.[0]

    const roomOffset = (data?.roomLength - (data?.roomWidth + data?.roomLength) / 2) * .7
    const roomOffsetVert = (data?.roomHeight - data?.roomHeight / 2)

    const PosterProto = items?.posters?.[0]?.proto
    const DoorProto = items?.doors?.[0]?.proto
    const BlackboardProto = items?.blackboards?.[0]?.proto

    function postersProcessor(plane) {
        let postersNum = items?.posters?.length
        let posters = items?.posters

        let postersComponents = []
        for (let i = 0; i < postersNum; i++) {
            if (posters[i].wall == plane) {
                postersComponents.push(<PosterProto data={posters[i]} key={i} handleClick={handleClick} />)
            }
        }
        return <div>{postersComponents}</div>
    }

    function doorsProcessor(plane) {
        let doorsNum = items?.doors?.length
        let doors = items?.doors

        let doorsComponenets = []
        for (let i = 0; i < doorsNum; i++) {
            if (doors[i].wall == plane) {
                doorsComponenets.push(<DoorProto data={items.doors[i]} key={i}></DoorProto>)
            }
        }
        return  (<div className="doors" style={{display: 'flex', justifyContent: "space-around"}}>
                {doorsComponenets}
                </div>)
    }

    function universalItemProcessor(plane) {
        const categories = Object.keys(items);
        for (let i = 0; i < categories.length; i++) {
            // console.log(categories[i], items[categories[i]]) // str works as a way to access obj prop val
        }
    }

    return (
        <div className='genericRoom'>genericRoom: {data?.roomName}
            <div className={'genericRoomOrigin' + " " + customOriginClass} 
                    style={{left: roomOffset, top: roomOffsetVert}}>
                <div className="floor" 
                        style={{
                        // backgroundColor: data?.floorColor,
                        backgroundColor: data.floorColor,
                        width: data?.roomWidth,
                        height: data?.roomLength,}}>floor
                    {items?.bathtub && <Bathtub data={items?.bathtub}></Bathtub>}
                    {items?.placeholderBox && <PlaceholderBox data={items?.placeholderBox}></PlaceholderBox>}
                    {items?.tvs && <Television data={tvData}/>}
                    {items?.blackboards && <BlackboardProto data={blackboardData} handleClick={handleClick}/>}
                    <div className="leftClip clipping" 
                        style={{
                        width: data?.roomWidth + 25,
                        top: data?.roomLength,}}>leftClip</div>
                    <div className="rightClip clipping" 
                        style={{height: data?.roomLength + 25,
                        }}>rightClip</div>
                        {/* {items?.poster?.wall == "floor" && <Poster data={items} handleClick={handleClick} image={image}/>} */}
                </div>
                <div className="rightWall" 
                        style={{
                        backgroundColor: data?.rightWallColor || data?.wallsColor,
                        width: data?.roomWidth,
                        height: data?.roomHeight, 
                        }}>rightWall
                    {postersProcessor("right")}
                    {doorsProcessor("right")}
                    <div className="rightClip clipping" 
                            style={{height: data?.roomHeight + 25
                            }}>rightClip</div>
                    <div className="topClip clipping" 
                            style={{width: data?.roomWidth + 25,top: data?.roomHeight
                            }}>topClip</div>
                </div>
                <div className="leftWall" 
                        style={{
                        backgroundColor: data?.leftWallColor || data?.wallsColor,
                        width: data?.roomLength,
                        height: data?.roomHeight, 
                        }}>leftWall
                    {postersProcessor("left")}
                    {doorsProcessor("left")}
                    <div className="leftClip clipping" 
                            style={{height: data?.roomHeight + 25
                            }}>leftClip</div>
                    <div className="topClip clipping" 
                            style={{width: data?.roomLength + 25,top: data?.roomHeight
                            }}>topClip</div>
                </div>
            </div>
        </div>
    );
}

export default GenericRoom