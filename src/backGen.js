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




///// CREATE READY ROOMS
const backroomsGen = function(handleClick) {
    let genRoomsArr = treeGen()
    // const stored = localStorage.getItem("backrooms")
    // if (stored !== null) {
    //   // genRoomsArr = JSON.parse(stored)
    //   genRoomsArr = treeGen()
    //   console.log(stored)
    //   console.log(JSON.parse(stored))
    // } else {
    //   genRoomsArr = treeGen()
    // }
   // localStorage.setItem("backrooms", JSON.stringify(genRoomsArr))
    // console.log(genRoomsArr)
    const ready = []

    for (let i = 0; i < genRoomsArr.length; i++) {
      const data = genRoomsArr[i].data
      const items = genRoomsArr[i].data.items
      const route = genRoomsArr[i].path
      // console.log(route)
      ready.push(<Route id={i} path={route} 
        element={<GenericRoom key={i} data={data} items={items} handleClick={handleClick} />} />)
    }
    // console.log(ready)
    return (<>{ready}</>)
  }

  const treeGen = function() {
    console.log("treeGen")
     // console.log("here here",localStorage.getItem('house'))

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
          wallsColor:`#${randColor()}`,
          // floorColor: `#${randColor()}`,
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
          wallsColor: `#${randColor()}`,
          // floorColor: `#${randColor()}`,
          items: {
            posters: null,
            tvs: null,
            placeholders: null,
            doors: [{
              proto: Door,
              route: parent.path,
              wall: "right",
              styles: {
                position: "static",
                  left: 50,
                  background: "black",
                  },
                }]
              },
        }
      }
      genRoomsArr.push(node)
      parent.children.push(node)
      parent.doorsNum++
    }
    
    ///// ADD DOORS TO THE NODES (and remove circularity to be able to store it in da Local Storage)
    for (let i = 0; i < genRoomsArr.length; i++) {
      const currRoom = genRoomsArr[i]
      const currDoors = currRoom.data.items.doors
      //console.log('room', i, "has", currRoom.doorsNum, 'doors')
      //console.log(currRoom.children.length,"doors lead to the deeper rooms")
      for (let j = 0; j < currRoom.children.length; j++) {
        const currRoute = currRoom.children[j].path
        currDoors.push({
          proto: Door,
          route: currRoute,
          // wall: "right",
          // wall: "left",
          wall: Math.random() > .5 ? "right" : "left",
          styles: {
            position: "static",
            // left: 50,
            // left: Math.floor(Math.random() * 400),
            background: "Pink",
            },
          })
        // const currRoute = currRoom.children?.[j].path
        // currRoom.items.doors.push({proto: Door, route: currRoute})
      }
      currRoom.children = undefined
      currRoom.parent = undefined
    }
    //console.log(genRoomsArr)
    return genRoomsArr
  }


export {backroomsGen, treeGen}