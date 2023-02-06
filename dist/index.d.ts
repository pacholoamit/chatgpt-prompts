import * as chatgpt from 'chatgpt';
import { ChatGPTAPI } from 'chatgpt';

declare const createChatGPTPrompt: (instance: ChatGPTAPI) => {
    linuxTerminal: (message: string) => Promise<chatgpt.ChatMessage>;
};

export { createChatGPTPrompt };
