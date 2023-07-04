import logo from './logo.svg';
import './App.css';


// pre-defined function when you first run crate-react-app command
function App() {
  return (
    <div className="App">
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
        <DisplayHello />
      </header>
      
    </div>
  );
}

// custom function to say hello world with a button to go to another page
function DisplayHello(){
  return (
    <div>
        <h4>Hello Randhir karn</h4>
        <button>click here to go to another page</button>
        <a href='#'>click here to go to another page</a>
    </div>
  );
}

export default App;
