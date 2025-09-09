import React, { useState } from "react";
import { useNavigate } from "react-router";
import "../style/login.css";

export default function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const hadleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const respon = await fetch("http://localhost:3770/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: name, password }),
      });
      const data = await respon.json();
      if (!respon.ok || data.success) {
        setError(data.message);
        return;
      }
    } catch (err) {
      setError("server error");
    }
  };

  return (
    <div className="mainLogin">
      <div className="login">
        <p>login</p>
        <form onSubmit={hadleSubmit}>
          <input
            className="loginInput"
            type="text"
            placeholder="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="loginInput"
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="loginBtn" type="submit">
            login
          </button>
        </form>
        {error && <p>{error}</p>}
      </div>
    </div>
  );
}
