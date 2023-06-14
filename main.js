import { Configuration, OpenAIApi } from "openai"
const configuration = new Configuration ({
    apiKey: ProcessingInstruction.env.OPENAI_API_KEY,})
const openai = new OpenAIApi (configuration)
export function talkWithChatGPT (prompt) {
    model: "gpt-3.5-turbo",
    messages; [{ "role" : "user", "content": prompt }]
}
return completion.data.choices[0].text