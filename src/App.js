import './App.css';
import Countdown from 'react-countdown';
import cfc from './Code_for_Change_Logo.png';

function App() {
  return (
    <div className="App">
      <night-sky
        id="nightSky"
        layers="4"
        density="30"
        velocity="60"
        starcolor="#FFF">
      
      </night-sky> 
      <div className="timer-div"> 
      <img className="logo" src = {cfc}/>
      <p className="text"> Time Until Code for Change: </p>
      <Countdown className="timer" date={'2024-02-10T09:00:00'}/>
      </div>
    </div>
  );
}

export default App;
