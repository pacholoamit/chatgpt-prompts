import axios from "axios";
import * as csv from "csvtojson";
import * as fs from "fs";
import { camelCase } from "lodash";

interface CSVPrompts {
  act: string;
  prompt: string;
}

const cleanBackTicks = (str: String) => str.replace(/`/g, "\\`");

const createTemplate = ({ act, prompt }: CSVPrompts) => {
  const template = `
export const ${camelCase(act)} = (instance: ChatGPTAPI) => {
  const prompt = \`${cleanBackTicks(prompt)}\`;
  return {
    /**
     * @description ${prompt}
     * @param {string} message
     * @returns {Promise<ChatMessage>} ChatGPT Message
     */    
    ${camelCase(act)}: async (message: string): Promise<ChatMessage> => createPromptFactory(instance, prompt)(message),
  };
};
`;

  return template;
};

const main = async () => {
  const res = await axios.get("https://raw.githubusercontent.com/f/awesome-chatgpt-prompts/main/prompts.csv");

  const prompts = await csv().fromString(res.data);

  prompts.forEach((prompt) => {
    fs.appendFileSync("prompts.txt", createTemplate(prompt));
  });
};

main().catch((err) => console.log(err));
