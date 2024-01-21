import avatarPfp from "../assets/avatarpfp.png";
function Message({ content }) {
    return (
        <div className="messageBubble">
            <img className="avatar" alt="avatar image" src={avatarPfp}/>
            <p className="messageContent">{content}</p>
        </div>
    )
}

export default Message