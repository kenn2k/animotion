import { createContext, useState } from "react";
import { LocalAnime } from "../../types/types";

type ContainerProps = {
  children: React.ReactNode;
};

type TypeContext = {
  animeData: LocalAnime | null;
  setAnimeData: React.Dispatch<React.SetStateAction<LocalAnime | null>>;
};

const typeContextState: TypeContext = {
  animeData: null,
  setAnimeData: (prevData) => prevData,
};

export const TypeContext = createContext<TypeContext>(typeContextState);

const ContextProvider = ({ children }: ContainerProps) => {
  const [animeData, setAnimeData] = useState<LocalAnime | null>(null);

  return (
    <TypeContext.Provider value={{ animeData, setAnimeData }}>
      {children}
    </TypeContext.Provider>
  );
};

export default ContextProvider;
