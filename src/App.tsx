import { useEffect, useState } from "react";
import "./App.css";
import Header from "./copms/Header";
import Post, { type postProp } from "./copms/Post";
import { Route, Router, Routes } from "react-router";
import Home from "./pages/Home";
import SinglePost from "./pages/SinglePost";
function App() {
  const [post, setPost] = useState<postProp[]>([]);
  const [error, setError] = useState<string>("");
  
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await fetch("http://localhost:3770/postes");
        const data = await res.json();
        setPost(data.postes);
        console.log(data);
      } catch (err) {
        console.error(err);
        setError("faild to load all postes");
      }
    };
    fetchPost();
  }, []);
  
  return (
    <div className="main">
      <div className="header">
        <nav className="nav">
          <Header/>
        </nav>
      </div>
      <div className="classPost">
        {post.map((post) => (
          <Post
            img={post.img}
            description={post.description}
            like={post.like}
            username={post.username}
            time={post.time}
          />
        ))}
        {error && <p>{error}</p>}
      </div>
       
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/login" element={<Login/>}/> */}
        <Route path="/singlePost" element={<SinglePost/>}/>
      </Routes>
     
    </div>
  );
  
}

export default App;
