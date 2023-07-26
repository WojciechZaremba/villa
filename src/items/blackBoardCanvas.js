import { useState, useEffect, useRef } from 'react'

const BlackBoardCanvas = () => {
    const [ereaser, setEreaser] = useState(false)
    const canvasRef = useRef(null)
    
    useEffect(() => {
        const drawingDoneEvent = new Event("imageChanged")

        const savedImageData = localStorage.getItem('savedImage')
        const parsedData = JSON.parse(savedImageData)
        const image = new Image()
        image.src = parsedData

        let coord = { x: 0, y: 0 }

        const board = document.getElementById("myCanvas")
        const buttons = document.querySelectorAll(".buttons")

        const canvas = canvasRef.current
        const context = canvas.getContext('2d')

        image.onload = function () {
            context.drawImage(image, 0, 0)
            }
        // context.fillStyle = '#fff'
        // context.fillRect(50, 50, 100, 250)
        const draw = (e) => {
            context.beginPath()
            if (ereaser) {
                context.lineWidth = 65
                context.lineCap = 'square'
                context.strokeStyle = '#4D5D53'
            } else if (!ereaser) {
                context.lineWidth = 5
                context.lineCap = 'round'
                context.strokeStyle = 'ivory'
            }
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

        const handleButtons = (e) => {
            console.log(e.target)
            console.log(e.target.id)
            if (e.target.id === "chalk") {
                setEreaser(false)
            } else if (e.target.id === "ereaser") {
                setEreaser(true)
            }
        }

        board.addEventListener('mousedown', start)
        document.addEventListener('mouseup', stop)
        buttons.forEach(button => button.addEventListener('click', handleButtons))

        console.log("body of USE EFFECT HERE ******************************************")

        return () => {
            console.log("RETURN OF USE EFFECT HERE ******************************************")
            buttons.forEach(button => button.removeEventListener('click', handleButtons))
            board.removeEventListener('mousedown', start)
            document.removeEventListener('mouseup', stop)
            const image = new Image()
            image.src = canvas.toDataURL()
            const imageData = JSON.stringify(image.src)
            localStorage.setItem('savedImage', imageData)
            window.dispatchEvent(drawingDoneEvent)
            }

    }, [ereaser])


    return (<><div className="blackboardCanvas">
            <div className="blackboardCanvas" style={{height: "640px", width: "480px", border: "20px groove burlywood", backgroundColor: "#4D5D53"}}>
                <canvas ref={canvasRef} className="blackboardCanvas" id="myCanvas" width="480" height="640">
                </canvas>
            </div>
        </div>

        {/* <div style={{ width:"480", height:"140", border: "10px groove burlywood", backgroundColor: "#4D5D53"}}></div> */}
        <div className="blackboardCanvas" 
            style={{height: "80px", 
                width: "500px", 
                border: "10px solid burlywood", 
                backgroundColor: "bisque"}}>
            <span id="chalk" className="blackboardCanvas buttons">CHALK</span><br/>
            <span id="ereaser" className="blackboardCanvas buttons">EREASER</span>
        </div></>)
}

export default BlackBoardCanvas