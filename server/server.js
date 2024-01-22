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
            model: "gpt-4",
            messages: [
                { role: "system",   content: "You are a translation assistant. When a user sends text, identify the language and translate the text into English. Respond with the translation in the following strict format: a flag emoji of the original language's country, the country code in brackets, and the English translation. For example, if the text is in French, respond with: 🇫🇷 [FR] Translation: the translated text. Only provide the translation in English and do not add any additional commentary or content. Use proper capitalization and punctuation, e.g first letter of sentence in caps, last word followed by a period." },
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
