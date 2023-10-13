import logo from './logo.svg';
import './App.css';
import HolaMundo from './components/HolaMundo';
import Saludar from './components/Saludar';

function App() {
  const user = {
    nombre: "Bryan Higuera",
    
    color: "Azul"
  };

const saludarFn = (name,edad)  => {

  console.log("Hi hi " + name + " " + edad )  ;

};

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Saludar userInfo = {user} saludarFn = {saludarFn}/>
      </header>
    </div>
  );
}

export default App;
