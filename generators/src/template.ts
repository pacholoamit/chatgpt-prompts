import { camelCase } from "lodash";
import { PromptCsvField } from "./types";
import { cleanBackTicks } from "./utils";

export const funcTemplate = ({ act, prompt }: PromptCsvField) => {
  const func = camelCase(act);
  const promptDescription = cleanBackTicks(prompt);
  const template = `
export const ${func} = (instance: ChatGPTAPI) => {
  const prompt = \`${promptDescription}\`;
  return {
    ${func}: async (message: string): Promise<ChatMessage> => createPromptFactory(instance, prompt)(message),
  };
};
`;
  return template;
};

export const typeTemplate = (prompts: PromptCsvField[]) => {
  const template = `
export interface ChatGPTPromptsCollection {
  ${prompts
    .map(
      (prompt) => `
    /**
     * @description ${cleanBackTicks(prompt.prompt)}
     * @param {string} message
     * @returns {Promise<ChatMessage>} ChatGPT Message
     */   
  ${camelCase(prompt.act)}: (message: string) => Promise<ChatMessage>;`,
    )
    .join("\n")} 
}
  `;

  return template;
};

export const methodImportTemplate = ({ act }: PromptCsvField) => {
  return `...prompts.${camelCase(act)}(instance),`;
};
