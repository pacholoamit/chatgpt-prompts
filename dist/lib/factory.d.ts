import { ChatGPTAPI } from "chatgpt";
declare const createChatGPTPrompt: (instance: ChatGPTAPI) => Promise<{
    helloWorld: () => Promise<import("chatgpt").ChatMessage>;
}>;
export default createChatGPTPrompt;
