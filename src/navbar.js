import { Link } from 'react-router-dom'
import { useEffect, useState } from "react"
import "./styles/navbar.css"

const Navbar = ({backLinks}) => {
    let backLinksElem = []
    for (let i = 0; i < backLinks.length; i++) {
        backLinksElem.push(<><Link className="navbar link experimental" key={i} to={backLinks[i]}> ---{i}--- </Link></>)
    }

    const [prevPath, setPath] = useState(window.location.pathname)
    console.log("prev path: ", prevPath)

    useEffect(() => {
        const a = window.location.pathname
        console.log(document.querySelector(`a[href="${"/hall"}"]`)?.classLisst)

        document.querySelector(`a[href="${prevPath}"]`)?.classList?.remove("currentHref")
        document.querySelector(`a[href="${a}"]`)?.classList?.add("currentHref")
        setPath(a)
      }, [window.location.pathname])

    return (
        <>
        <nav className="navContainer">
            <nav className="navbar navContainer">
                <Link className="navbar link" key={0} to="/" id="logo">HOMER</Link>
                <Link className="navbar link" key={999} to="/bedroom" id="bedroomNav">bedroom</Link>
                <Link className="navbar link" key={9999} to="/hall" id="hallNav">hall</Link>
                <Link className="navbar link" key={998} to="/bathroom" id="bathroomNav">bathroom</Link>
                <Link className="navbar link" key={9998} to="/storage" id="storageNav">storage</Link>
                <div className="dropdown">
                    <a href="#" 
                    // onClick={()=>window.location.pathname='/gen0'} 
                    className="dropButton link" key="444">experimental</a>
                        <div className="backrooms dropdownContent">
                            {backLinksElem}
                        </div>
                </div>
            </nav>
            <nav className="navbar externalLinks navContainer">
                <Link className="navbar link github" key={9996} to="https://github.com/WojciechZaremba/villa" target="_blank" id="storageNav">GitHub <svg x="0px" y="0px" viewBox="0 0 100 100" width="15" height="15">
                    <path fill="currentColor" d="
                    M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,
                    0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z
                    ">   
                    </path>
                    <polygon fill="currentColor" points="
                    45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,
                    14.9 62.8,22.9 71.5,22.9">
                    </polygon>
                </svg></Link>
            </nav>
        </nav>
        </>
    );
}

export default Navbar;