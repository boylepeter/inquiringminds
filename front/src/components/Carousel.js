import 'bootstrap/dist/css/bootstrap.min.css';
import './Carousel.css';
import China from '../images/china.gif';
import Cole from '../images/cole.jpg';
import Spain from '../images/spain.jpg';
import { Link } from 'react-router-dom';

const Slider = () => {
    return (

<div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={China} className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <h5><Link to="/presentation/61391b38a87507c3e5087869">China: Land of Wonders</Link></h5>
        <p>A brief but in depth look at the country, history, and people of the Red Dragon</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={Cole} className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <h5><Link to="/presentation/61391b38a87507c3e5087874">Unforgettable American Composers: Cole Porter</Link></h5>
        <p>Part of our look into iconic American composers and musicians, Cole Porter was not only ahead of his time, he was in a class of his own</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={Spain} className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <h5><Link to="/presentation/61391b38a87507c3e508786e">Spain: Land of Contrasts</Link></h5>
        <p>Spain has a rich history, fascinating people, and beautiful country, we set out to have a look at all Spain has to offer</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    );
};

export default Slider;