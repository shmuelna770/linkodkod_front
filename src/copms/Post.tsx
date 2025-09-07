import { useState } from "react";
import "../style/post.css";
type postProp = {
  username: string;
  img: string;
  description: string;
  time: string;
  like: string;
};
export default function Post(prop: postProp) {
  const [like, setLike] = useState(0);
  let time = new Date().toLocaleString();

  const hendleLike = () => {
    setLike(like + 1);
  };

  return (
    <div className="post">
      {/* <h2>post</h2> */}
      <div id="headerPost">
        <p id="username">{prop.username}</p>
      </div>
      <img id="image" src={prop.img} alt="fost pictuer" />
      <button id="like" onClick={hendleLike}>
        Like👍{like}
      </button>
      <p id="disciption">{prop.description}</p>
      <p id="time">{time}</p>
    </div>
  );
}
