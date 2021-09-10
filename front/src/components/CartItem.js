import './CartItem.css';
import { Link } from 'react-router-dom';

const CartItem = ({item, removeHandler}) => {
    return (
        <div className="cartitem">
            <div className="cartitem-image">
                <img src={item.imgUrl} alt={item.alt} />
            </div>
            <Link to={`/presentation/${item.presentation}`} className="cartitem-name">
                <p>{item.title}</p>
            </Link>
            <p className="cartitem-price">$100.00</p>
            <button className="cartitem-deleteBtn" onClick={()=>removeHandler(item.presentation)}><i className="fas fa-trash"></i></button>
        </div>
    )
}

export default CartItem
