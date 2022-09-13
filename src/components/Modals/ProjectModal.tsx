import { useContext } from "react";
import { ProjectModalContext } from "../../contexts/ProjectModalContext";
import AddProject from "../Sidebar/AddProject/AddProject";
import "./index.css"


interface ProjectModalContextProps {
  setProjectModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const ProjectModal = () => {
  const { setProjectModalOpen } = useContext(ProjectModalContext) as ProjectModalContextProps;
  
  return (
    <div className="project-modal" onClick={() => setProjectModalOpen(false)} >
      <div onClick={e => e.stopPropagation()}>
        <AddProject />
      </div>
    </div>
  )
}

export default ProjectModal;