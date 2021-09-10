import * as actionTypes from '../constants/cartConstants';
import axios from 'axios';

export const addToCart = (id) => async (dispatch, getState) => {
    const { data } = await axios.get(`api/presentations/${id}`);

    dispatch({
        type: actionTypes.ADD_TO_CART,
        payload: {
            presentation: data._id,
            title: data.title,
            imgUrl: data.imgUrl,
            info: data.info,
            alt: data.alt,
            category: data.category
        }
    })

    localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (id) => (dispatch, getState) => {
    dispatch({
        type: actionTypes.REMOVE_FROM_CART,
        payload: id
    })
    
    localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems))
}