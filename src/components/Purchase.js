

const Purchase = (props) => {
    return (
        <div className="card" style="width: 18rem;">
  <img src={props.src} className="card-img-top" alt={props.alt} />
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.exp}</p>
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">An item</li>
    <li className="list-group-item">A second item</li>
    <li className="list-group-item">A third item</li>
  </ul>
  <div className="card-body">
    <a href="#" className="card-link">Close</a>
    <a href="#" className="card-link">Purchase</a>
  </div>
</div>
    );
};

export default Purchase;