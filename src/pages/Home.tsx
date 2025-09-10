import { useEffect, useState } from "react";
import "../App.css";
import Post, { type postProp } from "../copms/Post";
import { Link } from "react-router";
import Secondnav from "../copms/Secondnav";

export default function Home() {
  const [post, setPost] = useState<postProp[]>([]);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await fetch("http://localhost:3770/home/postes");
        const data = await res.json();
        setPost(data.postes);
      } catch (err) {
        console.error(err);
        setError("faild to load all postes");
      }
    };
    fetchPost();
  }, []);
  return (
    <div className="classPost">
      <Secondnav/>
        {post.map((p) => (
        <Link key={p.id} to={`/single/${p.id}`} className="postLink" >
          <Post
          // id={post.id}
          img={p.img}
          description={p.description}
          like={p.like}
          username={p.username}
          time={p.time}
          />
          </Link>
        ))}
        
        {error && <p>{error}</p>}
      </div>
    
  );
}
