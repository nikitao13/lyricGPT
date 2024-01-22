import {useState} from "react";
import sendApiRequest from "../helpers/sendApiRequest.js";

function UserInput({ addMessage }) {
    const [inputValue, setInputValue] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        event.value = "";
        setInputValue("");
        console.log('search submitted! ' + inputValue);
        addMessage({ content: inputValue, type: "query" });
        try {
            const data = await sendApiRequest(inputValue);
            addMessage({ content: data, type: "response" });
        } catch (error) {
            console.error(error)
        }
    };

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    return (
        <div className="userInput">
            <form
                onSubmit={handleSubmit}
                className="searchBar">

                <input
                    type="text"
                    name="userSearch"
                    placeholder="enter text to translate..."
                    value={inputValue}
                    onChange={handleChange}
                    autoComplete="off"
                    id="userInputField"
                    maxLength={300}
                    required
                />
            </form>
        </div>
    )
}

export default UserInput