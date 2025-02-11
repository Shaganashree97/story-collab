import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NotFound from "./pages/NotFound";

const App = () => {
    return (
        <Router>
            <nav style={{ textAlign: "center", padding: "20px" }}>
                <Link to="/" style={{ margin: "10px" }}>Home</Link>
                <Link to="/about" style={{ margin: "10px" }}>About</Link>
                <Link to="/login" style={{ margin: "10px" }}>Login</Link>
                <Link to="/signup" style={{ margin: "10px" }}>Signup</Link>
            </nav>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
};

export default App;
