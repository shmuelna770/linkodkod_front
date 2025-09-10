import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
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
      const response = await fetch("http://localhost:3770/user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: name, password }),
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
        <Link className="singLink" to="/singUp">
          singUp
        </Link>
        {error && <p>{error}</p>}
      </div>
    </div>
  );
}
