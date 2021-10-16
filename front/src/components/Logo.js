import Logo from "../images/puglia1dark.png";
import "bootstrap";

const MainLogo = () => {
    return (
        <div className="logo-container">
            <img className="mainLogo img-responsive img-fluid" src={Logo} alt="Inquiring Minds Logo" />
        </div>
    );
}; 

export default MainLogo