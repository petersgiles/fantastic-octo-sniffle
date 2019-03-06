module.exports = {
    preset: "jest-preset-angular",
    roots: ['./'],
    setupFilesAfterEnv: ["<rootDir>/setup-jest.ts"],
    globals: {
      'ts-jest': {
        tsConfigFile: './tsconfig.spec.json',
      },
      __TRANSFORM_HTML__: true,
    },
  }