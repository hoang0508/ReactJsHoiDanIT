import logo from "./logo.svg";
import "./App.css";

const App = () => {
  const nameTitle = () => {
    return <h1>Huy Hoang</h1>;
  };
  const x = 10;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {x > 5 && nameTitle()}
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
};

export default App;