import { useContext } from "react";
import { ProjectContext } from "../../contexts/ProjectContext";
import AddTodo from "../Todos/components/AddTodo/AddTodo";

interface ProjectContextProps {
  selectedProject: string;
}

const TodoModal = () => {
  const { selectedProject } = useContext(ProjectContext) as ProjectContextProps
  
  return (
    <div className="todo-modal">
      <AddTodo project={selectedProject} />
    </div>
  )
}

export default TodoModal;