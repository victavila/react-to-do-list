import { ReactNode } from "react";
import { DateProvider } from "./DateContext";
import { ProjectProvider } from "./ProjectContext";
import { ProjectModalProvider } from "./ProjectModalContext";
import { TodoModalProvider } from "./TodoModalContext";

const AppContextProvider = ({ children }: {children: ReactNode}) => {
  return (
    <ProjectProvider>
      <DateProvider>
        <ProjectModalProvider>
          <TodoModalProvider>
            {children}
          </TodoModalProvider>
        </ProjectModalProvider>
      </DateProvider>
    </ProjectProvider>
  )
};

export default AppContextProvider