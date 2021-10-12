module.exports = {
  rootDir: '../../',
  setupFilesAfterEnv: ['<rootDir>/config/test/jest.setup.js'],
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': '<rootDir>/config/test/jest.styleMock.js',
    'react-spring': '<rootDir>/node_modules/react-spring/web.cjs',
  },
};
