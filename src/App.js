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
import { useState, useEffect } from "react";
import { CSSTransition, SwitchTransition } from 'react-transition-group'

// for rooms generator:
import Door from './items/door';
import Poster from './items/poster';
import TV from './items/tv';
// import GenRoom from './generatedRoom'

import {backroomsGen, treeGen} from './backGen.js'


function App() {
  console.log("%cApp","color: pink")
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

    // useEffect(() => {
      //   randRoomsGenerator()
  // }, [])






  // const treeGen = function() {
  //   console.log("treeGen")
  //    // console.log("here here",localStorage.getItem('house'))

  //   const roomsNumber = Math.floor(Math.random() * 5 + 5) // 5 - 10
  //   const randDimension = () => Math.floor(Math.random() * 500 + 300) // 300 - 800
  //   const randColor = () => Math.floor(Math.random() * 0xFFFFFF).toString(16) // all hex colors


  //   ///// CREATE A TREE
  //   const root = {
  //     roomId: 0,
  //     path: "/gen0",
  //     parent: null,
  //     children: [],
  //     doorsNum: 0,
  //     data: {
  //         roomWidth: randDimension(),
  //         roomLength: randDimension(),
  //         wallsColor:`#${randColor()}`,
  //         // floorColor: `#${randColor()}`,
  //         items: {
  //           posters: null,
  //           tvs: null,
  //           placeholders: null,
  //           doors: []
  //         },
  //       }
  //   }

  //   const genRoomsArr = [root]
  
  //   for (let i = 1; i <= roomsNumber; i++) {
  //     let parent = root
  //     if (Math.random() < i / roomsNumber && genRoomsArr.length) {
  //       parent = genRoomsArr[Math.floor(Math.random() * genRoomsArr.length)];
  //     }
  //     const node = {
  //       roomId: i,
  //       path: `/gen${i}`,
  //       parent: parent,
  //       children: [],
  //       doorsNum: 1,
  //       data: {
  //         roomWidth: randDimension(),
  //         roomLength: randDimension(),
  //         roomHeight: 300,
  //         wallsColor: `#${randColor()}`,
  //         // floorColor: `#${randColor()}`,
  //         items: {
  //           posters: null,
  //           tvs: null,
  //           placeholders: null,
  //           doors: [{
  //             proto: Door,
  //             route: parent.path,
  //             wall: "right",
  //             styles: {
  //               position: "static",
  //                 left: 50,
  //                 background: "black",
  //                 },
  //               }]
  //             },
  //       }
  //     }
  //     genRoomsArr.push(node)
  //     parent.children.push(node)
  //     parent.doorsNum++
  //   }
    
  //   ///// ADD DOORS TO THE NODES (and remove circularity to be able to store it in da Local Storage)
  //   for (let i = 0; i < genRoomsArr.length; i++) {
  //     const currRoom = genRoomsArr[i]
  //     const currDoors = currRoom.data.items.doors
  //     //console.log('room', i, "has", currRoom.doorsNum, 'doors')
  //     //console.log(currRoom.children.length,"doors lead to the deeper rooms")
  //     for (let j = 0; j < currRoom.children.length; j++) {
  //       const currRoute = currRoom.children[j].path
  //       currDoors.push({
  //         proto: Door,
  //         route: currRoute,
  //         // wall: "right",
  //         // wall: "left",
  //         wall: Math.random() > .5 ? "right" : "left",
  //         styles: {
  //           position: "static",
  //           // left: 50,
  //           // left: Math.floor(Math.random() * 400),
  //           background: "Pink",
  //           },
  //         })
  //       // const currRoute = currRoom.children?.[j].path
  //       // currRoom.items.doors.push({proto: Door, route: currRoute})
  //     }
  //     currRoom.children = undefined
  //     currRoom.parent = undefined
  //   }
  //   //console.log(genRoomsArr)
  //   return genRoomsArr
  // }
  
  // ///// CREATE READY ROOMS
  // const backroomsGen = function() {
  //   let genRoomsArr = treeGen()
  //   // const stored = localStorage.getItem("backrooms")
  //   // if (stored !== null) {
  //   //   // genRoomsArr = JSON.parse(stored)
  //   //   genRoomsArr = treeGen()
  //   //   console.log(stored)
  //   //   console.log(JSON.parse(stored))
  //   // } else {
  //   //   genRoomsArr = treeGen()
  //   // }
  //  // localStorage.setItem("backrooms", JSON.stringify(genRoomsArr))
  //   // console.log(genRoomsArr)
  //   const ready = []

  //   for (let i = 0; i < genRoomsArr.length; i++) {
  //     const data = genRoomsArr[i].data
  //     const items = genRoomsArr[i].data.items
  //     const route = genRoomsArr[i].path
  //     // console.log(route)
  //     ready.push(<Route id={i} path={route} 
  //       element={<GenericRoom key={i} data={data} items={items} handleClick={handleClick} />} />)
  //   }
  //   // console.log(ready)
  //   return (<>{ready}</>)
  // }
  





  // const [backrooms, setBackrooms] = useState(() => {
  //     // console.log(localStorage.getItem('house'))
  //     const storedHouse = localStorage.getItem('backrooms');
  //     return storedHouse !== null ? storedHouse : backroomsGen();
  //   });
  const [backrooms, setBackrooms] = useState(backroomsGen(handleClick));
  const [links, setLinks] = useState(() => {
    let links = []
    for (let room of backrooms.props.children) links.push(room.props.path)
    return links
  })

// setHouse((house => {
//     const newHouse = randRoomsGenerator()
//     localStorage.setItem('house', newHouse)
//     return newHouse
//   }))

  // console.log("here ",localStorage.getItem('house'))
  // console.log(randRoomsGenerator())
  console.log(links)

  return (
    // <Router>
    <div className="App" style={fadingOut ? {filter: 'blur(33px)'} : undefined }>
        <header className="App-header">
          <Navbar links={links}/>
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
              {/* {backroomsGen()} */}
              {backrooms}
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


