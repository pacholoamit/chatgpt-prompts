var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// src/index.ts
var src_exports = {};
__export(src_exports, {
  createChatGPTPrompt: () => main_default
});
module.exports = __toCommonJS(src_exports);

// src/lib/utils.ts
var createPromptFactory = (instance, prompt) => {
  let conversationId;
  let parentMessageId;
  return (_0, ..._1) => __async(void 0, [_0, ..._1], function* (message, params = {}) {
    let res;
    if (!conversationId || !parentMessageId) {
      res = yield instance.sendMessage(prompt);
      conversationId = res.conversationId;
      parentMessageId = res.id;
    }
    res = yield instance.sendMessage(message, __spreadValues({
      conversationId,
      parentMessageId
    }, params));
    return res;
  });
};

// src/lib/prompts.ts
var linuxTerminal = (instance) => {
  const prompt = `i want you to act as a linux terminal. I will type commands and you will reply with what the terminal should show. I want you to only reply with the terminal output inside one unique code block, and nothing else. do not write explanations. do not type commands unless I instruct you to do so. when i need to tell you something in english, i will do so by putting text inside curly brackets {like this}.`;
  return {
    linuxTerminal: (message) => __async(void 0, null, function* () {
      return createPromptFactory(instance, prompt)(message);
    })
  };
};

// src/lib/main.ts
var createChatGPTPrompt = (instance) => {
  return __spreadValues({}, linuxTerminal(instance));
};
var main_default = createChatGPTPrompt;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  createChatGPTPrompt
});
