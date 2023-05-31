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
    let newTodo = { id: "abc", title: address, type: "vu" };
    setTodos([...todos, newTodo]);
    setAddress("");
  };

  const handleOnChangInput = (event) => {
    setAddress(event.target.value);
  };

  const [todos, setTodos] = useState([
    { id: "todo1", title: "Watching ", type: "nguyen" },
    { id: "todo2", title: "Learning ", type: "nguyen" },
    { id: "todo3", title: "Playing Game ", type: "vu" },
    { id: "todo4", title: "Reading book ", type: "vu" },
  ]);

  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <img src={logo} className="App-logo" alt="logo" />
        <div>Hello world with {name}</div>
        <br />
        <Todo myData={todos} title={"All todos"} />
        <Todo
          myData={todos.filter((item) => item.type === "vu")}
          title={`Vu's user`}
        />
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
