/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/*.spec.ts'],
  globals: {
    'ts-jest': {
      diagnostics: {
        ignoreCodes: [151001],
      }
    }
  }
};
