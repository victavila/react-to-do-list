interface ButtonProperties {
  handleClick: () => void;
}

const AddTodoButton = ({ handleClick }: ButtonProperties) => {
  return (
    <button onClick={handleClick}>Add todo</button>
  )
}

export default AddTodoButton;