function Message({ content, avatar }) {
    return (
        <div className="messageBubble">
            <img className="avatar" alt="avatar image" src={avatar}/>
            <p className="messageContent">{content}</p>
        </div>
    )
}

export default Message