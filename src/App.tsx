import "./App.css";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import SinglePost from "./pages/SinglePost";
import Header from "./copms/Header";
import Login from "./pages/Login"
import SingUp from "./pages/SingUp";
import AddPost from "./pages/AddPost";
function App() {

  return (
    <div className="main">
      <div className="header">
        <nav className="nav">
          <Header />
        </nav>
      </div>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Login/>}/>
        <Route path="/singup" element={<SingUp/>}/>
        <Route path="/single/:id" element={<SinglePost />} />
        <Route path="/add" element={<AddPost/>}/>
      </Routes>
    </div>
  );
}

export default App;
