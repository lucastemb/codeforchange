import './App.css';
import Countdown from 'react-countdown';

function App() {
  return (
    <div className="App">
      <p className="text"> Time Until Code for Change </p>
      <Countdown className="timer" date={'2024-02-10T09:00:00'}/>
    </div>
  );
}

export default App;
