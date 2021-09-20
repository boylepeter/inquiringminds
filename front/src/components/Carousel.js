import 'bootstrap/dist/css/bootstrap.min.css';
import './Carousel.css';
import China from '../images/china.gif';
import Cole from '../images/cole.jpg';
import Spain from '../images/spain.jpg';

const Slider = () => {
    return (

<div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={China} class="d-block w-100" alt="..." />
      <div class="carousel-caption d-none d-md-block">
        <h5>China: Land of Wonders</h5>
        <p>A brief but surprisingly in depth look at the country, history, and people of the Red Dragon</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={Cole} class="d-block w-100" alt="..." />
      <div class="carousel-caption d-none d-md-block">
        <h5>Unforgettable American Composers: Cole Porter</h5>
        <p>Part of our look into iconic American composers and musicians, Cole Porter was not only ahead of his time, he was in a class of his own</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={Spain} class="d-block w-100" alt="..." />
      <div class="carousel-caption d-none d-md-block">
        <h5>Spain: Land of Contrasts</h5>
        <p>Spain has a rich history, fascinating people, and beautiful country, we set out to have a look at all Spain has to offer</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    );
};

export default Slider;