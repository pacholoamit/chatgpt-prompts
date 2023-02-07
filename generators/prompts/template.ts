import { camelCase } from "lodash";
import { CSVPrompts } from "../shared/types";
import { cleanBackTicks } from "../shared/utils";

const functionTemplate = ({ act, prompt }: CSVPrompts) => {
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

export default functionTemplate;
