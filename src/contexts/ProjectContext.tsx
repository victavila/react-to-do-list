import { useState, createContext, ReactNode } from "react";

interface ProjectContextProps {
  selectedProject: string;
  setSelectedProject: React.Dispatch<React.SetStateAction<string>>
}

const ProjectContext  = createContext<ProjectContextProps | null>(null);

const ProjectProvider= ({ children }: {children: ReactNode}) => {
  const [selectedProject, setSelectedProject] = useState('inbox');

  return (
    <ProjectContext.Provider value={{selectedProject, setSelectedProject}}>
      {children}
    </ProjectContext.Provider>
  )
};

export {ProjectContext, ProjectProvider}