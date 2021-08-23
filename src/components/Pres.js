import 'bootstrap';

const Pres = (props) => {
    return (
            <div className="card">
                <img src={props.src} className="card-img-top" alt={props.alt} />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.info}</p>
                </div>
                <div className="card-body">
                    <button type="button" class="btn btn-warning"><a href={props.link} className="card-link">Purchase</a></button>
                    
                    {/* <a href="#" className="card-link">Another link</a> */}
                </div>
            </div>
    );
}

export default Pres;