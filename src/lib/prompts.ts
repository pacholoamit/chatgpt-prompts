import { ChatGPTAPI } from "chatgpt";

export const helloWold = async (instance: ChatGPTAPI) => {
  return {
    helloWorld: async () => {
      const res = await instance.sendMessage("Hello World");
      return res;
    },
  };
};
