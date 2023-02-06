import { ChatGPTAPI, ChatMessage } from "chatgpt";

let conversationId: string | undefined;
let parentMessageId: string | undefined;

export const createPromptFactory = (instance: ChatGPTAPI, prompt: string) => {
  return async (message: string) => {
    let res: ChatMessage | undefined;

    if (!conversationId || !parentMessageId) {
      res = await instance.sendMessage(prompt);
      conversationId = res.conversationId;
      parentMessageId = res.id;
    }

    res = await instance.sendMessage(message, {
      conversationId,
      parentMessageId,
    });

    conversationId = res.conversationId;
    parentMessageId = res.id;

    return res;
  };
};
