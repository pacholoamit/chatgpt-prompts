import axios, { AxiosResponse } from "axios";
import csv from "csvtojson";
import fs from "fs";
import { funcTemplate, methodImportTemplate, typeTemplate } from "./template";
import { PromptCsvField } from "./types";

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

const getPrompts = async (url: string): Promise<PromptCsvField[]> => {
  const res: AxiosResponse<string> = await axios.get(url);
  return csv().fromString(res.data);
};

const writeInterface = (filePath: string, prompts: PromptCsvField[]) => {
  const types = typeTemplate(prompts);
  fs.writeFileSync(filePath, types);
};

const writePromptsFunctions = (filePath: string, prompts: PromptCsvField[]) => {
  for (const prompt of prompts) {
    fs.appendFileSync(filePath, funcTemplate(prompt));
  }
};

const writeMainImports = (filePath: string, prompts: PromptCsvField[]) => {
  for (const prompt of prompts) {
    fs.appendFileSync(filePath, methodImportTemplate(prompt));
  }
};

const createPromptsGenerator = () => {
  const url =
    "https://raw.githubusercontent.com/f/awesome-chatgpt-prompts/main/prompts.csv";
  return {
    getPrompts: () =>
      getPrompts(url).then((prompts) => makeUniquePrompts(prompts)),
    writeInterface,
    writePromptsFunctions,
    writeMainImports,
  };
};

export default createPromptsGenerator;
