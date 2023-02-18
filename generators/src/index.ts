import ejs from "ejs";
import * as fs from "fs";
import { funcTemplate, methodImportTemplate, typeTemplate } from "./template";
import { promptsFile, methodImportsFile, templateMarkdownFile, readmeFile, typesFile } from "./constants";
import { PromptCsvField } from "./types";
import createReadmeGenerator from "./readme-generator";
import createPromptsGenerator from "./prompts-generator";

const generateReadme = async (prompts: PromptCsvField[]) => {
  const readmeGenerator = createReadmeGenerator(templateMarkdownFile, readmeFile);
  const readmePrompts = readmeGenerator.format(prompts);
  readmeGenerator.generate(readmePrompts);
};

const generateCode = async (instance: ReturnType<typeof createPromptsGenerator>, prompts: PromptCsvField[]) => {
  instance.writeInterface(typesFile, prompts);
  instance.writePromptsFunctions(promptsFile, prompts);
  instance.writeMainImports(methodImportsFile, prompts);
};

const main = async () => {
  const promptsGenerator = createPromptsGenerator();
  const prompts = await promptsGenerator.getPrompts();

  await generateReadme(prompts);
  await generateCode(promptsGenerator, prompts);
};

main().catch((err) => console.error(err));
