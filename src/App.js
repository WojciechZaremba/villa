import { createRef } from 'react'
import { createRoot } from 'react-dom/client'
import "./styles/general.css"
import { 
   Route, 
   Routes, 
   Navigate, 
   useLocation, 
   useOutlet, 
   createBrowserRouter 
  } from 'react-router-dom';
import GenericRoom from './rooms/genericRoom';
import Navbar from './navbar';
import Bedroom from './rooms/bedroom';
import Hall from './rooms/hall';
import Bathroom from './rooms/bathroom';
import Storage from './rooms/storage';
import Popup from './functionalComponents/popup';
import CourageView from './rooms/courageView';
import { useState } from "react";
import { CSSTransition, SwitchTransition } from 'react-transition-group'




function App() {
  let location = useLocation();
  const currentOutlet = useOutlet();
  const [fadingOut, setFading] = useState(false);
  const [popup, setPopup] = useState(false);
  const [popElement, setPopElement] = useState(null);
  function handleClick(e) {
    // setFading(!fadingOut)
    setPopup(!popup)
    setPopElement(e.target)
    console.log(popElement)
    console.log(e.target)
  }
  // const currentOutlet = useOutlet()
  // const { nodeRef } =
  //   routes.find((route) => route.path === window.location) ?? {}
  return (
    // <Router>
      <div className="App" style={fadingOut ? {filter: 'blur(33px)'} : undefined }>
        <header className="App-header">
          <Navbar />
        </header>
        <div className="container">
          <SwitchTransition>
            <CSSTransition key={location.pathname} timeout={400} classNames="fade" unmountOnExit>
              <Routes location={location}>
                <Route exact path="/" element={<Navigate to="/bedroom" />} />
                <Route path="/bedroom" element={<Bedroom handleClick={handleClick} />} />
                <Route path="/hall" element={<Hall handleClick={handleClick}/>} />
                <Route path="/storage" element={<Storage handleClick={handleClick}/>} />
                <Route path="/bathroom" element={<Bathroom handleClick={handleClick}/>} />
                <Route path="/courageView" element={<CourageView />} />
                <Route path="/genericRoom" element={<GenericRoom />} />
              </Routes>
            </CSSTransition>
          </SwitchTransition>
        </div>
        <Popup trigger={popup} popElement={popElement} handleClick={handleClick}/>
      </div>
    // </Router>
  );
}

export default App;


