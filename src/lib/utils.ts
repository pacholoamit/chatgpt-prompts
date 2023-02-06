import { ChatGPTAPI, ChatMessage } from "chatgpt";

export const createPromptFactory = (instance: ChatGPTAPI, prompt: string) => {
  let conversationId: string | undefined;
  let parentMessageId: string | undefined;

  return async (message: string, params: ChatGPTPromptParams = {}) => {
    let res: ChatMessage | undefined;
    // If no previous message, send prompt
    if (!conversationId || !parentMessageId) {
      res = await instance.sendMessage(prompt);
      conversationId = res.conversationId;
      parentMessageId = res.id;
    }

    res = await instance.sendMessage(message, {
      conversationId,
      parentMessageId,
      ...params,
    });

    return res;
  };
};
