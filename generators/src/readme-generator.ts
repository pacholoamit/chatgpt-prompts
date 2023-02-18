import * as fs from "fs";
import ejs from "ejs";
import { PromptCsvField } from "./types";
import { funcTemplate } from "./template";

const generate = (template: string, path: string) => {
  return async (prompts: GeneratablePrompt[]) => {
    const data = await ejs.renderFile(template, { data: prompts });
    fs.writeFileSync(path, data);
  };
};

const format = (prompts: PromptCsvField[]) => {
  return prompts.map((prompt) => {
    const code = funcTemplate(prompt); // Improve this
    return { code, prompt };
  });
};

interface GeneratablePrompt {
  code: string;
  prompt: PromptCsvField;
}

const createReadmeGenerator = (template: string, path: string) => {
  return {
    generate: (prompts: GeneratablePrompt[]) => generate(template, path)(prompts),
    format: (prompts: PromptCsvField[]) => format(prompts),
  };
};

export default createReadmeGenerator;
