import { createChatGPTPrompt } from "../dist";
import { ChatGPTAPI } from "chatgpt";

(async () => {
  const instance = new ChatGPTAPI({
    apiKey: "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",
  });

  const prompt = createChatGPTPrompt(instance);

  let res = await prompt.linuxTerminal("pwd");
  console.log(res.text);
  res = await prompt.linuxTerminal("echo hello world");
  console.log(res.text);
})();
