import React, { useState } from "react";
import { useNavigate } from "react-router";
import "../style/addPost.css"
import Secondnav from "../copms/Secondnav";


export default function AddPost() {
    const [img, setImg] = useState("");
    const [description, setDescription] = useState("");
    const [like,setLike] = useState("")
    const [username,setUsername]= useState("")
    const [time,setTime] = useState("")
    const [error, setError] = useState("");
    const navigate = useNavigate();
  
    const hadleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setError("");
  
      try {
        const response = await fetch("http://localhost:3770/home/add", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ username: username, img,description,like,time }),
        });
  
        const data = await response.json();
        if (!response.ok || !data.success) {
          setError(data.message);
          return;
        }
        navigate('/home')
  
      } catch (err) {
        setError("server faild");
      }
    };
  
    return (
      <div className="mainAdddPost">
        <Secondnav/>
        <div className="addPost">
          <p>add post</p> 
          <form onSubmit={hadleSubmit}>
            <input
            className="addInput"
              type="text"
              placeholder="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
             <input
            className="addInput"
              type="text"
              placeholder="image"
              value={img}
              onChange={(e) => setImg(e.target.value)}
            />
            <input
            className="addInput"
              type="text"
              placeholder="like"
              value={like}
              onChange={(e) => setLike(e.target.value)}
            />
            <input
            className="addInput"
              type="text"
              placeholder="discription"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <input
            className="addInput"
              type="text"
              placeholder="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
            <button className="addBtn" type="submit">add Post</button>
          </form>
          {error && <p>{error}</p>}
        </div>
      </div>
    );
}
