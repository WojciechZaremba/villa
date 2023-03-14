import { createRef } from 'react'
import { createRoot } from 'react-dom/client'
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
import CourageView from './rooms/courageView';
import { useState } from "react";
import { CSSTransition, SwitchTransition } from 'react-transition-group'




function App() {
  let location = useLocation();
  const currentOutlet = useOutlet();
  const [fadingOut, setFading] = useState(false);
  function handleClick() {
    setFading(!fadingOut)
  }
  // const currentOutlet = useOutlet()
  // const { nodeRef } =
  //   routes.find((route) => route.path === window.location) ?? {}
  return (
    // <Router>
      <div className="App" style={fadingOut ? {filter: 'blur(3px)'} : undefined }>
        <header className="App-header" >ererererrtrtrtrt
        <Navbar />
        </header>
        <div className="container">
          <SwitchTransition>
            <CSSTransition key={location.pathname} timeout={800} classNames="fade" unmountOnExit>
              <Routes location={location}>
                <Route exact path="/" element={<Navigate to="/bedroom" />} />
                <Route path="/bedroom" element={<Bedroom handleClick={handleClick} />} />
                <Route path="/hall" element={<Hall handleClick={handleClick}/>} />
                <Route path="/courageView" element={<CourageView />} />
                <Route path="/genericRoom" element={<GenericRoom />} />
              </Routes>
            </CSSTransition>
          </SwitchTransition>
        </div>
      </div>
    // </Router>
  );
}

export default App;


