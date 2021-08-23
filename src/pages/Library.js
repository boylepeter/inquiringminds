import Pres from "../components/Pres";
import Footer from "../components/Footer";
import Pricing from "../components/Pricing";
import 'bootstrap';
import Xmas from "../images/xmas.gif";
import China from "../images/china.gif";
import Icons1 from "../images/icons1.gif";
import Icons2 from "../images/icons2.gif";
import Icons3 from "../images/icons3.gif";
import Ireland from "../images/ireland.gif";
import Spain from "../images/spain.gif";
import Thanksgiving from "../images/thanksgiving.gif";
import Xmassongs from "../images/xmasSongs.gif";
import West from "../images/americanWest.gif";
import Veterans from "../images/veterans.gif";
import WW2 from "../images/ww2.gif";
import Cole from "../images/cole.gif";

const presentations = [
    { title: "The Beauty and Magic of Christmas and Hanukkah", src: Xmas, info: "A presentation about the Christmas and Hanukkah season", alt: "Christmas and Hanukkah", link: "/" },
    { title: "China", src: China, info: "A presentation about China", alt: "Chinese coreographed dance", link: "/" },
    { title: "Icons Series pt. 1", src: Icons1, info: "Part 1 in a series of presentations about American icons.", alt: "Pirate ship scene", link: "/" },
    { title: "Icons Series pt. 2", src: Icons2, info: "Part 2 in a series of presentations about American icons.", alt: "Black and white movie", link: "/" },
    { title: "Icons Series pt. 3", src: Icons3, info: "Part 3 in a series of presentations about American icons.", alt: "The Quiet Man movie", link: "/" },
    { title: "Ireland", src: Ireland, info: "A presentation about the people and history of Ireland", alt: "Ireland in the moveies", link: "/" },
    { title: "Spain", src: Spain, info: "A presentation about the history and global impact of Spain", alt: "History of Spain", link: "/" },
    { title: "Thanksgiving", src: Thanksgiving, info: "A presentation about that history of Thanksgiving", alt: "Thanksgiving celebration", link: "/" },
    { title: "The songs of Christmas", src: Xmassongs, info: "A presentation about and featuring the biggest and best Christmas songs", alt: "Christmas songs", link: "/" },
    { title: "The American West", src: West, info: "A presentation about life in and the settelement of the American west", alt: "Western life", link: "/" },
    { title: "American Veterans", src: Veterans, info: "A presentation about and thanks to our American veterans", alt: "American veterans", link: "/" },
    { title: "How WWII Changed America", src: WW2, info: "A look at how World War II changed America", alt: "World War 2", link: "/" },
    { title: "Unforgettable American Composers: Cole Porter: ", src: Cole, info: "A look at the life and music of Cole Porter", alt: "Cole Porter", link: "/" }];

const LibraryPage = () => {

    return (
        <>
            <Pricing />
            <div className="row">
                {presentations.map((pres) => <Pres className="col-sm-3" title={pres.title} src={pres.src} info={pres.info} alt={pres.alt} link={pres.link} />)}
            </div>
            <Footer />
        </>
    );
};

export default LibraryPage;