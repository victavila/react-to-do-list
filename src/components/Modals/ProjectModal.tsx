import { useContext } from "react";
import { EditProjectContext } from "../../contexts/EditProjectContext";
import { ProjectModalContext } from "../../contexts/ProjectModalContext";
import AddProject from "../AddProject/AddProject";
import EditProject from "../EditProject/EditProject";
import "./index.css"


interface ProjectModalContextProps {
  setProjectModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}

interface EditProjectContextProps {
  editProjectOpen: boolean,
  setEditProjectOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const ProjectModal = () => {
  const { setProjectModalOpen } = useContext(ProjectModalContext) as ProjectModalContextProps;
  const { editProjectOpen, setEditProjectOpen } = useContext(EditProjectContext) as EditProjectContextProps;

  const handleModalClose = () => {
    setProjectModalOpen(false);
    setEditProjectOpen(false);
  }
  
  return (
    <div className="project-modal" onClick={() => handleModalClose()} >
      <div onClick={e => e.stopPropagation()}>
        {editProjectOpen ? <EditProject /> : <AddProject />}
      </div>
    </div>
  )
}

export default ProjectModal;