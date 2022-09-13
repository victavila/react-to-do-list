import { useState, createContext, ReactNode } from "react";

interface TodoModalContextProps {
  todoModalOpen: boolean,
  setTodoModalOpen: React.Dispatch<React.SetStateAction<boolean>>
};

const TodoModalContext = createContext<TodoModalContextProps | null>(null);

const TodoModalProvider= ({ children }: {children: ReactNode}) => {
  const [todoModalOpen, setTodoModalOpen] = useState(false);

  return (
    <TodoModalContext.Provider value={{todoModalOpen, setTodoModalOpen}}>
      {children}
    </TodoModalContext.Provider>
  )
};

export {TodoModalContext, TodoModalProvider}