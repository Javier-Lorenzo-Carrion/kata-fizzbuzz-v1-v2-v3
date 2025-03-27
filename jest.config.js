/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  verbose: true,
  collectCoverage: true,
  coverageDirectory: "./coverage",
  testMatch: [
    "**/src/tests/**/*.test.ts",
    "**/src/tests/**/*.spec.ts"
  ],
  transform: {
    "^.+\\.ts$": "ts-jest",
  },
};
