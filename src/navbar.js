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
        console.log(document.querySelector(`a[href="${"/hall"}"]`).classLisst)

        document.querySelector(`a[href="${prevPath}"]`)?.classList?.remove("currentHref")
        document.querySelector(`a[href="${a}"]`)?.classList?.add("currentHref")
        setPath(a)
      }, [window.location.pathname])

    return (
        <>
        <nav className="navbar navContainer">
            <Link className="navbar link" key={0} to="/" id="logo">HOMER</Link>
            <Link className="navbar link" key={999} to="/bedroom" id="bedroomNav">bedroom</Link>
            <Link className="navbar link" key={9999} to="/hall" id="hallNav">hall</Link>
            <Link className="navbar link" key={998} to="/bathroom" id="bathroomNav">bathroom</Link>
            <Link className="navbar link" key={9998} to="/storage" id="storageNav">storage</Link>
        </nav>
        <nav className="  backrooms">
            {backLinksElem}
        </nav>
        </>
    );
}

export default Navbar;