import * as prompts from "./prompts";
import { ChatGPTAPI } from "chatgpt";

const createChatGPTPrompt = async (instance: ChatGPTAPI) => {
  return {
    ...prompts.helloWold(instance),
  };
};

export default createChatGPTPrompt;
