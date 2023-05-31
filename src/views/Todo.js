const Todo = (props) => {
  //properties
  // chỉ truyền từ cha sang con
  // parent -> child
  //props là object
  const todos = props.myData;
  return (
    <div className="todos-container">
      <div className="title">{props.title}</div>
      {todos.map((todo) => {
        return (
          <li className="todo-child" key={todo.id}>
            {todo.title}
          </li>
        );
      })}
      <hr></hr>
    </div>
  );
};
export default Todo;
