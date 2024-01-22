function Message({ content, avatar, type }) {
    const messageClass = type === "query" ? "queryMsg" : "responseMsg";

    return (
        <div className={`messageBubble ${messageClass}`}>
            {type === "response" && <img className="avatar" alt="avatar image" src={avatar}/>}
            <p className="messageContent">{content}</p>
        </div>
    )
}

export default Message