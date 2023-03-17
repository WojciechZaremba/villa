import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>navigation</h1>
            <Link to="/">home</Link> <br/>
            <Link to="/hall">hall</Link> <br/>
            <Link to="/bathroom">bathroom</Link> <br/>
            <Link to="/storage">storage</Link> <br/>
        </nav>
    );
}

export default Navbar;