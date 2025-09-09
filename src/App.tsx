import "./App.css";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import SinglePost from "./pages/SinglePost";
import Header from "./copms/Header";
import Login from "./pages/Login"
import SingUp from "./pages/SingUp";
function App() {

  return (
    <div className="main">
      <div className="header">
        <nav className="nav">
          <Header />
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/singup" element={<SingUp/>}/>
        <Route path="/singlePost" element={<SinglePost />} />
      </Routes>
    </div>
  );
}

export default App;
