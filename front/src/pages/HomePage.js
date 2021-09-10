import "./HomePage.css";
import Footer from "../components/Footer";
import About from "../components/About";
import Slider from "../components/Carousel";
import Logo from "../components/Logo";

const HomePage = () => {
    return (
        <>
        <Logo />
        <About />
        <Slider />
        <Footer />
        </>
    )
};

export default HomePage;