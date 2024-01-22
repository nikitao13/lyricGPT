import ChatHeader from "./ChatHeader.jsx";
import GptOutput from "./GptOutput.jsx";
import UserInput from "./UserInput.jsx";
import {useState} from "react";

function Chatbox() {
    const [messages, setMessages] = useState([]);

    const addMessage = (message) => {
        setMessages((prevMessages) => [...prevMessages, message]);
    }

    return (
        <div className="chatbox">
            <ChatHeader />
            <GptOutput messages={messages}/>
            <UserInput addMessage={addMessage}/>
        </div>
    )
}

export default Chatbox