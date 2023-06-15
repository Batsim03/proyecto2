import { Configuration, OpenAIApi } from "openai"
const configuration = new Configuration ({
    apiKey: ProcessingInstruction.env.OPENAI_API_KEY,})
const openai = new OpenAIApi (configuration)
export function talkWithChatGPT (prompt) {
    model: "gpt-3.5-turbo",
    messages; [{ "role" : "user", "content": prompt }]
}
return completion.data.choices[0].text

const paragraph = document.querySelector("div");
const mediaQueryList = window.matchMedia("(max-width: 600px)");

function screenTest(e) {
  if (e.matches) {
    /* the viewport is 600 pixels wide or less */
    paragraph.textContent = "This is a narrow screen — 600px wide or less.";
    document.body.style.backgroundColor = "pink";
  } else {
    /* the viewport is more than 600 pixels wide */
    paragraph.textContent = "This is a wide screen — more than 600px wide.";
    document.body.style.backgroundColor = "aquamarine";
  }
}

mediaQueryList.addListener(screenTest);