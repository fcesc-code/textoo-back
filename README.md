# TEXTOO

## Purpose

Textoo is a web application for teaching and learning languages. It is based on well established activities focused on language and aims to give them new
momentum by making dynamic activities for groups or individuals that can be both fun and educational. A specific focus is given to learning metrics and other
features that highlight focus the activity towards education rather than pure passtime gamification.

Although this code is public, it is subject to [creative commons license](https://github.com/fcesc-code/pre/blob/main/LICENSE.md). The project is also open for
contributions from July 2022.

This application is developed as the final project for the
[Web apps and sites development Master](https://estudis.uoc.edu/ca/masters-universitaris/desenvolupament-llocs-aplicacions-web/presentacio)
by [Universitat Oberta de Catalunya](http://uoc.edu). \

## Public web

The app can be accessed via following links:
_links to site_

## Public respository

A Git repository for the frontend can be found at [textoo](https://github.com/fcesc-code/textoo-back.git). The backend counterpart can be found at
[textoo](https://github.com/fcesc-code/textoo-back.git).
_deploy status badge_

## How to use this code

Download or clone the repository. Then, install the dependencies using `npm install`. To start the app in development mode run `npm run dev` and open your browser on
[localhost](http://localhost:4200). For further commands, see the commands section below.

Content lives inside the `src/` folder. If you do not want to change the configuration or are unsure about what you are doing, do not edit files outside the `src/` folder.

Always run the following commands during the development stage and for production builds. Please note that it is expected that all projects built with this boilerplate are compiled using `npm run build` before they are published.

### Commands

Main commands:
| Command | Description |
| --- | --- |
| `npm run start` | Runs NestJS in development mode. |
| `npm run start:dev` | Runs NestJS in development watch mode. |
| `npm run start:prod` | Runs NestJS in production mode. |
| `npm run clean` | Removes all build files. |
| `npm run lint` | Runs ESLint for javascript and html files, showing a report. If you are using VSCode, the extension for ESLint works too. |
| `npm run lint:ci` | Runs ESLint aud automatically fixes the warnings and errors that can be fixed. |
| `npm run test` | Runs the tests and opens jasmine in a browser, so that tests are re-run if a file is modified. Recommended option for development. |
| `npm run test:e2e` | Runs the e2e tests once and returns an exit code. |
| `npm run test:ci` | Runs the tests once and returns an exit code, so that it can be integrated in a CI pipeline. Option for continuous integration. |
| `npm run test:cov` | Runs the tests once and generates a coverage report in lcov and html formats. Lcov is used for code scanner sonarqube. |
| `npm run ci` | Runs `lint`, `test`, `clean` and `build` scripts sequentially, this is rather to integrate in a CI process but can also be run manually. |

## License

This application is developed under the creative commons license. Check out the details in the [LICENSE](https://github.com/fcesc-code/textoo-back/blob/main/LICENSE.md) :open_book:.

## Contributions

### Philosophy

This software is currently developed :construction: with educational purposes and is open source. The code is published in this public repository.

### :fire: Issues

Do you want to suggest :bulb: a new feature? Open an [issue](https://github.com/fcesc-code/textoo-back/issues).
Please, keep it short, descriptive and concise :smiley:

### Security

Check out the how to report a vulnerability in our supported versions in the [SECURITY](https://github.com/fcesc-code/textoo-back/blob/main/SECURITY.md) :open_book:.

## Development information

### Tech stack

- [Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.
- [Nest CLI](https://github.com/nestjs/nest-cli)
- [RxJS](https://rxjs.dev/guide/overview) library for reactive programming with Angular
- [Typescript](https://www.typescriptlang.org/)
- [Jest](https://jestjs.io/) test framework
- [Supertest](https://github.com/visionmedia/supertest)
- [Github](https://github.com/)
- [GitHub Actions](https://github.com/features/actions) for automated testing in continuous delivery
- [GitHub native Dependabot](https://dependabot.com/) for security alerts
- [GitHub codeQL](https://github.com/github/codeql) for code scanning alerts
- [sonarqube](https://www.sonarqube.org/)
- [VSCode](https://code.visualstudio.com/)
- [ESLint](https://eslint.org/) for linting of html and javascript files
- [Prettier](https://prettier.io/) as code formatter
- [WSL](https://docs.microsoft.com/en-us/windows/wsl/about) Windows Subsystem for Linux (ubuntu 20)
- [YAML](https://yaml.org/) for GitHub actions
- [husky](https://www.npmjs.com/package/husky) to use git hooks for continuous integration

### VSCode extensions

- [Codemetrics](https://marketplace.visualstudio.com/items?itemName=kisstkondoros.vscode-codemetrics) Computes complexity for JS and TS files
- [Errorlens](https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens) Highlights errors and warnings in editor
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) Linting for JS and TS files in editor
- [Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) AI suggesting github code
- [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) To live open coverage html file while running dev server, for example
- [Markdownlint](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint) Linting for markdown files in editor

### Quality gate

Quality gate main indicators:
| parameter | target | current |
| --- | --- | --- |
| **Unit testing** |
| [Jest](https://jestjs.io/) statements | > 70% | _under development_ |
| [Jest](https://jestjs.io/) branches | > 70% | _under development_ |
| [Jest](https://jestjs.io/) lines | > 70% | _under development_ |
| [Jest](https://jestjs.io/) functions | > 70% | _under development_ |
| **Integration testing** |
| API calls | 100% | _under development_ |
| **Quality** |
| [Sonarqube](https://www.sonarqube.org/) bugs | 0 | _under development_ |
| [Sonarqube](https://www.sonarqube.org/) code smells | 0 | _under development_ |
| [Sonarqube](https://www.sonarqube.org/) code duplication | < 10% | _under development_% |
| **Security** |
| [Dependabot security alerts](https://github.blog/2020-06-01-keep-all-your-packages-up-to-date-with-dependabot/) | 0 | _under development_ |
| [CodeQL](https://github.com/github/codeql) | 0 | _under development_ |
| [Sonarqube](https://www.sonarqube.org/) vulnerabilities | 0 | _under development_ |
| [Sonarqube](https://www.sonarqube.org/) security hotspots | 0 | _under development_ |
| **Linters** |
| [ESLint](https://eslint.org/) errors (ts) | 0 | _under development_ |

_\* Warnings are not included in these metrics._

### Requirements

- [Node.js](http://nodejs.org/) >= 16.13.2

### Continuous delivery

Automated testing in every pull request or merge to the main branch.
Automated code scanning to measure code quality, pull requests cannot be merged if quality is not met.
Automated security alerts for the repository.

## Releases

Releases' schedule:
| Version | Planned date | Status | Content |
| ------- | ---------------- | ------------ | --------------- |
| 0.0.1 | 16th April 2022 | Scheduled | Initial version |

### Version 0.0.1

1. ✔️ Initial version. Core functionality and libraries.

## Credits

Professor: César Pablo Córcoles Briongos.

Tutor: Carles Arnal Castello.

Wherever appropriate, credit is given to author as a comment in specific file.

## Author

Francesc Brugarolas, [Github repo](https://github.com/fcesc-code/)

April 2022.
