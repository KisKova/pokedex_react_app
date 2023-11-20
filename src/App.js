
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import About from "./pages/About";
import Pokemon from "./pages/Pokemon";

function App() {
    return (
        <Router basename='/'>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/pokemon/:id" element={<Pokemon />} />
            </Routes>
        </Router>
    );
}


export default App;
