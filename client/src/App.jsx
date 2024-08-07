import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Signup from "./pages/Signup";
import Player from "./pages/Player";
import TvShow from "./pages/TvShow";
import Netflix from "./pages/Netflix";
import Movie from "./pages/MoviePage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/login" element={<LoginPage />}></Route>
        <Route exact path="/signup" element={<Signup />}></Route>
        <Route exact path="/player" element={<Player />}></Route>
        <Route exact path="/tv" element={<TvShow />}></Route>
        <Route exact path="/" element={<Netflix />}></Route>
        <Route exact path="/movie" element={<Movie />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
