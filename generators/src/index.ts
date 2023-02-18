import axios from "axios";
import csv from "csvtojson";
import ejs from "ejs";
import * as fs from "fs";
import { funcTemplate, methodImportTemplate, typeTemplate } from "./template";
import { promptsFile, url, methodImportsFile, templateMarkdownFile, readmeFile, typesFile } from "./constants";
import { PromptCsvField } from "./types";
import createReadmeGenerator from "./readme/readme-generator";

const makeUniquePrompts = (prompts: PromptCsvField[]) => {
  const uniqueArray: PromptCsvField[] = [];

  prompts.forEach((prompt) => {
    let newPrompt = prompt;
    let counter = 2;
    if (uniqueArray.some((item) => item.act === newPrompt.act)) {
      newPrompt.act = `${newPrompt.act}${counter}`;
      counter++;
    }
    uniqueArray.push(newPrompt);
  });
  return uniqueArray;
};

const getPrompts = async (): Promise<PromptCsvField[]> => {
  const res = await axios.get(url);
  return csv().fromString(res.data);
};

const writeTypesFile = (uniquePrompts: PromptCsvField[]) => {
  const types = typeTemplate(uniquePrompts);
  fs.writeFileSync(typesFile, types);
};

const writeFiles = (uniquePrompts: PromptCsvField[]) => {
  for (const prompt of uniquePrompts) {
    const func = funcTemplate(prompt);
    fs.appendFileSync(promptsFile, func);
    fs.appendFileSync(methodImportsFile, methodImportTemplate(prompt));
  }
};

const generateReadme = async (prompts: PromptCsvField[]) => {
  const readmeGenerator = createReadmeGenerator(templateMarkdownFile, readmeFile);
  const readmePrompts = readmeGenerator.format(prompts);
  readmeGenerator.generate(readmePrompts);
};

const main = async () => {
  const prompts = await getPrompts().then((prompts) => makeUniquePrompts(prompts));

  await generateReadme(prompts);
  // await writeTypesFile(prompts);
  // writeFiles(prompts);
};

main().catch((err) => console.error(err));
