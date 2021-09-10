import "./LibraryPage.css";
import {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Presentation from '../components/Presentation';
import { getPresentations as listPresentations } from '../redux/actions/presentationActions';

const LibraryPage = () => {

    const dispatch = useDispatch();
    const getPresentations = useSelector(state => state.getPresentations);
    const { presentations, loading, error } = getPresentations;

    useEffect(() => {
        dispatch(listPresentations())
    }, [dispatch]);

    return (
        <div className="library">
            <h2 className="library-title">Library</h2>
            <div className="library-presentations">
                {loading ? (<h2>Loading...</h2>) : 
                error ? (<h2>{error}</h2>) : 
                (presentations.map((presentation) => <Presentation 
                key={presentation._id}
                presentationId={presentation._id}
                title={presentation.title}
                imgUrl={presentation.imgUrl}
                info={presentation.info}
                alt={presentation.alt}
                category={presentation.category}
                />))}
            </div>
        </div>
    )
};

export default LibraryPage;