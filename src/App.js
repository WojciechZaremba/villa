import { createRef } from 'react'
import { createRoot } from 'react-dom/client'
import { 
  BrowserRouter as Router,
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
import CourageView from './rooms/courageView';
import Hall from './rooms/hall';
import { useState } from "react";
import { CSSTransition, SwitchTransition } from 'react-transition-group'


const routes = [
  {path: '/bedroom', name: 'Bedroom', element: <Bedroom />, nodeRef: createRef()},
  {path: '/hall', name: 'Hall', element: <Hall />, nodeRef: createRef()}
]

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: routes.map((route) => ({
      index: route.path === '/',
      path: route.path === '/' ? undefined : route.path,
      element: route.element
    }))
  }
])

function App() {
  const [fadingOut, setFading] = useState(false);
  function handleClick() {
    setFading(!fadingOut)
  }
  const currentOutlet = useOutlet()
  const { nodeRef } =
    routes.find((route) => route.path === window.location) ?? {}
  return (
    <Router>
      <div className="App" style={fadingOut ? {filter: 'blur(3px)'} : undefined }>
        <header className="App-header" >ererererrtrtrtrt
        <Navbar />
        </header>
        <Routes>
          <Route exact path="/" element={<Navigate to="/bedroom" />}>
            
          </Route>
          <Route path="/bedroom" element={<Bedroom handleClick={handleClick} />} />
          <Route path="/hall" element={<Hall handleClick={handleClick}/>} />
          <Route path="/courageView" element={<CourageView />} />
          <Route path="/genericRoom" element={<GenericRoom />} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;


