import logo from './logo.svg';
import './App.css';
import Fit from './fit';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          hello world
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Fit
          name = {'Ba Son'}
          age ={'20'}
          years ={'2001'}
        />
      </header>
    </div>
  );
}

export default App;
