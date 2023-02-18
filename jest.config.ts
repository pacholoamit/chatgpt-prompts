const jestConfig = {
  testEnvironment: "node",
  transform: {},
  transformIgnorePatterns: ["./node_modules"],
  extensionsToTreatAsEsm: [".ts"],
  setupFiles: ["dotenv/config"],
};

export default jestConfig;
