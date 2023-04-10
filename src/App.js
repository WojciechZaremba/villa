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

// for rooms generator:
import Door from './items/door';
import Poster from './items/poster';
import TV from './items/tv';
// import GenRoom from './generatedRoom'




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



    // rooms number: 5 - 10
    // rooms dimensions: 300 - 800
    // rooms doors: 1 - 2
    // hall doors: unlimited

    // Tree:
    // root: hall
    // branches: rooms
    // branch max length: 2

    // furniture: posters, doors, tvs

    // doesn't matter if the rooms overlap
    // \/ \/ \/ \/ \/ \/ \/ \/ \/ \/ \/ \/
  const randRoomsGenerator = function() {
    const roomsNumber = Math.floor(Math.random() * 5 + 5) // 5 - 10
    const randDimension = () => Math.floor(Math.random() * 500 + 300) // 300 - 800
    const randColor = () => Math.floor(Math.random() * 0xFFFFFF).toString(16) // all hex colors


    ///// CREATE A TREE
    const root = {
      roomId: 0,
      path: "/gen0",
      parent: null,
      children: [],
      doorsNum: 0,
      data: {
          roomWidth: randDimension(),
          roomLength: randDimension(),
          wallsColor: randColor(),
          floorColor: randColor(),
          items: {
            posters: null,
            tvs: null,
            placeholders: null,
            doors: []
          },
        }
    }

    const genRoomsArr = [root]
  
    for (let i = 1; i <= roomsNumber; i++) {
      let parent = root
      if (Math.random() < i / roomsNumber && genRoomsArr.length) {
        parent = genRoomsArr[Math.floor(Math.random() * genRoomsArr.length)];
      }
      const node = {
        roomId: i,
        path: `/gen${i}`,
        parent: parent,
        children: [],
        doorsNum: 1,
        data: {
          roomWidth: randDimension(),
          roomLength: randDimension(),
          roomHeight: 300,
          wallsColor: randColor(),
          floorColor: randColor(),
          items: {
            posters: null,
            tvs: null,
            placeholders: null,
            doors: [{
              proto: Door,
              route: parent.path,
              wall: "right",
              styles: {
                  left: 50,
                  background: "Pink",
                  },
                }]
              },
        }
      }
      genRoomsArr.push(node)
      parent.children.push(node)
      parent.doorsNum++
    }

    ///// ADD DOORS TO THE NODES
    for (let i = 0; i < genRoomsArr.length; i++) {
      const currRoom = genRoomsArr[i]
      const currDoors = currRoom.data.items.doors

      console.log('room', i, "has", currRoom.doorsNum, 'doors')
      console.log(currRoom.children.length,"doors lead to the deeper rooms")

      
      for (let j = 0; j < currRoom.children.length; j++) {
        const currRoute = currRoom.children[j].path
        currDoors.push({
          proto: Door,
          route: currRoute,
          wall: "right",
          styles: {
              left: 50,
              background: "Pink",
              },
            })
        // const currRoute = currRoom.children?.[j].path
        // currRoom.items.doors.push({proto: Door, route: currRoute})
      }
    }

    ///// CREATE READY ROOMS
    const ready = []
    for (let i = 0; i < genRoomsArr.length; i++) {
      const data = genRoomsArr[i].data
      const items = genRoomsArr[i].data.items
      const route = genRoomsArr[i].path
      console.log(route)

      ready.push(<Route id={i} path={route} 
        element={<GenericRoom data={data} items={items} handleClick={handleClick} />} />)
      // ready.push(<Route key={i} path={i} 
      //   element={ <GenericRoom data={data} items={items} handleClick={handleClick} />} 
      //   />)
    }
    console.log("ready",typeof ready)

    return (<>{ready}</>)
  }

  console.log(randRoomsGenerator())

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
                <>
                <Route exact path="/" element={<Navigate to="/bedroom" />} />
                </>
                <Route path="/bedroom" element={<Bedroom handleClick={handleClick} />} />
                <Route path="/hall" element={<Hall handleClick={handleClick}/>} />
                <Route path="/storage" element={<Storage handleClick={handleClick}/>} />
                <Route path="/bathroom" element={<Bathroom handleClick={handleClick}/>} />
                <Route path="/courageView" element={<CourageView />} />
                <Route path="/genericRoom" element={<GenericRoom />} />
              {randRoomsGenerator()}
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


