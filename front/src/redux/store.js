import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { cartReducer } from './reducers/cartReducers';
import { getPresentationsReducer, getPresentationDetailsReducer } from './reducers/presentationReducers';

const reducer = combineReducers({
    cart: cartReducer,
    getPresentations: getPresentationsReducer,
    getPresentationDetails: getPresentationDetailsReducer
});

const middleware = [thunk];

const cartInLocalStorage = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [];

const INITIAL_STATE = {
    cart: {cartItems: cartInLocalStorage}
};

const store = createStore(
    reducer,
    INITIAL_STATE,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;