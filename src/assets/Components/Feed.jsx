import posts from "../posts.js";
import Post from "./Post.jsx";
import "./Feed.css";

export default function Feed(){
    return (
        <div className="feed">
            {posts.map((post, index) => (
        <Post key={index} username={post.username} content={post.content} likes={post.likes} timestamp={post.timestamp}
        />))
    }
        </div>
    );
}

