import 'bootstrap';
import './About.css';
import Image from '../images/foundercut2.png';

const About = () => {
    return (
        <div className="about">
            <div className="row">
                <div className="col-sm-6 about-block"><h2>About Our Founder</h2><p>Rosanne is a retired Public Librarian with 20 years of experience in Adult and Senior Services in and around the Charlotte, NC area. She received her BA degree from Hunter College in NY and true to her commitment to learning, followed that with her MLIS degree from UNC Greensboro. After retiring she sought to bring lifelong learning, in a creative, timely, and entertaining format to every senior community she could, and is still committed to that mission today.</p></div>
                <img className="col-sm-6 about-image" src={Image} alt="Founder: Rosanne" />
            </div>
            <div className="row">
                <div className="col-sm-6 about-block"><h2>About Inquiring Minds</h2><p>Inquiring Minds is a learning, education, and entertainment resource. We focus on providing materials to our fellow senior citizens and their caretakers in an effort to ensure people never stop learning. A nimble mind is something the body can follow, and continuing to learn at all ages is imperative to everyone's health and well being.</p></div>
                <div className="col-sm-6 about-block"><h2>About Our Materials</h2><p>Our presentations seek to provide something that we feel is desperately lacking in our society today. We wanted to bring back into the lives of our seniors something that we feel is truly imperative to their success, comfort, and well being, and that is lifelong learning. Everyone knows that a challenged mind is healthier, more alert, and more content, and with that in mind we created a series of interactive multimedia lectures on a multitude of topics, and are always creating more!</p></div>
            </div>
        </div>
    )
};

export default About;