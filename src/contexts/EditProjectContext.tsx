import { useState, createContext, ReactNode } from "react";

interface EditProjectContextProps {
  editProjectOpen: boolean,
  setEditProjectOpen: React.Dispatch<React.SetStateAction<boolean>>
};

const EditProjectContext = createContext<EditProjectContextProps | null>(null);

const EditProjectProvider= ({ children }: {children: ReactNode}) => {
  const [editProjectOpen, setEditProjectOpen] = useState(false);

  return (
    <EditProjectContext.Provider value={{editProjectOpen, setEditProjectOpen}}>
      {children}
    </EditProjectContext.Provider>
  )
};

export {EditProjectContext, EditProjectProvider}