import { useState, createContext, ReactNode } from "react";

interface ProjectModalContextProps {
  projectModalOpen: boolean,
  setProjectModalOpen: React.Dispatch<React.SetStateAction<boolean>>
};

const ProjectModalContext = createContext<ProjectModalContextProps | null>(null);

const ProjectModalProvider= ({ children }: {children: ReactNode}) => {
  const [projectModalOpen, setProjectModalOpen] = useState(false);

  return (
    <ProjectModalContext.Provider value={{projectModalOpen, setProjectModalOpen}}>
      {children}
    </ProjectModalContext.Provider>
  )
};

export {ProjectModalContext, ProjectModalProvider}