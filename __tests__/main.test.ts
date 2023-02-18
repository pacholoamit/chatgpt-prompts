import { createChatGPTPrompt } from "../dist";
import { describe, expect, it } from "@jest/globals";
import { jest } from "@jest/globals";
import { info } from "console";

jest.setTimeout(100000);

describe("chatgpt-prompts library", () => {
  it("should pass", async () => {
    info(process.env.OPEN_AI_API_KEY);
    const prompts = createChatGPTPrompt({
      apiKey: process.env.OPEN_AI_API_KEY,
    });

    const res = await prompts.lunatic("Hello, world!");

    expect(res).not.toThrowError();
  });
});
