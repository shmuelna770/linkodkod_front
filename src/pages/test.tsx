import "../style/singlePost.css";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Post, { type postProp } from "../copms/Post";

export default function SinglePost() {
  const { id } = useParams();
  const [post, setPost] = useState<postProp | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await fetch(`http://localhost:3770/posts/${id}`);
        if (!res.ok) throw new Error("post not found");

        const data = await res.json();
        setPost(data.post);
      } catch (err) {
        setError("failed to load post");
      }
    };
    fetchPost();
  }, [id]);

  if (error) return <p>{error}</p>;
  if (!post) return <p>loading...</p>;

  return (
    <div className="singlePost">
      <Post
        id={post.id}
        img={post.img}
        description={post.description}
        like={post.like}
        username={post.username}
        time={post.time}
      />
      <Link to="/" className="backBtn">⬅ Back</Link>
    </div>
  );
}