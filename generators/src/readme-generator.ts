import * as fs from "fs";
import ejs from "ejs";
import { Generateable, PromptCsvField } from "./types";
import { funcTemplate } from "./template";

interface GeneratablePrompt {
  code: string;
  prompt: PromptCsvField;
}

const generate = (input: Generateable) => {
  return async (prompts: GeneratablePrompt[]) => {
    const data = await ejs.renderFile(input.source, { data: prompts });
    fs.writeFileSync(input.destination, data);
  };
};

const format = (prompts: PromptCsvField[]) => {
  return prompts.map((prompt) => {
    const code = funcTemplate(prompt); // Improve this
    return { code, prompt };
  });
};

const createReadmeGenerator = (input: Generateable) => {
  return {
    generate: (prompts: GeneratablePrompt[]) => generate(input)(prompts),
    format,
  };
};

export default createReadmeGenerator;
