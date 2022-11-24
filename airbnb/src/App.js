import logo from './logo.svg';
import './App.css';
import Nav from './Nav';
import Hero from './Hero';
import Card from './Card';

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <Card />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;