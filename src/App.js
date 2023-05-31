import logo from "./logo.svg";
import "./App.css";
import Nav from "./views/Nav";
import { useState, useEffect } from "react";
import Todo from "./views/Todo";

function App() {
  let [name, setName] = useState("Duc");
  const [address, setAddress] = useState("");
  const [todos, setTodos] = useState([
    { id: "todo1", title: "Watching ", type: "nguyen" },
    { id: "todo2", title: "Learning ", type: "nguyen" },
    { id: "todo3", title: "Playing Game ", type: "vu" },
    { id: "todo4", title: "Reading book ", type: "vu" },
  ]);

  //didmount
  useEffect(() => {
    console.log("run use effect");
  }, [address]);

  useEffect(() => {
    console.log("run use effect todos");
  }, [todos]);
  const handleEventClick = (event) => {
    if (!address) {
      alert("Empty input");
      return;
    }
    let newTodo = {
      id: Math.floor(Math.random() * 10000),
      title: address,
      type: "vu",
    };
    setTodos([...todos, newTodo]);
    setAddress("");
  };

  const handleOnChangInput = (event) => {
    setAddress(event.target.value);
  };

  const deleteDataTodo = (id) => {
    let currentTodo = todos;
    currentTodo = currentTodo.filter((item) => item.id !== id);
    setTodos(currentTodo);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <img src={logo} className="App-logo" alt="logo" />
        <div>Hello world with {name}</div>
        <br />
        <Todo
          todos={todos}
          title={"All todos"}
          deleteDataTodo={deleteDataTodo}
        />
        <Todo
          todos={todos.filter((item) => item.type === "vu")}
          title={`Vu's user`}
          deleteDataTodo={deleteDataTodo}
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
