import ChatHeader from "./ChatHeader.jsx";
import GptOutput from "./GptOutput.jsx";
import UserInput from "./UserInput.jsx";

function Chatbox() {
    return (
        <div className="chatbox">
            <ChatHeader />
            <GptOutput />
            <UserInput />
        </div>
    )
}

export default Chatbox