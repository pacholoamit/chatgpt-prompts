import { createChatGPTPrompt } from "../src";
import { ChatGPTAPI } from "chatgpt";
import * as dotenv from "dotenv";

dotenv.config();

(async () => {
  const instance = new ChatGPTAPI({
    apiKey: process.env.OPEN_AI_API_KEY,
  });

  const prompt = createChatGPTPrompt(instance);

  let res = await prompt.linuxTerminal("pwd");
  console.log(res.text);

  res = await prompt.linuxTerminal("echo hello world");
  console.log(res.text);
})();
