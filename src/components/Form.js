
const Form = ({setInputText, todos, setTodos, inputText}) => {
  // setting the input to state
  const inputTextHandler = (e) =>{
    
    setInputText(e.target.value);
  };
  const submitTodoHandler = (e) =>{
    e.preventDefault();
    setTodos([
      ...todos,
      {text : inputText, completed: false, id: Math.random() * 1000 }
    ]);
    console.log(todos);
    setInputText("");
  };
  return (
    <form>
      <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form
