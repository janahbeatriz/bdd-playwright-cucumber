# Playwright BDD Framework with Cucumber and Gherkin

This repository contains a Behavior-Driven Development (BDD) test automation framework using [Playwright](https://playwright.dev/) with [Cucumber](https://cucumber.io/) and Gherkin. The framework enables writing test scenarios in a human-readable format while leveraging Playwright for UI automation.

## Repository
GitHub Repository: [bdd-playwright-cucumber](https://github.com/janahbeatriz/bdd-playwright-cucumber)

## Features
- **BDD Support**: Uses Cucumber with Gherkin for writing test scenarios.
- **Cross-Browser Testing**: Supports execution in multiple browsers.
- **Headless/Headful Mode**: Run tests in both headless and headed modes.
- **Easy Configuration**: Uses `cucumber.json` for test settings.

## Prerequisites
Ensure you have the following installed before setting up the project:

- [Node.js](https://nodejs.org/) (Latest LTS version recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

## Installation
Clone the repository and install dependencies:

```sh
# Clone the repo
git clone https://github.com/janahbeatriz/bdd-playwright-cucumber.git
cd bdd-playwright-cucumber

# Install dependencies
npm install
```

## Running Tests Locally

### Step 1: Install Playwright Browsers
Before running tests, ensure Playwright browsers are installed:

```sh
npx playwright install
```

### Step 2: Execute Tests
Run tests using Cucumber:

```sh
npm run test
```

or specify a tag to run a specific scenario:

```sh
npm run test -- --tags @yourTag
```

### Step 3: View Test Reports
To generate and view the HTML report after execution:

```sh
npx playwright show-report
```

## Project Structure
```
📂 bdd-playwright-cucumber
├── 📂 features         # Contains Gherkin feature files
│   ├── sample.feature
├── 📂 step-definitions # Step definitions for Cucumber
│   ├── sample.steps.js
├── 📂 support          # Support utilities like hooks, helpers
│   ├── hooks.js
├── 📂 reports          # Directory for test reports
├── 📂 node_modules     # Node.js dependencies
├── cucumber.json       # Cucumber configuration file
├── package.json        # Project dependencies and scripts
├── package-lock.json   # Exact versions of dependencies
└── README.md           # Documentation
```

## Scripts
| Command | Description |
|---------|-------------|
| `npm run test` | Runs all tests |
| `npm run test -- --tags @tag` | Runs tests with a specific tag |
| `npx playwright show-report` | Opens the HTML test report |

## Contributing
Feel free to fork this repository and make improvements. Contributions are welcome!

## License
This project is licensed under the MIT License.
