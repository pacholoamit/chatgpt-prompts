import { camelCase } from "lodash";
import { CSVPrompts } from "../shared/types";

const createImportTemplate = ({ act }: CSVPrompts) => {
  return `...prompts.${camelCase(act)}(instance),`;
};
