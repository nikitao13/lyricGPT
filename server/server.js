import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

import OpenAI from "openai";
const apiKey = process.env.OPENAI_API_KEY;
const openai = new OpenAI({ apiKey: apiKey });


const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/chat', async (req, res) => {
    const userQuery = req.body.query;

    try {
        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [
                { role: "system", content: "You are to find the song that contains the lyric that the user sends. The song MUST contain the exact words that the user sends. If you can't find a match just response with 'song not found'." },
                { role: "user", content: userQuery }
            ]
        });
        res.json(response.choices[0].message.content);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('An error occurred while processing your request');
    }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
