<p align="center">
  <h1 align="center"><b>🤖 Chat GPT Prompts</b></h1>
  <p align="center">
  A collection of amazing and useful prompts for GPT-3
    </p>
</p>
<p align="center">    
    <img src="https://img.shields.io/github/package-json/v/pacholoamit/chatgpt-prompts" />
    <img src="https://img.shields.io/badge/%3C%2F%3E-TypeScript-%230074c1.svg" />
    <img src="https://img.shields.io/github/actions/workflow/status/pacholoamit/chatgpt-prompts/publish.yml" />
    <img src="https://img.shields.io/github/license/pacholoamit/chatgpt-prompts" />
    <img src="https://img.shields.io/node/v/chatgpt-prompts">
</p>

> NOTE: chatgpt-prompts is under active development, most of the features are still experimental and subject to change.

# 💻 Installation

This package extends the unofficial [NodeJS Client](https://github.com/transitive-bullshit/chatgpt-api) for OpenAI's GPT-3 API.

```
npm install chatgpt chatgpt-prompts
```

# 🚀 Quickstart

By default the `chatgpt-prompts` persists the instance of the prompt you are using. 

```typescript
import { createChatGPTPrompt } from "chatgpt-prompts";
import { ChatGPTAPI } from "chatgpt";

const run = async () => {
  const instance = new ChatGPTAPI({
    apiKey: process.env.OPEN_AI_API_KEY,
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
```
