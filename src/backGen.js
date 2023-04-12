import "./styles/general.css"
import { Route } from 'react-router-dom';
import GenericRoom from './rooms/genericRoom';

// for rooms generator:
import Door from './items/door';
import Poster from './items/poster';
import TV from './items/tv';
// import GenRoom from './generatedRoom'

///// CREATE READY ROOMS
const backroomsGen = function(handleClick) {
    let genRoomsArr = treeGen()
    const ready = []

    for (let i = 0; i < genRoomsArr.length; i++) {
      const data = genRoomsArr[i].data
      const items = genRoomsArr[i].data.items
      const route = genRoomsArr[i].path

      ready.push(<Route id={i} path={route} 
        element={<GenericRoom key={i} data={data} items={items} handleClick={handleClick} />} />)
    }
    return (<>{ready}</>)
  }

  const treeGen = function() {
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
          items: {posters: null,
                  tvs: null,
                  placeholders: null,
                  doors: [] }
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
            doors: [{ proto: Door,
                      route: parent.path,
                      wall: "right",
                      styles: { position: "static", 
                                background: "black" }
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

      for (let j = 0; j < currRoom.children.length; j++) {
        const currRoute = currRoom.children[j].path
        currDoors.push({
          proto: Door,
          route: currRoute,
          wall: Math.random() > .5 ? "right" : "left",
          styles: { position: "static",
                    background: "Pink" }})
      }
      currRoom.children = undefined
      currRoom.parent = undefined
    }
    return genRoomsArr
  }


export {backroomsGen, treeGen}