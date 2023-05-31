import logo from "./logo.svg";
import "./App.css";
import Nav from "./views/Nav";
import { useState } from "react";
import Todo from "./views/Todo";

function App() {
  let [name, setName] = useState("Duc");
  const [address, setAddress] = useState("");

  const handleEventClick = (event) => {
    if (!address) {
      alert("Empty input");
      return;
    }
    let newTodo = { id: "abc", title: address };
    setTodos([...todos, newTodo]);
    setAddress("");
  };

  const handleOnChangInput = (event) => {
    setAddress(event.target.value);
  };

  const [todos, setTodos] = useState([
    { id: "todo1", title: "Watching " },
    { id: "todo2", title: "Learning " },
    { id: "todo3", title: "Playing Game " },
  ]);

  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>Hello world with {name}</div>
        <br />
        <Todo myData={todos} title={"All todos"} />
        <input
          type="text"
          value={address}
          onChange={(event) => handleOnChangInput(event)}
        />
        <button type="text" onClick={(event) => handleEventClick(event)}>
          Click me
        </button>
      </header>
    </div>
  );
}

export default App;
