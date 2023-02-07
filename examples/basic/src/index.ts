import { ChatGPTAPI } from "chatgpt";
import { createChatGPTPrompt } from "chatgpt-prompts";

const run = async () => {
  const instance = new ChatGPTAPI({
    apiKey: "OPEN_AI_API_KEY",
  });

  const prompt = createChatGPTPrompt(instance);

  let res = await prompt.linuxTerminal("touch hello.txt");
  console.log(res.text);

  res = await prompt.linuxTerminal("echo hello world > hello.txt");
  console.log(res.text);

  res = await prompt.linuxTerminal("cat hello.txt");

  console.log(res.text);
};

run().catch((err) => console.log("Something went wrong"));
