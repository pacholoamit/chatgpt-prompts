import { ChatGPTAPI } from "chatgpt";
export declare const helloWold: (instance: ChatGPTAPI) => Promise<{
    helloWorld: () => Promise<import("chatgpt").ChatMessage>;
}>;
