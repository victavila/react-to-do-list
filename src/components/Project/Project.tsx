import Todos from "../Todos/Todos";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";

const Project = () => {
  const { id } = useParams();
  const projectName = useAppSelector(state => state.projects).filter(project => project.id === id)[0].name;
  
  return (
    <div className="Project">
      <h2>{projectName}</h2>
      <Todos />
    </div>
  )
}

export default Project;