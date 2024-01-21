import ChatHeader from "./ChatHeader.jsx";
import GptOutput from "./GptOutput.jsx";
import UserInput from "./UserInput.jsx";
import {useState} from "react";

function Chatbox() {
    const [query, setQuery] = useState("");
    const [response, setResponse] = useState("");

    return (
        <div className="chatbox">
            <ChatHeader />
            <GptOutput query={query} response={response}/>
            <UserInput setQuery={setQuery} setResponse={setResponse}/>
        </div>
    )
}

export default Chatbox