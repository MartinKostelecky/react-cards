
import pizzaPic from './assets/pizza.jpg'

function Card() {
    return(
        <div className="card">
            <h1 className="card-title">#1</h1>
            <img className="card-image" src={pizzaPic} alt="pizza picture" />
            <h2 className="card-title">Pizza</h2>
            <p className="card-text">Tel: 111 222 333</p>
        </div>
    ); 
}

export default Card