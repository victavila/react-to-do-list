import Todos from "../Todos/Todos";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import "./Project.css"

const Project = () => {
  const { id } = useParams();
  const project = useAppSelector(state => state.projects).filter(project => project.id === id)[0];
  const projectName = project.name;
  const todos = useAppSelector(state => state.todos);
  const visibleTodos = todos.filter(todo => todo.projectId === id);
  
  return (
    <div className="project">
      <h2>{projectName}</h2>
      <Todos todos={visibleTodos} date="" disable={false} />
    </div>
  )
}

export default Project;