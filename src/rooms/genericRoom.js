import image from "../assets/courageCss.jpg"
// import Poster from "../items/poster"
// import Door from"../items/door"
import PlaceholderBox from "../items/placeholderBox"
import Bathtub from "../items/bathtub"
// import Bed from "../items/bed"
import React from "react"


// console.log("%cimported door:","color: yellow",Door)

// console.log(image)

const GenericRoom = ({data, items, handleClick}) => {

    console.log("%cTelevision","color: pink",items?.tvs)
    const Television = items?.tvs?.[0]?.proto
    const tvData = items?.tvs?.[0]

    const roomOffset = (data?.roomLength - (data?.roomWidth + data?.roomLength) / 2) * .7;
    const roomOffsetVert = (data?.roomHeight - data?.roomHeight / 2);

   console.log("%cdoor passed as a prop","color: magenta",items?.doors[0]?.proto)
   const PosterProto = items?.posters?.[0]?.proto
   const DoorProto = items?.doors[0]?.proto


    // console.log(items?.poster?.image)
    // console.log("all items", items)

    // const image = items?.poster?.image

    function postersProcessor(plane) {
        // console.log("plane",plane)
        // console.log("items processor",items?.posters)
        let postersNum = items?.posters?.length
        let posters = items?.posters
        // console.log(postersNum)

        let postersComponents = []
        for (let i = 0; i < postersNum; i++) {
            if (posters[i].wall == plane) {
                // postersComponents.push(<Poster data={posters[i]} key={i} handleClick={handleClick}></Poster>)

                // postersComponents.push(<{doorProto} data={posters[i]} key={i} handleClick={handleClick}></Poster>)
                // postersComponents.push(<div>{React.cloneElement(doorProto, {data:posters[i],key:{i},handleClick:{handleClick}} )}</div>)
                postersComponents.push(<PosterProto data={posters[i]} key={i} handleClick={handleClick} />)
            }
            // console.log(posters[i])
        }
        // console.log("test",postersComponents)
        return <div>{postersComponents}</div>
    }
    // postersProcessor("")

    function doorsProcessor(plane) {
        let doorsNum = items?.doors?.length;
        let doors = items?.doors
        console.log(items?.doors)

        let doorsComponenets = []
        for (let i = 0; i < doorsNum; i++) {
            //const DoorProto = doors[i].proto
            console.log(doors[i]?.wall == plane)
            if (doors[i].wall == plane) {
                doorsComponenets.push(<DoorProto data={items.doors[i]} key={i}></DoorProto>)
            }
            console.log("DOORS",doors[i])
        }
        console.log(doorsComponenets)
        return <div>{doorsComponenets}</div>
    }
    //doorsProcessor("")


    function universalItemProcessor(plane) {
        const categories = Object.keys(items);
        console.log("universal: ", categories);

        for (let i = 0; i < categories.length; i++) {
            console.log(categories[i], items[categories[i]]) // str works as a way to access obj prop val
        }
    }
   // universalItemProcessor();



    return (
        <div className='genericRoom'>genericRoom: {data?.roomName}
            <div className='genericRoomOrigin' style={{left: roomOffset, top: roomOffsetVert}}>
                <div    className="floor" style={{
                                backgroundColor: data?.floorColor,
                                width: data?.roomWidth,
                                height: data?.roomLength,                              
                                }}>floor
                    {items?.bathtub && <Bathtub data={items?.bathtub}></Bathtub>}
                    {items?.placeholderBox && <PlaceholderBox data={items?.placeholderBox}></PlaceholderBox>}
                    {items?.tvs && <Television data={tvData}/>}
                    <div className="leftClip clipping" style={{
                                width: data?.roomWidth + 25,
                                top: data?.roomLength,                              
                                }}>leftClip</div>
                    <div className="rightClip clipping" style={{
                                height: data?.roomLength + 25,                              
                                }}>rightClip</div>
                        {/* {items?.poster?.wall == "floor" && <Poster data={items} handleClick={handleClick} image={image}/>} */}
                </div>
                <div className="rightWall" style={{
                                backgroundColor: data?.rightWallColor,
                                width: data?.roomWidth,
                                height: data?.roomHeight, 
                                }}>rightWall
                    {/* {items?.poster?.wall == "right" && <Poster data={items} handleClick={handleClick} image={items?.poster?.image}/>} */}
                    
                    {postersProcessor("right")}
                    {doorsProcessor("right")}
                    
                    {/* {items?.door?.wall == "right" && <Door data={items}/>} */}
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
                    {/* {items?.door?.wall == "left" && <Door data={items}/>} */}

                    {postersProcessor("left")}
                    {doorsProcessor("left")}

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