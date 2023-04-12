import Navbar from "./Navbar";
import Login from "./components/Login";
import Home from "./components/Home";
import Register from "./components/Register";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Login />} />
          <Route path="/about" element={<Register />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
