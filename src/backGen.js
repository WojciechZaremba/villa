import "./styles/general.css"
import { Route } from 'react-router-dom'
import GenericRoom from './rooms/genericRoom'

// for rooms generator:
import Door from './items/door'
import TV from './items/tv'
import PlaceholderBox from "./items/placeholderBox"

///// CREATE READY ROOMS
const backroomsGen = function(handleClick) {
	let genRoomsArr = treeGen()
	const ready = []

	for (let i = 0; i < genRoomsArr.length; i++) {
	const data = genRoomsArr[i].data
	const items = genRoomsArr[i].data.items
	const route = genRoomsArr[i].path

	ready.push(<Route id={i} 
					  path={route} 
					  element={<GenericRoom key={i} 
					  data={data} 
					  items={items} 
					  handleClick={handleClick} 
					  customOriginClass="backroomOrigin" />} />)
	}
	return (<>{ready}</>)
}

	const treeGen = function() {
		const roomsNumber = Math.floor(Math.random() * 5 + 5) // 5 - 10
		const randDimension = () => Math.floor(Math.random() * 500 + 300) // 300 - 800
		const randColor = () => Math.floor(Math.random() * 0xFFFFFF).toString(16) // all hex colors

		const rootWidth = randDimension()
		const rootLength = randDimension()

    ///// CREATE A TREE
    const root = {
		roomId: 0,
		path: "/gen0",
		parent: null,
		children: [],
		doorsNum: 0,
		data: {
			roomWidth: rootWidth,
			roomLength: rootLength,
			roomHeight: 300,
			wallsColor:`#${randColor()}`,
			// floorColor: `#${randColor()}`,
			items: {
				placeholderBoxes: [{
					proto: PlaceholderBox,
					wall: "floor",
					styles: {
						left: Math.random() * (rootWidth - 100),
						top: Math.random() *  (rootLength - 100)
					}
				}],				
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
      let node = {
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
            posters: [],
            tvs: [],
            placeholderBoxes: [],
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
		let currPlaceholders = currRoom.data.items.placeholderBoxes
		const currTVs = currRoom.data.items.tvs

		const currDimensions = {length: currRoom.data.roomLength, width: currRoom.data.roomWidth}

		for (let j = 0; j < currRoom.children.length; j++) {
			const currRoute = currRoom.children[j].path
			currDoors.push({
			proto: Door,
			route: currRoute,
			wall: Math.random() > .5 ? "right" : "left",
			styles: { position: "static",
						background: "Pink" }})
		}

	if (Math.random() > 0) {
		currRoom.data.items.placeholderBoxes = [{
			proto: PlaceholderBox,
			wall: "floor",
			styles: {
				top: Math.random() * (currDimensions.length - 100),
				left: Math.random() * (currDimensions.width - 100)
			}
		}]
	}
	if (Math.random() > 0) {
		// console.log(`tvInRoom#${i}`)
		currRoom.data.items.tvs = [{
		proto: TV,
		customClass: `tvInRoom#${i}`,
		styles: { top: 415,
				left: 100,
				elevation: 0,
				transform: `rotateX(0deg) rotateY(0deg) rotateZ(280deg) 
				translate3d(0px,0px, 0px)`,
				transformOrigin: "centre" }
		}]
	}

	// code below removes circularity from the tree
	currRoom.children = undefined
	currRoom.parent = undefined
	}
	return genRoomsArr
  }


export {backroomsGen, treeGen}