// Optional: configure or set up a testing framework before each test.
// If you delete this file, remove `setupFilesAfterEnv` from `jest.config.js`

// Used for __tests__/testing-library.js
// Learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';
import 'whatwg-fetch';

global.router = { query: {}, isReady: true };

jest.mock('@react-hook/window-size', () => ({
  __esModule: true,
  useWindowWidth: () => {
    return 800;
  },
}));
