import 'bootstrap';

const Desc = () => {
    return (
        <div className="accordion accordion-flush" id="accordionFlushExample">
            <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingOne">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                        About Inquiring Minds
                    </button>
                </h2>
                <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">Inquiring Minds is a learning, education, and entertainment resource. We focus on providing materials to our fellow senior citizens and their caretakers in an effort to ensure people never stop learning. A nimble mind is something the body can follow, and continuing to learn at all ages is imperative to everyone's health and well being. </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                        About Our Materials
                    </button>
                </h2>
                <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">Our presentations seek to provide something that we feel is desperately lacking in our society today. We wanted to bring back into the lives of our seniors something that we feel is truly imperative to their success, comfort, and well being, and that is lifelong learning. Everyone knows that a challenged mind is healthier, more alert, and more content, and with that in mind we created a series of interactive multimedia lectures on a multitude of topics, and are always creating more! </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                        About Our Founder
                    </button>
                </h2>
                <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">Rosanne is a retired Public Librarian with 20 years of experience in Adult and Senior Services in and around the Charlotte, NC area. She received her BA degree from Hunter College in NY and true to her commitment to learning, followed that with her MLIS degree from UNC Greensboro. After retiring she sought to bring lifelong learning, in a creative, timely, and entertaining format to every senior community she could, and is still committed to that mission today.</div>
                </div>
            </div>
        </div>
    );
};

export default Desc;