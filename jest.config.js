/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */


// export default {
//   roots: ['<rootDir>/src',],
//   collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
//   coverageDirectory: "coverage",
//   coverageProvider: "babel",
//   testEnvironment: "jest-environment-node",
//   preset: '@shelf/jest-mongodb',
//   watchPathIgnorePatterns: ['globalConfig'],
//   transform: {
//     '.+\\.ts$': 'ts-jest'
//   },
// }

module.exports = {
  roots: ['<rootDir>/src',],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts',
    '!<rootDir>/src/main/**'
  ],
  coverageDirectory: 'coverage',
  coverageProvider: 'babel',
  testEnvironment: 'node',
  preset: '@shelf/jest-mongodb',
  watchPathIgnorePatterns: ['globalConfig'],
  transform: {
    '.+\\.ts$': 'ts-jest'
  },
  moduleNameMapper: {
    '@/tests/(.*)': '<rootDir>/tests/$1',
    '@/(.*)': '<rootDir>/src/$1'
  }
}