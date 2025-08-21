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

> NOTE: chatgpt-prompts is under active development, most of the features are still experimental and subject to change. This library is also featured in the [unofficial NodeJS client](https://github.com/transitive-bullshit/chatgpt-api) for OpenAI's ChatGPT 3 API.

# 💻 Installation

This package extends the unofficial [NodeJS Client](https://github.com/transitive-bullshit/chatgpt-api) for OpenAI's GPT-3 API.
Make sure you have `node >= 18` and have an OpenAI API Key that you can get [here](https://platform.openai.com/account/api-keys) before you proceed.

```
npm install chatgpt chatgpt-prompts
```

# 🏗️ Project Setup

Please feel free to read this [blogpost](https://dev.to/pacholoamit/use-over-140-amazing-chatgpt-prompts-in-10-minutes-na3) I made if you are unfamiliar in setting up a NodeJS project that is ESM compatible. Otherwise, you can follow the commands below
to set up your project.

```bash
git clone --depth 1 https://github.com/pacholoamit/chatgpt-prompts.git
cp -r chatgpt-prompts/examples/basic my-chatgpt-app
cd my-chatgpt-app
npm install
npm start  # Make sure to change the OPEN_AI_API_KEY in src/index.ts
```

# 🚀 Quickstart

By default the `chatgpt-prompts` persists the instance of the prompt you are using. All of the 140+ prompts found at [awesome-chatgpt-prompts](https://github.com/f/awesome-chatgpt-prompts) are compiled in this library.

```typescript
import { createChatGPTPrompt } from "chatgpt-prompts";

const run = async () => {
  /**
   * @description ChatGPT Prompt, accepts the same parameters as the
   * ChatGPTAPI constructor, but returns a promise that resolves to a
   * ChatMessage.
   *
   * @see {@link https://github.com/transitive-bullshit/chatgpt-api/blob/main/docs/classes/ChatGPTAPI.md#constructor}
   *
   */
  const prompts = createChatGPTPrompt({
    apiKey: "OPEN_AI_API_KEY",
  });

  // Use the Accountant prompt of ChatGPT
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
```

# 💯 Credits

- A big thank you to [Travis Fischer](https://github.com/transitive-bullshit) for making an amazing [NodeJS Client](https://github.com/transitive-bullshit/chatgpt-api) of the ChatGPT API.
- All of the prompts featured in this package comes from [awesome-chatgpt-prompts](https://github.com/f/awesome-chatgpt-prompts) maintained by [Fatih Kadir Akın](https://github.com/f)

# ⭐ Prompts

Here are all of the 140+ available prompts you can use with this package including the function definition associated with.

<% data.forEach(function(item) { %>

## <%= item.prompt.act %>

<%= item.prompt.prompt %>

### Definition

```typescript
<%- item.code %>
```

<% }); %>
