import axios from "axios";
import csv from "csvtojson";
import * as fs from "fs";
import functionTemplate from "./template";
import { url } from "../constants";

const main = async () => {
  const res = await axios.get(url);
  const prompts = await csv().fromString(res.data);

  prompts.forEach((prompt) => {
    fs.appendFileSync("prompts.txt", functionTemplate(prompt));
  });
};

main().catch((err) => console.log(err));
