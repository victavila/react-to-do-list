import { useContext } from "react";
import { ProjectContext } from "../../contexts/ProjectContext";
import { TodoModalContext } from "../../contexts/TodoModalContext";
import AddTodo from "../Todos/components/AddTodo/AddTodo";
import "./index.css";

interface ProjectContextProps {
  selectedProject: string;
}

interface TodoModalContextProps {
  setTodoModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const TodoModal = () => {
  const { selectedProject } = useContext(ProjectContext) as ProjectContextProps;
  const { setTodoModalOpen } = useContext(TodoModalContext) as TodoModalContextProps;
  
  return (
    <div className="todo-modal" onClick={() => setTodoModalOpen(false)}>
      <div onClick={e => e.stopPropagation()}>
        <AddTodo project={selectedProject} />
      </div>
    </div>
  )
}

export default TodoModal;