import { createChatGPTPrompt } from "chatgpt-prompts";

const run = async () => {
  const prompt = createChatGPTPrompt({
    apiKey: "OPEN_AI_API_KEY",
  });

  let res = await prompt.accountant(
    "Why am I still broke as a software engineer?",
  );
  console.log(res.text);

  res = await prompt.accountant(
    "How do I not become broke as a software engineer?",
  );
  console.log(res.text);

  res = await prompt.accountant("Am I a software engineer?");
  console.log(res.text);
};

run().catch((err) => console.log("Something went wrong"));
