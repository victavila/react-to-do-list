import { useState, createContext, ReactNode } from "react";

interface DateContextProps {
  initialDate: string;
  setInitialDate: React.Dispatch<React.SetStateAction<string>>
}

const DateContext  = createContext<DateContextProps | null>(null);

const DateProvider= ({ children }: {children: ReactNode}) => {
  const [initialDate, setInitialDate] = useState('inbox');

  return (
    <DateContext.Provider value={{initialDate, setInitialDate}}>
      {children}
    </DateContext.Provider>
  )
};

export {DateContext, DateProvider}