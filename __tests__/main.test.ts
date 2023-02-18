import { createChatGPTPrompt } from "../dist";
import { expect, test } from "@jest/globals";
import { jest } from "@jest/globals";

jest.setTimeout(100000);

const prompts = createChatGPTPrompt({
  apiKey: process.env.OPEN_AI_API_KEY,
});

const message = await prompts.lunatic("Hello, world!");

test("must return prompts as an object", () => {
  expect(prompts && typeof prompts === "object").toBe(true);
});

test("must return a message as an object", () => {
  expect(message && typeof message == "object").toBe(true);
});
test("must return a conversationId as a string from a message", () => {
  expect(typeof message.conversationId).toBe("string");
});

test("must return a text as a string from a message", () => {
  expect(typeof message.text).toBe("string");
});
