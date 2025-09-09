import React, { useState} from 'react'
import { useNavigate } from 'react-router';
import { Link } from 'react-router';
export default function Login() {
  const [name,setName] = useState("");
  const [password,setPassword] = useState("");
  const [error,setError] = useState("");
  const navigate = useNavigate();

  const hadleSubmit = async(e:React.FormEvent)=>{
    e.preventDefault();
    setError("")

    try{
        const respon = await fetch('http://localhost:3770/login',{
            method:"POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username: name, password })
        });
        const data = await respon.json()
        if(!respon.ok||data.success){
            setError(data.message)
            return;
        }
    }catch(err){
        setError("server error")
    }
  }


    return (
   <div>
      login
      <form onSubmit={hadleSubmit}>
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">login</button>
      </form>
      {error && <p>{error}</p>}
      <Link to="/">home</Link>
    </div>
  )
}
