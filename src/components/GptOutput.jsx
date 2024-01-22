import Message from "./MessageBubble.jsx";
// import userAvatar from "../assets/avatarpfp.png";
import gptAvatar from "../assets/gptavatar.png";
import {useEffect, useRef} from "react";

function GptOutput({ messages }) {
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    return (
        <div className="gptOutput">
            {messages.map((message, index) => (
                <Message
                    key={index}
                    content={message.content}
                    avatar={message.type === "query" ? "" : gptAvatar}
                    type={message.type}
                />
            ))}
            <div ref={messagesEndRef} />
        </div>
    )
}

export default GptOutput