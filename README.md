# Learn Testing React Components

A practical repository for learning how to test React components professionally using **Vitest**, **React Testing Library**, and other essential testing tools.

The goal is to understand how to write reliable, maintainable tests that verify component behavior, user interactions, and application functionality.

## Tech Stack

| Package | Purpose |
|---|---|
| [Vitest](https://vitest.dev/) | Test runner and assertion library for running tests, organizing test suites, and checking expected results. |
| [jsdom](https://github.com/jsdom/jsdom) | Provides a simulated browser environment for running DOM-based tests in Node.js. |
| [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) | Renders React components in tests and provides utilities to query and interact with them. |
| [jest-dom](https://github.com/testing-library/jest-dom) | Adds readable DOM-specific assertions, such as `toBeInTheDocument()` and `toBeVisible()`. |
| [user-event](https://testing-library.com/docs/user-event/intro/) | Simulates realistic user interactions, including clicking, typing, and keyboard navigation. |
| [Testing Library DOM](https://testing-library.com/docs/dom-testing-library/intro/) | Provides DOM querying and interaction utilities used by React Testing Library and other Testing Library packages. |
| [MSW](https://mswjs.io/) | Mocks network requests at the network boundary, allowing tests to simulate API responses without calling real services. |
| [Vitest Coverage V8](https://vitest.dev/guide/coverage.html) | Measures code coverage to identify which parts of the codebase are exercised by tests. |

## Installation

Install the testing dependencies:

```bash
pnpm add -D vitest jsdom @testing-library/react @testing-library/jest-dom @testing-library/user-event @testing-library/dom msw
```

Install the Vitest coverage provider:

```bash
pnpm add -D @vitest/coverage-v8
```

## What You'll Learn

- **Component Testing:** Verify that React components render correctly.
- **DOM Queries:** Find elements using accessible roles, labels, and text.
- **User Interactions:** Test clicks, typing, keyboard events, and form submissions.
- **DOM Assertions:** Check element visibility, presence, attributes, and other DOM properties.
- **Asynchronous Testing:** Test loading states, asynchronous updates, and API responses.
- **API Mocking:** Use MSW to simulate successful requests, server errors, and other network scenarios.
- **Code Coverage:** Measure how much of your application is exercised by tests.
- **Testing Best Practices:** Write tests that focus on observable behavior rather than implementation details.

## Testing Philosophy

This repository follows the guiding principle of React Testing Library:

> The more your tests resemble the way your software is used, the more confidence they can give you.

Rather than testing implementation details, focus on what users can see and do.

For example, test whether a user can submit a form and see the expected result instead of checking whether a particular internal function was called.

## Useful Commands

Add the following scripts to your `package.json`:

```json
{
  "scripts": {
    "test": "vitest",
    "test:run": "vitest run",
    "test:coverage": "vitest run --coverage"
  }
}
```

### Command Reference

| Command | Description |
|---|---|
| `pnpm test` | Run tests in watch mode. |
| `pnpm test:run` | Run all tests once. |
| `pnpm test:coverage` | Run tests and generate a code coverage report. |

## Project Goals

The goal is to build a solid foundation in React component testing, progressing from basic rendering tests to realistic user interactions, asynchronous behavior, API mocking, and coverage analysis.

**Focus:** Practical examples, clean test code, and industry-standard testing practices.