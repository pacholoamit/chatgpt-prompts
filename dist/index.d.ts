import * as chatgpt from 'chatgpt';
import { ChatGPTAPI } from 'chatgpt';

declare const createChatGPTPrompt: (instance: ChatGPTAPI) => {
    helloWorld: () => Promise<chatgpt.ChatMessage>;
};

export { createChatGPTPrompt };
