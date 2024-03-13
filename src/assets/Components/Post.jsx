import posts from "../posts.js"
import "./Post.css"

// let post;
// {username, content, timestamp, likes} = post;
function post() {
    return (
posts.map(({username, content, timestamp, likes}, index) =>
    <div className="post-container" key={index}>
        <h3 className="user">{username}</h3>
        <p className="content">{content}</p>
        <div className="likes-container">
            <img src="src/assets/licon-but-better.png" alt="thumbs up icon" className="likes-icon"/>
            <p className="likes">{likes}</p>
        </div>
        <p className="timestamp">{timestamp}</p>
    </div>
)
    )
}

export default post