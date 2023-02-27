import { Link } from 'react-router-dom';

const Bedroom = ({handleClick}) => {
    return (
        <div className="genericRoom bedroom">Bedroom
            <div className="genericRoomOrigin bedroomOrigin">
                <div className="floor">floor
                    <div className="leftClip clipping">leftClip</div>
                    <div className="rightClip clipping">rightClip</div>
                    <div className="carpet">carpet</div>
                    {/* <div className="floorLight">light</div> */}
                </div>
                <div className="rightWall">rightWall
                    <div className="door">door
                        < Link to={`/hall`} />
                    </div>
                    <div className="rightClip clipping">rightClip</div>
                    <div className="topClip clipping">topClip</div>
                    <div className="wallLight">light</div>
                    <div className="poster" onClick={handleClick}>poster</div>
                </div>
                <div className="leftWall">leftWall
                    <div className="window">window</div>
                    <div className="leftClip clipping">leftClip</div>
                    <div className="topClip clipping">topClip</div>
                </div>
            </div>
        </div>
    );
}

export default Bedroom;