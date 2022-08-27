import AddTodoButton from "./components/AddTodo/AddTodoButton"
import TodoContainer from "./components/TodoContainer/TodoContainer"

const Todos = () => {
  return (
    <div className="tasks">
      <TodoContainer />
      <AddTodoButton />
    </div>
  )
}

export default Todos;