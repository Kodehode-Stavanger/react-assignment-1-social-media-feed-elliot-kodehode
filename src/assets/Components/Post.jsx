import "./Post.css"
// import posts from "../posts.js";

export default function Post({username, content, likes, timestamp}) {
    return (
    <div className="post-container">
        <h3 className="user">{username}</h3>
        <p className="content">{content}</p>
        <div className="likes-container">
            <img src="../../../../new-react-try/src/assets/licon-but-better.png" alt="thumbs up icon" className="likes-icon"/>
            <p className="likes">{likes}</p>
        </div>
        <p className="timestamp">{timestamp}</p>
    </div>
    )
}
