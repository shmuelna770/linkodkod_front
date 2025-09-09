import { useEffect, useState } from "react";
import "../App.css";
import Post, { type postProp } from "../copms/Post";
import { Link } from "react-router";

export default function Home() {
  const [post, setPost] = useState<postProp[]>([]);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await fetch("http://localhost:3770/postes");
        const data = await res.json();
        setPost(data.postes);
        // console.log(data);
      } catch (err) {
        console.error(err);
        setError("faild to load all postes");
      }
    };
    fetchPost();
  }, []);
  return (
    <div className="classPost">
        {post.map((post) => (
        <Link to="/singlePost" className="postLink" >
          <Post
          img={post.img}
          description={post.description}
          like={post.like}
          username={post.username}
          time={post.time}
          />
          </Link>
        ))}
        {error && <p>{error}</p>}
      </div>
    
  );
}
