import { Link } from 'react-router-dom';
import Cart from '../images/cart.png';
import 'bootstrap';

const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/">Inquiring Minds</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link to="/" className="nav-link active">Home</Link>
                    <Link to="/library" className="nav-link active">Library</Link>
                </div>
            </div>
            <div className="cart"><Link to="/cart" className="cart"><img className="cart" src={Cart} alt="Shopping cart" /></Link></div>
        </nav>
    );
}

export default Nav;
