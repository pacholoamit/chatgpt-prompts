import { camelCase } from "lodash";
import { CSVPrompts } from "./types";
import { cleanBackTicks } from "./utils";

export const funcTemplate = ({ act, prompt }: CSVPrompts) => {
  const func = camelCase(act);
  const promptDescription = cleanBackTicks(prompt);
  const template = `
export const ${func} = (instance: ChatGPTAPI) => {
  const prompt = \`${promptDescription}\`;
  return {
    /**
     * @description ${prompt}
     * @param {string} message
     * @returns {Promise<ChatMessage>} ChatGPT Message
     */    
    ${func}: async (message: string): Promise<ChatMessage> => createPromptFactory(instance, prompt)(message),
  };
};
`;
  return template;
};

export const methodImportTemplate = ({ act }: CSVPrompts) => {
  return `...prompts.${camelCase(act)}(instance),`;
};
