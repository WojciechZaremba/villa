import { useState, useEffect, useRef } from 'react'

const BlackBoardCanvas = () => {

        const canvasRef = useRef(null)
        
        useEffect(() => {
            const savedImageData = localStorage.getItem('savedImage')
            const parsedData = JSON.parse(savedImageData)
            const image = new Image()
            image.src = parsedData

            let coord = { x: 0, y: 0 }

            const board = document.getElementById("myCanvas")

            const canvas = canvasRef.current
            const context = canvas.getContext('2d')

            context.drawImage(image, 0, 0)

            // context.fillStyle = '#fff'
            // context.fillRect(50, 50, 100, 250)
            
            const draw = (e) => {
                context.beginPath()
                context.lineWidth = 5
                context.lineCap = 'round'
                context.strokeStyle = 'ivory'
                context.moveTo(coord.x, coord.y)
                coord.x = e.offsetX
                coord.y = e.offsetY
                context.lineTo(coord.x, coord.y)
                context.stroke()

                // console.log(coord)
                // console.log('coords:', e.offsetX, e.offsetY)
            }
            const start = (e) => {
                board.addEventListener("mousemove", draw)
                coord.x = e.offsetX
                coord.y = e.offsetY
            }
            const stop = () => {
                board.removeEventListener("mousemove", draw)
            }

            board.addEventListener('mousedown', start)
            document.addEventListener('mouseup', stop)

            console.log("body of USE EFFECT HERE ******************************************")

            return () => {
                console.log("RETURN OF USE EFFECT HERE ******************************************")
                board.removeEventListener('mousedown', start)
                document.removeEventListener('mouseup', stop)
                const image = new Image()
                image.src = canvas.toDataURL()
                const imageData = JSON.stringify(image.src)
                localStorage.setItem('savedImage', imageData)
              }

        }, [])


return (    <>

        <div className="blackboardCanvas">
            <div className="blackboardCanvas" style={{height: "640px", width: "480px", border: "20px groove burlywood", backgroundColor: "#4D5D53"}}>
                <canvas ref={canvasRef} className="blackboardCanvas" id="myCanvas" width="480" height="640">
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