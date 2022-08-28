interface TodoItemProps {
  text: string,
  completed: boolean,
  onClick: () => void,
}

const TodoItem = ({ text, completed, onClick }: TodoItemProps) => {
  return (
    <li 
    className="todo-item" 
    onClick={onClick} 
    style={{
      textDecoration: completed ? "line-through" : "none"
    }}>
      {text}
    </li>
  )
}

export default TodoItem;