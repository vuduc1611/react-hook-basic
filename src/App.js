import logo from "./logo.svg";
import "./App.css";
import Nav from "./views/Nav";

function App() {
  let name = "Duc";
  let obj = { name: "Vu", age: "20" };
  let link = "https://www.youtube.com/";
  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          Hello world with {name} in {obj.name}
        </div>
        <p>{JSON.stringify(obj)}</p>
        <a href={link} target="_blank">
          Visit youtube
        </a>
      </header>
    </div>
  );
}

export default App;
