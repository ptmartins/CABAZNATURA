import {NavLink} from 'react-router-dom';
import './Navigation.css';

function Navigation() {
    return(
        <nav className="nav">
            <NavLink to="/" activeClassName="active" className="nav__link">Home</NavLink>
            <NavLink to="/about" activeClassName="active" className="nav__link">About</NavLink>
            <NavLink to="/shop" activeClassName="active" className="nav__link">Shop</NavLink>
            <NavLink to="/contact" activeClassName="active" className="nav__link">Contact</NavLink>
        </nav>
    )
}

export default Navigation;