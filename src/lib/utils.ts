import { ChatGPTAPI, ChatMessage } from "chatgpt";

let parentMessageId: string | undefined;

export const createPromptFactory = (instance: ChatGPTAPI, prompt: string) => {
  return async (message: string) => {
    let res: ChatMessage | undefined;

    if (!parentMessageId) {
      res = await instance.sendMessage(prompt);
      parentMessageId = res.id;
    }

    res = await instance.sendMessage(message, {
      parentMessageId,
    });

    parentMessageId = res.id;

    return res;
  };
};
