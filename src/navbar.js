import { Link } from 'react-router-dom';

const Navbar = ({links}) => {
    console.log("nav", links)
    let backLinks = []
    for (let i = 0; i < links.length; i++) {
        backLinks.push(<><Link key={i} to={links[i]}> ---{i}--- </Link></>)
    }

    return (
        <nav className="navbar">
            <h1>navigation</h1>
            <Link to="/">home</Link> <br/>
            <Link to="/hall">hall</Link> <br/>
            <Link to="/bathroom">bathroom</Link> <br/>
            <Link to="/storage">storage</Link> <br/>
            {backLinks}
        </nav>
    );
}

export default Navbar;