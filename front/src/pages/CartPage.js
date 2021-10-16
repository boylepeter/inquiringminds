import "./CartPage.css";
import CartItem from "../components/CartItem";
// import { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import { removeFromCart } from '../redux/actions/cartActions';

const CartPage = () => {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;

    const removeHandler = (id) => {dispatch(removeFromCart(id))};

    const getCartCount = () => {
        return cartItems.length;
    }

    const getCartPrice = () => {
        if (cartItems.length === 1){
            return 100
        }
        else if (cartItems.length === 2){
            return 200
        }
        else if (cartItems.length === 3){
            return 250
        }
        else if (cartItems.length === 4){
            return 350
        }
        else if (cartItems.length === 5){
            return 350
        }
        else if (cartItems.length === 6){
            return 500
        }
        else if (cartItems.length === 7){
            return 550
        }
        else if (cartItems.length === 8){
            return 600
        }
        else if (cartItems.length === 9){
            return 700
        }
        else if (cartItems.length === 10){
            return 700
        }
    }

    // const [paidFor, setPaidFor] = useState(false);
    // const [loaded, setLoaded] = useState(false);
    // let paypalRef = useRef();

    // const product = {
    //     price: 100,
    //     description: "",
    // }

    // useEffect(() => {
    //     const script = document.createElement("script");
    //     script.src = "https://www.paypal.com/sdk/js?client-id=AZ6muoGQ0ojogEjaoTDji3fP8H7nH8j0itO71Kl6nBeeFZ04KWNVWySKZfWl08UZwU7PxknBRZwQA__P";
    //     script.addEventListener("load", ()=> setLoaded(true));
    //     document.body.appendChild(script);
    //     if (loaded){
    //         setTimeout(() => {
    //             window.paypal.Buttons({
    //                 createOrder: (data, actions) =>{
    //                     return actions.order.create({
    //                         purchase_units: [{
    //                             description: product.description,
    //                             amount: {
    //                                 currency_code: "USD",
    //                                 value: getCartPrice()
    //                             }
    //                         }]
    //                     });
    //                 },
    //                 onApprove: async(data, actions) =>{
    //                     const order = await actions.order.capture();
    //                     setPaidFor(true);
    //                     console.log(order);
    //                 }
    //             }).render(paypalRef);
    //         })
    //     }
    // });


    return (
        <div className="cartscreen">
            <div className="cartscreen-left">
                <h2>Cart</h2>
                {cartItems.length === 0 ? (
                    <div>Your cart is empty <Link to="/library">Go Back</Link></div>
                ) : ( cartItems.map((item) => (<CartItem key={item.presentation} item={item} removeHandler={removeHandler}/> ))
                )}
            </div>
            <div className="cartscreen-right">
                <div className="cartscreen-info">
                    <p>Items ({getCartCount()})</p>
                    <p>Total: ${getCartPrice()}.00</p>
                </div>
                {/* {paidFor ? (<div>Congrats, you just paid</div>) : (<div ref={v=>(paypalRef = v)} />)} */}
                <div><button className="return-btn"><Link className="return-btn" to="/library">Continue Shopping</Link></button></div>
            </div>
        </div>
    )
};

export default CartPage;