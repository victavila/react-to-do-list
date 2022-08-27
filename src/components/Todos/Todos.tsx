import { useState } from "react"
import AddTodo from "./components/AddTodo/AddTodo";
import { useAppSelector } from "../../app/hooks";
import AddTodoButton from "./components/AddTodoButton/AddTodoButton"
import TodoItem from "./components/TodoItem/TodoItem";

const Todos = () => {
  const todos = useAppSelector(state => state.todos);
  const [visibleForm, setVisibleForm] = useState(false);

  const toggleFormVisibility = () => {
    setVisibleForm(!visibleForm);
  }

  
  return (
    <div className="todos">
      <ul>
        {todos.map(todo => (
          <TodoItem 
          key={todo.id}
          {...todo}
          />
        ))}
      </ul>
      {visibleForm ? <AddTodo handleClick={toggleFormVisibility} />:<AddTodoButton handleClick={toggleFormVisibility} />}
    </div>
  )
}

export default Todos;