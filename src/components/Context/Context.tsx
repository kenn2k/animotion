import { Dispatch, SetStateAction, createContext, useState } from "react";
import { LocalAnime } from "../../types/types";

type ContainerProps = {
  children: React.ReactNode;
};

type TypeContext = {
  animeData: LocalAnime | null;
  setAnimeData: React.Dispatch<React.SetStateAction<LocalAnime | null>>;
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
};

const typeContextState: TypeContext = {
  animeData: null,
  setAnimeData: (prevData) => prevData,
  isLoading: false,
  setIsLoading: () => {},
};

export const TypeContext = createContext<TypeContext>(typeContextState);

const ContextProvider = ({ children }: ContainerProps) => {
  const [animeData, setAnimeData] = useState<LocalAnime | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <TypeContext.Provider
      value={{ animeData, setAnimeData, isLoading, setIsLoading }}
    >
      {children}
    </TypeContext.Provider>
  );
};

export default ContextProvider;
