import PropTypes, { number } from 'prop-types'

function Card(props) {
    const statusStyle = { color: props.isOnline ? 'green' : 'red'};

    return(
        <div className="card">
            <h1 className="card-title">{props.number}</h1>
            <img className="card-image" src={props.image} alt={props.title} />
            <h2 className="card-title">{props.title}</h2>
            <p className="card-text">Tel: {props.phoneNumber}</p>
            <p className="card-text" style={statusStyle}>{props.isOnline ? "Online" : "Offline"}</p>
        </div>
    ); 
}

//good practice to add PropTypes when working with props
Card.propTypes = {
    number: PropTypes.number,
    title: PropTypes.string,
    phoneNumber: PropTypes.string,
    isOnline: PropTypes.bool
}

Card.defaultProps = {
    number: 0,
    title: "Not added",
    phoneNumber: "Not added",
    isOnline: false
}


export default Card