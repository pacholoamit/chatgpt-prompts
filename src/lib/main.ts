import * as prompts from "./prompts";
import { ChatGPTAPI } from "chatgpt";

const createChatGPTPrompt = (instance: ChatGPTAPI) => {
  return {
    ...prompts.linuxTerminal(instance),
  };
};

export default createChatGPTPrompt;
