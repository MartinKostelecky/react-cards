import PropTypes from "prop-types";

function DarkLightmode(props) {

  const timeStyle = { color: props.isNightTime ? "White" : "Black" };

  document.body.style.backgroundColor = props.isNightTime ? "Black" : "White";

  return (<div><p style={timeStyle}>Current time: {props.currentTime}</p></div>);

}

DarkLightmode.propTypes = {
  isNightTime: PropTypes.bool,
  currentTime: PropTypes.string
}

DarkLightmode.defaultProps = {
  isNightTime: false,
  currentTime: "00:00"
}

export default DarkLightmode;