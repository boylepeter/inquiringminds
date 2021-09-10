import './Presentation.css';
import { Link } from 'react-router-dom';

const Presentation = ({title, imgUrl, info, alt, category, presentationId}) => {
    return (
        <div className="presentation">
            <img src={imgUrl} alt={alt} />
            <div className="presentation-desc">
                <p className="presentation-title">{title}</p>
                <p className="presentation-info">{info.substring(0, 100)}...</p>
                <p className="presentation-category">{category}</p>
                <Link to={`presentation/${presentationId}`} className="presentation-view">View</Link>
            </div>
        </div>
    )
}

export default Presentation
