export const BasicTodoList = ({ addNewTodo, todos, clearTodos }) => {
  return (
    <>
      <div className="todo-cont">
        <div className="todo-box">
          <h1>Todo List</h1>
          <div className="flex-form">
            <input placeholder="e.g learn react" id="todo-text" type="text" />
            <button onClick={addNewTodo} id="todo-submit">
              Submit
            </button>
          </div>
          <div id="todo-list">
            {Object.keys(todos).map((id) => (
              <p key={id}>{todos[id].text}</p>
            ))}
          </div>
          <div onClick={clearTodos} id="todo-clear">
            Clear items
          </div>
        </div>
      </div>
    </>
  );
};
