// eslint-disable-next-line @typescript-eslint/no-var-requires
const { pathsToModuleNameMapper } = require('ts-jest/utils');

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { compilerOptions } = require('./tsconfig.json');

export default {
  bail: true,
  clearMocks: true,
  testEnvironment: 'node',
  testMatch: ['**/*.test.ts?(x)', '**/*.spec.ts?(x)'],
  cacheDirectory: '<rootDir>/target/jest-cache',
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: '<rootDir>/src/',
  }),
  coverageDirectory: '<rootDir>/target/test-results/',
  reporters: [
    'default',
    [
      'jest-junit',
      {
        outputDirectory: './target/test-results/',
        outputName: 'TESTS-results-jest.xml',
      },
    ],
  ],
  testResultsProcessor: 'jest-sonar-reporter',
  transformIgnorePatterns: ['node_modules/'],
  preset: 'ts-jest',
};
