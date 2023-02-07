import axios from "axios";
import csv from "csvtojson";
import * as fs from "fs";
import functionTemplate from "./template";
import { url } from "../constants";
import { CSVPrompts } from "../shared/types";

const makeUniquePrompts = (prompts: CSVPrompts[]) => {
  const uniqueArray: CSVPrompts[] = [];

  prompts.forEach((prompt) => {
    let newPrompt = prompt;
    let counter = 1;
    if (uniqueArray.some((item) => item.act === newPrompt.act)) {
      newPrompt.act = `${newPrompt.act}${counter}`;
      counter++;
    }
    uniqueArray.push(newPrompt);
  });
  return uniqueArray;
};

const main = async () => {
  const res = await axios.get(url);
  const prompts: CSVPrompts[] = await csv().fromString(res.data);
  const uniquePrompts = makeUniquePrompts(prompts);

  for (const prompt of uniquePrompts) {
    fs.appendFileSync("prompts.txt", functionTemplate(prompt));
  }
};

main().catch((err) => console.log(err));
