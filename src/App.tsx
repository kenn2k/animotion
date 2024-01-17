import "./App.css";

import Search from "./components/search/Search";

import Main from "./components/main/Main";
import ContextProvider from "./components/Context/Context";
import Container from "./components/container/Container";
import AnimeList from "./components/category/AnimeList";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <ContextProvider>
      <Container>
        <Routes>
          <Route path="/" element={[<Search />, <AnimeList />]} />
          <Route path="/search" element={[<Search />, <Main />]} />
        </Routes>
      </Container>
    </ContextProvider>
  );
};

export default App;
