import "./HomePage.css";
import About from "../components/About";
import Slider from "../components/Carousel";
import Logo from "../components/Logo";

const HomePage = () => {
    return (
        <>
        <Logo />
        <About />
        <Slider />
        </>
    )
};

export default HomePage;