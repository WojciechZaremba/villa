import "./styles/general.css"
import { 
	Route, 
	Routes, 
	Navigate, 
	useLocation,
	// useOutlet
} from 'react-router-dom';
import { useState, useEffect, createContext } from "react"
import { CSSTransition, SwitchTransition } from 'react-transition-group'
  
import GenericRoom from './rooms/genericRoom'
import Navbar from './navbar'
import Bedroom from './rooms/bedroom'
import Hall from './rooms/hall'
import Bathroom from './rooms/bathroom'
import Storage from './rooms/storage'
import Popup from './functionalComponents/popup'
import CourageView from './rooms/courageView'

import { backroomsGen } from './backGen.js'

export const handler = createContext()

function App() {
  console.log("%cApp","color: pink")
  let location = useLocation()
//   const currentOutlet = useOutlet() // ???
  const [fadingOut, setFading] = useState(false)
  const [popup, setPopup] = useState(false)
  const [popElement, setPopElement] = useState(null)
  const [roomRotation, setRoomRotation] = useState([60,0,45])
  const [interval, setInter] = useState(null)
  
  const xRotationValues = [-15, 0, 15]
  const yRotationValues = [-15, 0, 15]
  const zRotationValues = [-15, 0, 15]
  // const xRotationValues = [45, 60, 75]
  // const yRotationValues = [-15, 0, 15]
  // const zRotationValues = [30, 45, 60]
  
  useEffect(() => {
    console.log("%conly once","color: yellow", document.querySelector(".genericRoomOrigin"))
  },[])

  useEffect(() => {
    console.log("LOCATION")
    let x = xRotationValues[Math.floor(Math.random() * 3)]
    let y = yRotationValues[Math.floor(Math.random() * 3)]
    let z = zRotationValues[Math.floor(Math.random() * 3)]
    setRoomRotation([x,y,z])
    console.log(roomRotation)
    // const currentRoom = document.querySelector(".backroomOrigin")
    // currentRoom.style.transform = `rotateX(${x}deg) rotateY(${y }deg) rotateZ(${z}deg)`
    const back = document.querySelector(".backroomOrigin")
    const any = document.querySelector(".genericRoomOrigin")
    console.log("back", back)
    console.log("any", any)
    if (back && interval === null) {
      // document.querySelector(".container").style.transform = `rotateX(${x}deg) rotateY(${y}deg)`
      document.querySelector(".container").style.transform = `rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z}deg)`
      setInter(setInterval(function () {
        document.querySelector(".container").style.transform = `rotateX(${yRotationValues[Math.floor(Math.random() * 3)]}deg) rotateY(${yRotationValues[Math.floor(Math.random() * 3)]}deg) rotateZ(${yRotationValues[Math.floor(Math.random() * 3)]}deg)`
      }, 10000))
    } else if (back === null) {
      // document.querySelector(".container").style.transform = `rotateX(${0}deg) rotateY(${0}deg)`
      document.querySelector(".container").style.transform = `rotateX(${0}deg) rotateY(${0}deg) rotateZ(${0}deg)`
    }

    return (() => {
      const returned = document.querySelector(".genericRoomOrigin")
      console.log("%creturned","color: red",returned)

      console.log("return of use effect in app's use effect")
      clearInterval(interval) // mutuation?
      setInter(null)
  })

},[location])
// TODO: move swaying logic to the new useEffect
useEffect(() => {
	const loc = window.location.pathname
	const pathsHouse = /\/bedroom|\/bathroom|\/hall|\/storage/
	const pathsBackrooms = /\/gen/
	const matchHouse = loc.match(pathsHouse) !== null
	const matchBackrooms = loc.match(pathsBackrooms) !== null
	if (matchHouse) {
		setTimeout(()=>{
			console.log("%cyou're back home","color: green")
			document.querySelector(".container").style.transform = ""
			document.querySelector(".container").style.transition = "0s"
			clearInterval(interval)
			setInter(null)
		},400)
	} else if (matchBackrooms) {
		console.log("%cyou're in the backrooms","background: red")
	}
	
},[window.location.pathname])

  function handleClickFun(e) {
    const exceptions = ["blackboardCanvas","arrow"]
    // setFading(!fadingOut)
    console.log(e)
    if (!exceptions.some(ex => e.target.classList.contains(ex))) {
      setPopup(!popup) // don't close popup window when clicked on exception
      if (e.target.classList.contains("blackboard")) {
        setPopElement("blackboard")
      } else {
        setPopElement(e.target)
      }
    }
  }

  const handleClickContext = createContext(handleClickFun)


  // const currentOutlet = useOutlet()
  // const { nodeRef } =
  //   routes.find((route) => route.path === window.location) ?? {}
  
  // const [backrooms, setBackrooms] = useState(() => {
  //     const storedHouse = localStorage.getItem('backrooms');
  //     return storedHouse !== null ? storedHouse : backroomsGen();
  //   }); // maybe it works

  const [backrooms, setBackrooms] = useState(backroomsGen());
  const [backLinks, setLinks] = useState(() => {
    let backLinks = []
    for (let room of backrooms.props.children) backLinks.push(room.props.path)
    return backLinks
  })

  return (
    <div className="App" style={fadingOut ? {filter: 'blur(33px)'} : undefined }>
      <handler.Provider value={handleClickFun}>
        <header className="App-header">
          <Navbar backLinks={backLinks}/>
        </header>
        <div className="container">
          <SwitchTransition>
            <CSSTransition key={location.pathname} timeout={400} classNames="fade" unmountOnExit>
              <Routes location={location}>
                <Route exact path="/" element={<Navigate to="/bedroom" />} />
                <Route path="/bedroom" element={<Bedroom />} />
                <Route path="/hall" element={<Hall />} />
                <Route path="/storage" element={<Storage />} />
                <Route path="/bathroom" element={<Bathroom />} />
                <Route path="/courageView" element={<CourageView />} />
                <Route path="/genericRoom" element={<GenericRoom />} />
              {backrooms}
              </Routes>
            </CSSTransition>
          </SwitchTransition>
        </div>
        <Popup trigger={popup} popElement={popElement} />
      </handler.Provider>
      </div>
  );
}

export { App } ;


