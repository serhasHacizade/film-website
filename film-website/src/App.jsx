import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Netflix from "./pages/Netflix"
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Netflix />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
