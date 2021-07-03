function Cards(props){
    return(
    <>
<div className="card" style={{width: '18rem'}}>
  <img className="card-img-top" src={props.img} alt="Card image cap" />
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.text}</p>
    <a href="#" className="btn btn-primary">{props.btn}</a>
  </div>
</div>
    </>
    )
}

export default Cards;