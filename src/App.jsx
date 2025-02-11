import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

const App = () => {
    return (
        <Router>
            <nav style={{ textAlign: "center", padding: "20px" }}>
                <Link to="/" style={{ margin: "10px" }}>Home</Link>
                <Link to="/about" style={{ margin: "10px" }}>About</Link>
            </nav>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
};

export default App;
