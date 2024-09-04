import './App.css';
import Calculadora from './calculadora';
import Logo from './logo.png'

function App() {
  return (
    <div className="App">
      <img src={Logo} alt='logo' />
      <Calculadora />
    </div>
  );
}

export default App;
