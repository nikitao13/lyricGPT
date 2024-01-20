import {useState} from "react";

function UserInput() {
    const [inputValue, setInputValue] = useState("");
    const handleSubmit = async (event) => {
        event.preventDefault();
        event.value = "";
        console.log('search submitted! ' + inputValue);
        // sendApiRequest(inputValue);
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
                    id="userInputField"/>
            </form>
        </div>
    )
}

export default UserInput