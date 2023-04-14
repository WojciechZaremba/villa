import { Link } from 'react-router-dom';

const Navbar = ({links}) => {
    let backLinks = []
    for (let i = 0; i < links.length; i++) {
        backLinks.push(<><Link key={i} to={links[i]}> ---{i}--- </Link></>)
    }

    return (
        <nav className="navbar">
            <h1>navigation</h1>
            <Link key={999} to="/">home</Link> <br/>
            <Link key={9999} to="/hall">hall</Link> <br/>
            <Link key={998} to="/bathroom">bathroom</Link> <br/>
            <Link key={9998} to="/storage">storage</Link> <br/>
            {backLinks}
        </nav>
    );
}

export default Navbar;