# Pairing Exercise: Javascript

This is a pairing exercise for prospective full-stack/back-end developers with a focus on Javascript.

The candidate can guide the exercise and do as much as is feasible within the time limit (~30-35 mins).

## Workflow

The candidate can choose to use any tools, IDEs and editors they like and is expected to have some setup to be able to write Javascript code.

The pairing exercise is going to be run following Test-Driven Development (TDD). The candidate doesn't need to have previous TDD experience, but some understanding of what it is at high level can be helpful.

The main idea is to start by writing a failing test with the expected behaviour of the code, and then work on it until the test passes.

## Goal

Process a list of invoices and produce the following statistics:

- Number of unpaid invoices per organisation
- Number of overdue invoices per organisation
- Number of paid invoices per organisation per month

## Setup

The exercise should not require the use of any external dependencies except for `npm`, and at least `node` version 20.

Run `nvm install && nvm use` to install and use the required node version.

And then:

- `npm install` to install the dependencies
- `npm run test` to run the `jest` tests
- `npm run format` to run `prettier`

