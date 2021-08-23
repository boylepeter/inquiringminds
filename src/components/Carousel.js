import 'bootstrap';
import China from '../images/china.gif';
import Cole from '../images/cole.jpg';
import Spain from '../images/spain.jpg';

const Carousel = () => {
    return (
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={China} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src={Cole} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src={Spain} className="d-block w-100" alt="..." />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default Carousel