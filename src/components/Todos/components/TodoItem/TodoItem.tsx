const TodoItem = ({ text }: {text: string}) => {
  return (
    <li className="todo-item">
      {text}
    </li>
  )
}

export default TodoItem;