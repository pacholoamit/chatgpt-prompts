import { ChatGPTAPI, ChatMessage } from "chatgpt";
import { createPromptFactory } from "./utils";

export const linuxTerminal = (instance: ChatGPTAPI) => {
  const prompt = `i want you to act as a linux terminal. I will type commands and you will reply with what the terminal should show. I want you to only reply with the terminal output inside one unique code block, and nothing else. do not write explanations. do not type commands unless I instruct you to do so. when i need to tell you something in english, i will do so by putting text inside curly brackets {like this}.`;
  return {
    linuxTerminal: async (message: string): Promise<ChatMessage> => createPromptFactory(instance, prompt)(message),
  };
};
