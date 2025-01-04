import DarkLightmode from "./DarkLightmode.jsx"
import Card from "./Card.jsx"
import pizzaPic from './assets/pizza.jpg'
import docPic from './assets/doctor.jpg'
import taxiPic from './assets/taxi.jpg'

function App() {

  const time = new Date();
  const hours = time.getHours();
  const minutes = time.getMinutes();
  const isNightTime = hours >= 19 || hours <= 6;
  const currentTime = `${hours}:${minutes < 10 ? '0' + minutes : minutes}`; 

  return (
    <>
      <DarkLightmode isNightTime={isNightTime} currentTime={currentTime}/>
      <Card number={1} title="Pizza" phoneNumber="111 222 333" isOnline={true} image={pizzaPic}/>
      <Card number={2} title="Doctor" phoneNumber="111 111 111" isOnline={false} image={docPic}/>
      <Card number={3} title="Taxi" phoneNumber="123 456 789" isOnline={true} image={taxiPic}/>
      <Card />
    </>
  );

}

export default App
