import { createChatGPTPrompt } from "../dist";
import { expect, test } from "@jest/globals";
import { jest } from "@jest/globals";

jest.setTimeout(100000);

const apiKey = process.env.OPEN_AI_API_KEY;

test("API key must be a string", () => {
  expect(typeof apiKey).toBe("string");
});

const prompts = createChatGPTPrompt({
  apiKey,
});

const message = await prompts.lunatic("Hello, world!");

test("must return prompts as an object", () => {
  expect(prompts && typeof prompts === "object").toBe(true);
});

test("must return a message as an object", () => {
  expect(message && typeof message == "object").toBe(true);
});

test("must return a text as a string from a message", () => {
  expect(typeof message.text).toBe("string");
});
