
// import Bed from "../items/bed"

const GenericRoom = ({data, items, handleClick, customOriginClass = ""}) => {

    const roomOffset = (data?.roomLength - (data?.roomWidth + data?.roomLength) / 2) * .7
    const roomOffsetVert = (data?.roomHeight - data?.roomHeight / 2)
    
    // TODO: abstract s \/  \/  \/
    function placeholderBoxes() {
        let placeholderBoxesNum = items?.placeholderBoxes?.length
        let placeholderBoxes = items?.placeholderBoxes

        let placeholderBoxesComponents = []
        for (let i = 0; i < placeholderBoxesNum; i++) {
            let ComponentProto = placeholderBoxes[i].proto
            placeholderBoxesComponents.push(<ComponentProto data={placeholderBoxes[i]} 
                                                            key={i} 
                                                            handleClick={handleClick}/>)
        }
        return <>{placeholderBoxesComponents}</>
    }
    function tvs() {
        let tvsNum = items?.tvs?.length
        let tvs = items?.tvs

        let tvsComponents = []
        for (let i = 0; i < tvsNum; i++) {
            let ComponentProto = tvs[i].proto
            tvsComponents.push(<ComponentProto  data={tvs[i]} 
                                                key={i} 
                                                handleClick={handleClick}/>)
        }
        return <>{tvsComponents}</>
    }
    function blackboards() {
        let blackboardsNum = items?.blackboards?.length
        let blackboards = items?.blackboards

        let blackboardsComponents = []
        for (let i = 0; i < blackboardsNum; i++) {
            let ComponentProto = blackboards[i].proto
            blackboardsComponents.push(<ComponentProto  data={blackboards[i]} 
                                                        key={i} 
                                                        handleClick={handleClick}/>)
        }
        return <>{blackboardsComponents}</>
    }
    function bathtubs() {
        let bathtubsNum = items?.bathtubs?.length
        let bathtubs = items?.bathtubs

        let bathtubsComponents = []
        for (let i = 0; i < bathtubsNum; i++) {
            let ComponentProto = bathtubs[i].proto
            bathtubsComponents.push(<ComponentProto data={bathtubs[i]} 
                                                    key={i} 
                                                    handleClick={null}/>)
        }
        return <>{bathtubsComponents}</>
    }
    function tvCabinets() {
        let tvCabinetsNum = items?.tvCabinets?.length
        let tvCabinets = items?.tvCabinets

        let tvCabinetsComponents = []
        for (let i = 0; i < tvCabinetsNum; i++) {
            let ComponentProto = tvCabinets[i].proto
            tvCabinetsComponents.push(<ComponentProto   data={tvCabinets[i]} 
                                                        key={i} 
                                                        handleClick={null}/>)
        }
        return <>{tvCabinetsComponents}</>
    }
    function comfyChairs() {
        let chairsNum = items?.comfyChairs?.length
        let chairs = items?.comfyChairs

        let chairsComponents = []
        for (let i = 0; i < chairsNum; i++) {
            let ComponentProto = chairs[i].proto
            chairsComponents.push(<ComponentProto   data={chairs[i]} 
                                                    key={i} 
                                                    handleClick={null}/>)
        }
        return <>{chairsComponents}</>
    }
    function posters(plane) {
        let postersNum = items?.posters?.length
        let posters = items?.posters

        let postersComponents = []
        for (let i = 0; i < postersNum; i++) {
            if (posters[i].wall === plane) {
                let ComponentProto = posters[i].proto
                postersComponents.push(<ComponentProto  data={posters[i]} 
                                                        key={i} 
                                                        handleClick={handleClick} />)
            }
        } 
        return <>{postersComponents}</>
    }

    function doors(plane) {
        let doorsNum = items?.doors?.length
        let doors = items?.doors

        let doorsComponenets = []
        for (let i = 0; i < doorsNum; i++) {
            if (doors[i].wall === plane) {
                let ComponentProto = doors[i].proto
                doorsComponenets.push(<ComponentProto   data={items.doors[i]} 
                                                        key={i}/>)
            }
        }
        return  (<div className="doors" style={{display: 'flex', justifyContent: "space-around"}}>
                {doorsComponenets}
                </div>)
    }

    function furnitureAbstract(place) {
        // if (Object.keys(items)[Symbol.iterator] !== 'function') {
        //     return console.error("You made a mistake - Object.keys(items) is not iterable");
        // }
        console.log("iterable? ", typeof Object.keys(items)[Symbol.iterator])
        const furniture = []
        for (let key of Object.keys(items)) {
            //* a 'thing' is an individual item, eg. chair or tv, when 'items' is a container of all furniture
            //* and 'things' is a container of all the 'thing's of the same category
            //* thing < things / item < items 
            // const thingsNum = items[key]?.length
            const things = items[key]
            if (things === null || things === undefined) {
                return console.error("You made a mistake - things is null or undefined")
            }
            if (typeof Object.keys(things)[Symbol.iterator] !== 'function') {
                return console.error("You made a mistake - Object.keys(things) is not iterable")
            }
            for (let thing of things) {
                if (place !== thing.wall) continue
                furniture.push(<thing.proto key={furniture.length} data={thing} handleClick={handleClick}/>)
            }
        }

        return (<>{furniture}</>)
    }
    console.log(furnitureAbstract())
    function furniture() {
        return (<>
            {placeholderBoxes()}
            {bathtubs()}
            {tvs()}
            {blackboards()}
            {comfyChairs()}
            {tvCabinets()}
            </>)
    }

    // function universalItem(plane) {
    //     const categories = Object.keys(items);
    //     for (let i = 0; i < categories.length; i++) {
    //         // console.log(categories[i], items[categories[i]]) // str works as a way to access obj prop val
    //     }
    // }

    return (
        <div className='genericRoom'>genericRoom: {data?.roomName}
            <div className={'genericRoomOrigin' + " " + customOriginClass} 
                    style={{left: roomOffset, top: roomOffsetVert}}>
                <div className="floor" 
                        style={{
                        backgroundColor: data.floorColor,
                        width: data?.roomWidth,
                        height: data?.roomLength,}}>floor

                    {/* {furniture()} */}
                    {furnitureAbstract("floor")}

                    <div className="leftClip clipping" 
                        style={{
                        width: data?.roomWidth + 25,
                        top: data?.roomLength,}}>leftClip</div>
                    <div className="rightClip clipping" 
                        style={{height: data?.roomLength + 25,
                        }}>rightClip</div>
                </div>
                <div className="rightWall" 
                        style={{
                        backgroundColor: data?.rightWallColor || data?.wallsColor,
                        width: data?.roomWidth,
                        height: data?.roomHeight, 
                        }}>rightWall
                    {furnitureAbstract("right")}
                    {doors("right")} {/*use only when furnitureAbstract doesn't render doors properly
                    may cause a double rendering of the doors*/}
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
                    {furnitureAbstract("left")}
                    {doors("left")} {/*use only when furnitureAbstract doesn't render doors properly
                    may cause a double rendering of the doors*/}
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