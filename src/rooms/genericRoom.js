const GenericRoom = () => {
    return (
        <div className='genericRoom'>genericRoom
            <div className='genericRoomOrigin'>
                <div className="floor">floor
                    <div className="leftClip clipping">leftClip</div>
                    <div className="rightClip clipping">rightClip</div>
                </div>
                <div className="rightWall">rightWall
                    <div className="rightClip clipping">rightClip</div>
                    <div className="topClip clipping">topClip</div>
                </div>
                <div className="leftWall">leftWall
                    <div className="leftClip clipping">leftClip</div>
                    <div className="topClip clipping">topClip</div>
                </div>
            </div>
        </div>
    );
}

export default GenericRoom