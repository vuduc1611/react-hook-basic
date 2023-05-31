const Todo = (props) => {
  //properties
  // chỉ truyền từ cha sang con
  // parent -> child
  //props là object
  const todos = props.myData;
  return (
    <div className="todos-container">
      {todos.map((todo) => {
        return (
          <li className="todo-child" key={todo.id}>
            {todo.title}
          </li>
        );
      })}
    </div>
  );
};
export default Todo;
