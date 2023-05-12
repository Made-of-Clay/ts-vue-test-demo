import type { Config } from 'jest';

const config: Config = {
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node', 'vue'],
    testMatch: ['**/*.test.tsx', '**/*.spec.tsx', '**/*.test.ts', '**/*.spec.ts'],
    testEnvironment: 'jsdom',
    testEnvironmentOptions: {
        customExportConditions: ['node', 'node-addons'],
    },
    transform: {
        '^.+\\.vue$': '@vue/vue3-jest',
        '^.+\\.ts?$': 'ts-jest',
    },
    transformIgnorePatterns: [
        '/node_modules/(?!(vanillajs-datepicker)/)',
    ],
    moduleDirectories: ['node_modules', 'src'],
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
        '^.+\\.(css|scss)$': '<rootDir>/src/styles/styleStub.js',
    },
};

export default config;
