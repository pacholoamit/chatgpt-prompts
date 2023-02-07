<p align="center">
  <h1 align="center"><b>🤖 Chat GPT Prompts</b></h1>
  <p align="center">
  A collection of 140+ amazing and useful prompts for GPT-3
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

# 🏗️ Project Setup

Please feel free to read this [blogpost](https://dev.to/pacholoamit/use-over-140-amazing-chatgpt-prompts-in-10-minutes-na3) I made if you are unfamiliar in setting up a NodeJS project that is ESM comptaible

# 🚀 Quickstart

By default the `chatgpt-prompts` persists the instance of the prompt you are using. All of the 140+ prompts found at [awesome-chatgpt-prompts](https://github.com/f/awesome-chatgpt-prompts) are compiled in this library.

```typescript
import { createChatGPTPrompt } from "chatgpt-prompts";
import { ChatGPTAPI } from "chatgpt";

const run = async () => {
  const instance = new ChatGPTAPI({
    apiKey: process.env.OPEN_AI_API_KEY,
  });

  const prompt = createChatGPTPrompt(instance);

  // Make ChatGPT act like a linux terminal
  let res = await prompt.linuxTerminal("ls"); // (I.E /usr /bin /etc )
  console.log(res.text);

  res = await prompt.linuxTerminal("touch hello.txt"); // Creates hello.txt file
  console.log(res.text);

  res = await prompt.linuxTerminal("ls"); // /usr /bin /etc  hello.txt

  console.log(res.text);
};

run().catch((err) => console.log("Something went wrong"));
```

# 💯 Credits

- A big thank you to [Travis Fischer](https://github.com/transitive-bullshit) for making an amazing [NodeJS Client](https://github.com/transitive-bullshit/chatgpt-api) of the ChatGPT API.
- All of the prompts featured in this package comes from [awesome-chatgpt-prompts](https://github.com/f/awesome-chatgpt-prompts) maintained by [Fatih Kadir Akın](https://github.com/f)

# ⭐ All Prompts

Here are all of the available prompts you can use with this package including the function definition associated with.

<% data.forEach(function(item) { %>

## <%= item.prompt.act %>

<%= item.prompt.prompt %>

### Definition

```typescript
<%- item.code %>
```

<% }); %>