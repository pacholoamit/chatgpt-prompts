import { createChatGPTPrompt } from "../src";
import { describe, expect, test, it } from "@jest/globals";

describe("chatgpt-prompts library", () => {
  it("should pass", async () => {
    const prompts = createChatGPTPrompt({
      apiKey: process.env.OPEN_AI_API_KEY,
    });

    const res = await prompts.lunatic("Hello, world!");

    expect(res).not.toThrowError();
  });
});
