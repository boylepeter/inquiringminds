import './Sidedrawer.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Sidedrawer = ({show, click}) => {
    const sidedrawerClass = ["sidedrawer"];

    if(show){
        sidedrawerClass.push("show");
    }

    const cart = useSelector(state => state.cart);
    const { cartItems } = cart;
    const getCartCount = () => {
        return cartItems.length;
    }

    return (
        <div className={sidedrawerClass.join(" ")}>
            <ul className="sidedrawer-links" onClick={click}>
                <li><Link to="/" >Home</Link></li>
                <li><Link to="/library" >Library</Link></li>
                <li><Link to="/cart" ><i className="fas fa-shopping-cart"></i><span>Cart<span className="sidedrawer-badge">{getCartCount()}</span></span></Link></li>
            </ul>
        </div>
    )
}

export default Sidedrawer
