import Message from "./MessageBubble.jsx";
import userAvatar from "../assets/avatarpfp.png";
import gptAvatar from "../assets/gptavatar.png";

function GptOutput({ query, response }) {
    return (
        <div className="gptOutput">
            {query && <Message content={query} avatar={userAvatar} />}
            {response && <Message content={response} avatar={gptAvatar} />}
        </div>
    )
}

export default GptOutput