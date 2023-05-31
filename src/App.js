import logo from "./logo.svg";
import "./App.css";
import Nav from "./views/Nav";
import { useState } from "react";

function App() {
  // let [name, setName] = useState("Duc");
  // const [address, setAddress] = useState("");

  // const handleEventClick = (event) => {
  //   setName(address);
  // };

  // const handleOnChangInput = (event) => {
  //   setAddress(event.target.value);
  // };

  const [name, setName] = useState("");
  const [currentName, setCurrentName] = useState("");
  // const handleOnChangInput = (event) => {
  //   setName(event.target.value);
  // };

  const handleEventClick = () => {
    setCurrentName(name);
  };
  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>Hello world with {currentName}</div>
        <br />

        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <button type="text" onClick={() => handleEventClick()}>
          Click me
        </button>

        {/* <input
          type="text"
          value={address}
          onChange={(event) => handleOnChangInput(event)}
        />
        <button type="text" onClick={(event) => handleEventClick(event)}>
          Click me
        </button> */}
      </header>
    </div>
  );
}

export default App;
