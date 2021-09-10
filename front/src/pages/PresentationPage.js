import "./PresentationPage.css";
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPresentationDetails } from '../redux/actions/presentationActions';
import { addToCart } from '../redux/actions/cartActions';

const PresentationPage = ({ match, history }) => {

    const dispatch = useDispatch();
    const presentationDetails = useSelector(state => state.getPresentationDetails);
    const { loading, error, presentation } = presentationDetails;

    useEffect(() => {
        if (presentation && match.params.id !== presentation._id) {
            dispatch(getPresentationDetails(match.params.id))
        }
    }, [dispatch, presentation, match]);

    const addToCartHandler = () => {
        dispatch(addToCart(presentation._id));
        history.push("/cart")
    };

    return (
        <div className="presentation-screen">
            {loading ? (<h2>Loading...</h2>) : error ? (<h2>{error}</h2>) : (
                <>
                    <div className="presentation-left">
                        <div className="presentation-left-image">
                            <img src={presentation.imgUrl} alt={presentation.alt} />
                        </div>
                        <div className="presentation-left-desc">
                            <p className="presentation-left-title">{presentation.title}</p>
                            <p className="presentation-left-info">{presentation.info}</p>
                            <p className="presentation-left-category">{presentation.category}</p>
                        </div>
                    </div>
                    <div className="presentation-right">
                        <div className="presentation-right-info">
                            <p>Price: <span>$100.00</span></p>
                        </div>
                        <p><button className="add-btn" onClick={addToCartHandler}>Add To Cart</button></p>
                    </div>
                </>
            )}

        </div>
    )
};

export default PresentationPage;