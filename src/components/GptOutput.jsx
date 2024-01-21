import Message from "./MessageBubble.jsx";

function GptOutput({ query, response }) {
    return (
        <div className="gptOutput">
            {query && <Message content={query} />}
            {response && <Message content={response} />}
        </div>
    )
}

export default GptOutput