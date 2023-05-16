import { useState, useEffect } from 'react'

const BlackBoardCanvas = () => {
return (    <>

        <div className="blackboardCanvas">
            <div className="blackboardCanvas" style={{height: "640px", width: "480px", border: "20px groove burlywood", backgroundColor: "#4D5D53"}}>
                <canvas className="blackboardCanvas" id="myCanvas" width="480" height="640">
                </canvas>
            </div>
        </div>

        {/* <div style={{ width:"480", height:"140", border: "10px groove burlywood", backgroundColor: "#4D5D53"}}></div> */}
        <div className="blackboardCanvas" style={{height: "80px", width: "500px", border: "10px solid burlywood", backgroundColor: "bisque"}}>
            </div>
        </>
        )
}

export default BlackBoardCanvas