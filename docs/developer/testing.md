---
id: testing
title: Testing
sidebar_position: 4
---

# Testing

## Introduction
This document provides an overview of the testing architecture for the MMTC project. It encompasses continuous testing concepts such as testing across the software development lifecycle as well as automated execution of tests through automation.

---

## Testing Categories

The below list of test categories are included in our testing setup. Further details are provided below.

- [ ] **Static Code Analysis:** checks code for syntax, style, vulnerabilities, and bugs
- [ ] **Unit Tests:** tests functions or components to verify that they perform as intended
- [ ] **Security Tests:** identifies potential security vulnerabilities
- [ ] **Build Tests:** checks if the code builds into binaries or packages successfully
- [ ] **Acceptance Tests:** validates against end-user & stakeholder requirements
- [ ] **Integration Tests:** ensures that different modules work together as expected
- [ ] **System Tests:** validates the complete and integrated software product
- [ ] **Performance Tests:** assesses the speed, scalability, and stability characteristics of the application
- [ ] **Usability Tests:** evaluates the user interface and user experience
- [ ] **Regression Tests:** ensures that new code changes do not adversely affect existing functionalities
- [ ] **Smoke Tests:** preliminary tests to check the basic functionality of the application

### Unit Tests

- Location: `tests/unit/`
- Purpose: Verify that individual functions and components perform as intended.
- Running Tests:
  - Manually:
    1. Navigate to the `tests/unit/` directory.
    2. Run the command `npm test` or `pytest` depending on the framework used.
    3. View results in the console output.
  - Automatically:
    - Frequency:
      - Tests are triggered on every code commit.
      - Tests run nightly as part of the CI/CD pipeline.
    - Results Location: `build/test-results/`
- Contributing:
  - Framework Used: Jest for JavaScript or Pytest for Python.
  - Tips:
    - Ensure that all new features include corresponding unit tests.
    - Follow the existing test structure and naming conventions for consistency.

### Integration Tests

- Location: `tests/integration/`
- Purpose: Ensure that different modules work together as expected.
- Running Tests:
  - Manually:
    1. Navigate to the `tests/integration/` directory.
    2. Run the command `npm run integration-test` or `pytest integration_tests.py`.
    3. View results in the console output.
  - Automatically:
    - Frequency:
      - Tests are triggered on every pull request.
      - Tests run weekly as part of the CI/CD pipeline.
    - Results Location: `build/integration-test-results/`
- Contributing:
  - Framework Used: Mocha for JavaScript or Unittest for Python.
  - Tips:
    - Write integration tests for any new features that involve multiple components.
    - Ensure that integration tests cover edge cases and failure scenarios.

### Performance Tests

- Location: `tests/performance/`
- Purpose: Assess the speed, scalability, and stability characteristics of the application.
- Running Tests:
  - Manually:
    1. Navigate to the `tests/performance/` directory.
    2. Run the command `npm run performance-test` or `pytest performance_tests.py`.
    3. View results in the console output.
  - Automatically:
    - Frequency:
      - Tests are triggered on a monthly basis.
    - Results Location: `build/performance-test-results/`
- Contributing:
  - Framework Used: JMeter or Locust.
  - Tips:
    - Include performance tests for critical user journeys.
    - Monitor performance metrics and set benchmarks for future tests.