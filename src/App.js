import "./styles/general.css"
import { 
   Route, 
   Routes, 
   Navigate, 
   useLocation, // ... >:[
   useOutlet
  } from 'react-router-dom';
import GenericRoom from './rooms/genericRoom';
import Navbar from './navbar';
import Bedroom from './rooms/bedroom';
import Hall from './rooms/hall';
import Bathroom from './rooms/bathroom';
import Storage from './rooms/storage';
import Popup from './functionalComponents/popup';
import CourageView from './rooms/courageView';
import { useState, useEffect } from "react";
import { CSSTransition, SwitchTransition } from 'react-transition-group'

import { backroomsGen } from './backGen.js'

function App() {
  console.log("%cApp","color: pink")
  let location = useLocation();
  const currentOutlet = useOutlet(); // ???
  const [fadingOut, setFading] = useState(false);
  const [popup, setPopup] = useState(false);
  const [popElement, setPopElement] = useState(null);
  
  function handleClick(e) {
    const exceptions = ["blackboardCanvas","arrow"]
    // setFading(!fadingOut)

    if (!exceptions.some(ex => e.target.classList.contains(ex))) {
      setPopup(!popup) // don't close popup window when clicked on exception
      if (e.target.classList.contains("blackboard")) {
        setPopElement("blackboard")
      } else {
        setPopElement(e.target)
      }
      console.log("EVENT ELEMENT CLICKED POPUP",e.target.classList.contains("blackboard"))
    }

  }

  // const currentOutlet = useOutlet()
  // const { nodeRef } =
  //   routes.find((route) => route.path === window.location) ?? {}
  
  // const [backrooms, setBackrooms] = useState(() => {
  //     const storedHouse = localStorage.getItem('backrooms');
  //     return storedHouse !== null ? storedHouse : backroomsGen();
  //   }); // maybe it works

  const [backrooms, setBackrooms] = useState(backroomsGen(handleClick));
  const [links, setLinks] = useState(() => {
    let links = []
    for (let room of backrooms.props.children) links.push(room.props.path)
    return links
  })

  return (
    <div className="App" style={fadingOut ? {filter: 'blur(33px)'} : undefined }>
        <header className="App-header">
          <Navbar links={links}/>
        </header>
        <div className="container">
          <SwitchTransition>
            <CSSTransition key={location.pathname } timeout={400} classNames="fade" unmountOnExit>
              <Routes location={location}>
                <Route exact path="/" element={<Navigate to="/bedroom" />} />
                <Route path="/bedroom" element={<Bedroom handleClick={handleClick} />} />
                <Route path="/hall" element={<Hall handleClick={handleClick}/>} />
                <Route path="/storage" element={<Storage handleClick={handleClick}/>} />
                <Route path="/bathroom" element={<Bathroom handleClick={handleClick}/>} />
                <Route path="/courageView" element={<CourageView />} />
                <Route path="/genericRoom" element={<GenericRoom />} />
              {backrooms}
              </Routes>
            </CSSTransition>
          </SwitchTransition>
        </div>
        <Popup trigger={popup} popElement={popElement} handleClick={handleClick}/>
      </div>
  );
}

export default App;


