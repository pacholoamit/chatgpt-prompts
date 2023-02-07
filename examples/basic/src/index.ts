import { ChatGPTAPI } from "chatgpt";
import { createChatGPTPrompt } from "chatgpt-prompts";

const run = async () => {
  const instance = new ChatGPTAPI({
    apiKey: "OPEN_AI_API_KEY",
  });

  const prompt = createChatGPTPrompt(instance);

  let res = await prompt.accountant("Why am I still broke as a software engineer?");
  console.log(res.text);

  res = await prompt.linuxTerminal("How do I not become broke as a software engineer?");
  console.log(res.text);

  res = await prompt.linuxTerminal("What am I?");

  console.log(res.text);
};

run().catch((err) => console.log("Something went wrong"));
