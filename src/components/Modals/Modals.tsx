import { useContext } from "react";
import { ProjectModalContext } from "../../contexts/ProjectModalContext";
import { TodoModalContext } from "../../contexts/TodoModalContext";
import ProjectModal from "./ProjectModal";
import TodoModal from "./TodoModal";

interface ProjectModalProps {
  projectModalOpen: boolean
}

interface TodoModalProps {
  todoModalOpen: boolean
}


const Modals = () => {
  const { projectModalOpen } = useContext(ProjectModalContext) as ProjectModalProps;
  const { todoModalOpen } = useContext(TodoModalContext) as TodoModalProps;
  
  return (
    <>
      {projectModalOpen && <ProjectModal />}
      {todoModalOpen && <TodoModal />}
    </>
  )
}

export default Modals;