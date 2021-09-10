import './Navbar.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = ({ click }) => {

    const cart = useSelector(state => state.cart);
    const { cartItems } = cart;
    const getCartCount = () => {
        return cartItems.length;
    }

    return (
        <nav className="navbar">
            <div className="navbar-logo"><Link to="/"><h2>Inquiring Minds</h2></Link></div>
            <ul className="navbar-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/library">Library</Link></li>
                <li><Link to="/cart" className="cart-link">
                    <i className="fas fa-shopping-cart"></i>
                    <span className="cart-span">Cart</span>
                    <span className="cart-badge">{getCartCount()}</span>
                </Link>
                </li>
            </ul>
            <div className="hamburger-menu" onClick={click}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </nav>
    )
};

export default Navbar;