import Logo from "../images/puglia1dark.png";
import "bootstrap";

const MainLogo = () => {
    return (
        <div className="row">
        <div className="logContainer col-sm-12">
            <img className="mainLogo img-responsive img-fluid" src={Logo} alt="Inquiring Minds Logo" />
        </div>
        </div>
    );
}; 

export default MainLogo