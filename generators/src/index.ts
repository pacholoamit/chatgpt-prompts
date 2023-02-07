import axios from "axios";
import csv from "csvtojson";
import ejs from "ejs";
import * as fs from "fs";
import { funcTemplate, methodImportTemplate } from "./template";
import { promptsFile, url, methodImportsFile, templateMarkdownFile, readmeFile } from "./constants";
import { CSVPrompts } from "./types";

const makeUniquePrompts = (prompts: CSVPrompts[]) => {
  const uniqueArray: CSVPrompts[] = [];

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

const getPrompts = async (): Promise<CSVPrompts[]> => {
  const res = await axios.get(url);
  return csv().fromString(res.data);
};

const makeMarkdownReadmePrompts = (prompts: CSVPrompts[]): { code: string; prompt: CSVPrompts }[] => {
  return prompts.map((prompt) => {
    const code = funcTemplate(prompt);
    return { code, prompt };
  });
};

const writeMarkdownFile = async (markdownReadmePrompts: { code: string; prompt: CSVPrompts }[]) => {
  const data = await ejs.renderFile(templateMarkdownFile, { data: markdownReadmePrompts });
  fs.writeFileSync(readmeFile, data);
};

const writeFiles = (uniquePrompts: CSVPrompts[]) => {
  for (const prompt of uniquePrompts) {
    const func = funcTemplate(prompt);
    fs.appendFileSync(promptsFile, func);
    fs.appendFileSync(methodImportsFile, methodImportTemplate(prompt));
  }
};

const main = async () => {
  const prompts = await getPrompts();
  const uniquePrompts = makeUniquePrompts(prompts);
  const markdownReadmePrompts = makeMarkdownReadmePrompts(uniquePrompts);

  await writeMarkdownFile(markdownReadmePrompts);
  writeFiles(uniquePrompts);
};

main().catch((err) => console.error(err));
