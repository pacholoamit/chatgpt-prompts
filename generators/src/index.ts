import {
  promptsFile,
  methodImportsFile,
  templateMarkdownFile,
  readmeFile,
  typesFile,
} from "./constants";
import { PromptCsvField } from "./types";
import createReadmeGenerator from "./readme-generator";
import createPromptsGenerator from "./prompts-generator";

type PromptGenerator = ReturnType<typeof createPromptsGenerator>;

const generateReadme = async (prompts: PromptCsvField[]): Promise<void> => {
  const readmeGenerator = createReadmeGenerator(
    templateMarkdownFile,
    readmeFile,
  );
  const readmePrompts = readmeGenerator.format(prompts);
  readmeGenerator.generate(readmePrompts);
};

const generateCode = async (
  instance: PromptGenerator,
  prompts: PromptCsvField[],
): Promise<void> => {
  instance.writeInterface(typesFile, prompts);
  instance.writePromptsFunctions(promptsFile, prompts);
  instance.writeMainImports(methodImportsFile, prompts);
};

const main = async (): Promise<void> => {
  const promptsGenerator = createPromptsGenerator();
  const prompts = await promptsGenerator.getPrompts();

  await generateReadme(prompts);
  await generateCode(promptsGenerator, prompts);
};

main().catch((err) => console.error(err));
