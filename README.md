![CI](https://github.com/moonshot-partners/ember-boilerplate/workflows/Node.js%20CI/badge.svg)

<div align="center">
  <img src="https://user-images.githubusercontent.com/4649902/90065414-ddfeb200-dcb1-11ea-97d4-6673f0e4034a.png" />

  <p>This repository is an ember octane base that we use to start moonshot projects, it contains some addons and configurations that are indispensable for us when   developing an app in Ember.js</p>
</div>


## Pre installed

- Linting with [eslint](https://eslint.org/), [ember-template-lint](https://github.com/ember-template-lint/ember-template-lint), [eslint-plugin-ember-suave](https://github.com/DockYard/eslint-plugin-ember-suave)
- Server side rendering with [Fastboot](https://github.com/ember-fastboot/ember-cli-fastboot)
- [Mirage](https://www.ember-cli-mirage.com/) is client-side server to help build application tests.
- [ember-cli-page-object](http://ember-cli-page-object.js.org/docs/v1.17.x/) for make it easy to create page objects for your acceptance and integration tests.
- Manage environment variables with [ember-cli-dotenv](https://github.com/fivetanley/ember-cli-dotenv)
- Manage CSP with [ember-cli-content-security-policy](https://github.com/rwjblue/ember-cli-content-security-policy)
- For localization [ember-intl](https://github.com/ember-intl/ember-intl)
- Adding steroids to the templates with [ember-truth-helpers](https://github.com/jmurphyau/ember-truth-helpers), [ember-compsable-helpers](https://github.com/DockYard/ember-composable-helpers) and [ember-cli-string-helpers](https://github.com/romulomachado/ember-cli-string-helpers)

If you want to install some other addon in particular to build a specific feature, authentication, form validations, etc, you can [visit this page](https://github.com/moonshot-partners/ember-favorites) where we list our favorite addons by category.

## Code style guide

As we mentioned above we have added some Linting addons, you can visit the pages of each one to learn a little more about their rules, however, we will list some essential ones here.

- Two-space indentation
- [Line endings](https://docs.github.com/en/github/using-git/configuring-git-to-handle-line-endings)

Here you can also see the [moonshot coding style guide]() where you will find more specific cases.

## CI

By default we have added a github workflow for [continous integration](https://github.com/moonshot-partners/ember-boilerplate/blob/master/.github/workflows/ci.yml).

Consists of three jobs, `buildAndTests`, `deploy-staging`, `deploy-production`, they are configured to run on push

The deploys jobs will only be executed in case they match a specific branch, you can condition the specific branch here with which you want to execute the deploy [here](https://github.com/moonshot-partners/ember-boilerplate/blob/master/.github/workflows/ci.yml#L31) and [here](https://github.com/moonshot-partners/ember-boilerplate/blob/master/.github/workflows/ci.yml#L74).

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/)
* [Yarn](https://yarnpkg.com/)
* [Ember CLI](https://ember-cli.com/)

## Installation

* `git clone <repository-url>` this repository
* `cd ember-boilerplate`
* `yarn install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).
* Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Linting

* `yarn lint`
* `yarn lint:fix`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.
