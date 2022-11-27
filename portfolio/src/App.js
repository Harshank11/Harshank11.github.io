import logo from './logo.svg';
import './App.css';
import WithSubnavigation from './Components/Navbar';
import Main from './Components/Main';
import Simple from './Components/Navbar';

function App() {
  return (
    <div className="App">
  <div>
        <div id='stars'></div>
        <div id='stars2'></div>
        <div id='stars3'></div>
    </div>
    <Simple />
    <Main/>
    </div>
  );
}

export default App;
