import ts from "typescript";
import fs from "fs";

const name = "test.ts";
const code = "console.log('hello world')";
const sourceFile = ts.createSourceFile(name, code, ts.ScriptTarget.Latest, false, ts.ScriptKind.TS);

fs.writeFileSync(name, sourceFile.getFullText());
