import { PromptCsvField } from "./types";
import { Generateable } from "./types";
import path from "path";
import createReadmeGenerator from "./readme-generator";
import createPromptsGenerator from "./prompts-generator";

type PromptGenerator = ReturnType<typeof createPromptsGenerator>;

const generateReadme = async (prompts: PromptCsvField[]): Promise<void> => {
  const readmeGenerateable: Generateable = {
    source: path.join(__dirname, "../templates/TEMPLATE.md"),
    destination: path.join(__dirname, "../../README.md"),
  };

  const readmeGenerator = createReadmeGenerator(readmeGenerateable);
  const readmePrompts = readmeGenerator.format(prompts);
  readmeGenerator.generate(readmePrompts);
};

const generateCode = async (instance: PromptGenerator, prompts: PromptCsvField[]): Promise<void> => {
  instance.writeInterface(path.join("./artifacts/types.txt"), prompts);
  instance.writePromptsFunctions("./artifacts/prompts.txt", prompts);
  instance.writeMainImports(path.join("./artifacts/imports.txt"), prompts);
};

const main = async (): Promise<void> => {
  const promptsGenerator = createPromptsGenerator();
  const prompts = await promptsGenerator.getPrompts();

  await generateReadme(prompts);
  await generateCode(promptsGenerator, prompts);
};

main().catch((err) => console.error(err));
