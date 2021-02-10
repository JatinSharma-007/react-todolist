import React   from 'react' ;
//Importing Components
import Todo from './Todo';

const TodoList = ({todos , setTodos}) => {

    return (
        <div className="todo-container">
            <ul className="todo-list">
                {todos.map(todo => (
                    <Todo setTodos={setTodos}
                     todos={todos}
                     todo={todo}
                     key={todo.id} 
                     text={todo.text}/>
                ))}
            </ul>
        </div>   
    )
}

export default TodoList;
