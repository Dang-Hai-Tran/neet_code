module.exports = {
    preset: "ts-jest",
    testEnvironment: "node",
    transform: {
        "^.+\\.ts$": "ts-jest", // Transform TypeScript files
    },
    moduleFileExtensions: ["ts", "js", "json", "node"],
    testPathIgnorePatterns: ["/node_modules/", "/dist/"], // Ignore node_modules and dist directories
};
