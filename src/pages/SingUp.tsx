import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router";
import "../style/singUp.css";

export default function SingUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch("http://localhost:3770/user/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: username, password }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        setError(data.message);
        return;
      }

      navigate("/home");
    } catch (err) {
      setError("server faild");
    }
  };
  return (
    <div className="mainSingup">
      <div className="singup">
       <p>signUp</p> 
        <form onSubmit={handleSubmit}>
          <input
          className="singInput"
            type="text"
            placeholder="user name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
           className="singInput"
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button  className="singBtn" type="submit">submit</button>
        </form>
        {error && <p>{error}</p>}
      </div>
    </div>
  );
}
