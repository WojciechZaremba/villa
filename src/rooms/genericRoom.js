
// import Bed from "../items/bed"

const GenericRoom = ({data, items, customOriginClass = ""}) => {

    const roomOffset = (data?.roomLength - (data?.roomWidth + data?.roomLength) / 2) * .7
    const roomOffsetVert = (data?.roomHeight - data?.roomHeight / 2)

    
    function furnitureAbstract(place) {
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
                if (place !== thing?.wall) continue
                furniture.push(<thing.proto key={furniture.length} data={thing} />)
            }
        }

        return (<>{furniture}</>)
    }

    return (
        <div className='genericRoom'>
            genericRoom: {data?.roomName}
            <div className={'genericRoomOrigin' + " " + customOriginClass} style={{ left: roomOffset, top: roomOffsetVert}}>
                <div className="floor" style={{ backgroundColor: data.floorColor, width: data?.roomWidth, height: data?.roomLength,}}>
                    floor
                    {furnitureAbstract("floor")}
                    <div className="leftClip clipping" style={{ width: data?.roomWidth + 25, top: data?.roomLength}}>
                        leftClip
                    </div>
                    <div className="rightClip clipping" style={{ height: data?.roomLength + 25}}>
                        rightClip
                    </div>
                </div>
                <div className="rightWall" style={{backgroundColor: data?.rightWallColor || data?.wallsColor, width: data?.roomWidth, height: data?.roomHeight}}>
                    rightWall
                    {furnitureAbstract("right")}
                    {/*doors("right")*/} {/*use only when furnitureAbstract doesn't render doors properly
                    may cause a double rendering of the doors*/}
                    <div className="rightClip clipping" style={{height: data?.roomHeight + 25 }}>
                        rightClip
                    </div>
                    <div className="topClip clipping"style={{width: data?.roomWidth + 25,top: data?.roomHeight}}>
                        topClip
                    </div>
                </div>
                <div className="leftWall" style={{ backgroundColor: data?.leftWallColor || data?.wallsColor, width: data?.roomLength, height: data?.roomHeight}}>
                    leftWall
                    {furnitureAbstract("left")}
                    {/*doors("left")*/} {/*use only when furnitureAbstract doesn't render doors properly
                    may cause a double rendering of the doors*/}
                    <div className="leftClip clipping" style={{ height: data?.roomHeight + 25}}>
                        leftClip
                    </div>
                    <div className="topClip clipping" style={{ width: data?.roomLength + 25, top: data?.roomHeight}}>
                        topClip
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GenericRoom