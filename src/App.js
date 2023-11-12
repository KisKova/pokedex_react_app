
import {BrowserRouter, Routes, Route, Router} from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import About from "./pages/About";
import Pokemon from "./pages/Pokemon";

function App() {
  return (
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/pokemon/:id" element={<Pokemon />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
