const apiKey = import.meta.env.VITE_GPT_API_KEY;

const sendApiRequest = async (userQuery) => {
    const prompt = `Please help to identify the song that contains the following lyric: ${userQuery}`;

    fetch('https://api.openai.com/v1/engines/chatgpt-api/completions', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${apiKey}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            prompt: prompt,
            max_tokens: 100
        })
    })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));

}

export default sendApiRequest;
