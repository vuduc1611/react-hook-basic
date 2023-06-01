const Todo = (props) => {
  //properties
  // parent -> child

  const { todos, title, deleteDataTodo } = props;

  const handleDelete = (id) => {
    deleteDataTodo(id);
  };
  return (
    <div className="todos-container">
      <div className="title">{title}</div>
      {todos.map((todo) => {
        return (
          <div key={todo.id}>
            <li className="todo-child">
              {todo.title} &nbsp;&nbsp;&nbsp;
              <span onClick={() => handleDelete(todo.id)}> x </span>
            </li>
          </div>
        );
      })}
      <hr color="grey"></hr>
    </div>
  );
};
export default Todo;
