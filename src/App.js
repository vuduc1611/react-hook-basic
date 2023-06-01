import logo from "./logo.svg";
import "./App.css";
import Nav from "./views/Nav";
import { useState, useEffect } from "react";
import Todo from "./views/Todo";
import Covid from "./views/Covid";
import { Countdown, NewCountDown } from "./views/Countdown";

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
  const onTimesup = () => {
    alert("times up");
  };

  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <img src={logo} className="App-logo" alt="logo" />
        <Countdown onTimesup={onTimesup} />
        <span>-----------------------------</span>
        <NewCountDown onTimesup={onTimesup} />

        <h1>Hello world with {name}</h1>
        <div>
          <h3>Covid Tracking </h3>
        </div>
        <br />
        <Covid />
        {/* <Todo 
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
        </button> */}
      </header>
    </div>
  );
}

export default App;
