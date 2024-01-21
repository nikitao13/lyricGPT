import {useState} from "react";

function UserInput({ setQuery, setResponse }) {
    const [inputValue, setInputValue] = useState("");
    const handleSubmit = async (event) => {
        event.preventDefault();
        event.value = "";
        console.log('search submitted! ' + inputValue);
        setQuery(inputValue);
        // const response = sendApiRequest(inputValue); create API request function
        // setResponse(response); set state as response value
        setInputValue("");
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
                    placeholder="enter a song lyric..."
                    value={inputValue}
                    onChange={handleChange}
                    autoComplete="off"
                    id="userInputField"
                    maxLength={85}
                    required
                />
            </form>
        </div>
    )
}

export default UserInput