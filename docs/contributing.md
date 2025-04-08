---
id: contributing
title: Contributing to MMTC
sidebar_position: 5
---

# Contributing to MMTC

Thank you for your interest in contributing to the Multi-Mission Time Correlation (MMTC) software! As a NASA AMMOS component developed by Johns Hopkins Applied Physics Laboratory (JHU/APL), MMTC serves a critical function in space missions by correlating spacecraft clock values with ground time. Your contributions help improve this essential tool for current and future missions.

## Prerequisites

Before contributing to MMTC, please ensure you have the following:

### License Understanding

MMTC is released under the Apache License 2.0. Please familiarize yourself with this license by reviewing our [LICENSE](LICENSE) file, as it governs how your contributions can be used and distributed.

### Code of Conduct

To maintain a professional and inclusive environment, we've established a Code of Conduct for all participants in the MMTC project. Please read our [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) and adhere to these guidelines in all interactions.

### Development Environment

For contributing code changes, you'll need to set up a proper development environment:

1. **Java Development Kit (JDK) 8** - MMTC is developed using Java 8
2. **Gradle** - For building and managing dependencies
3. **SPICE Libraries** - Understanding of NAIF SPICE libraries is helpful
4. **RHEL 8/9** - The target deployment environment (though development can occur on other platforms)

Refer to our [Developer Guide](developer) for comprehensive setup instructions.

## Types of Contributions

### 1. Code Contributions

MMTC welcomes code contributions in several areas:

- **Core Framework Improvements** - Enhancements to time correlation algorithms
- **New Telemetry Source Plugins** - Support for additional telemetry sources
- **Additional Filters** - New quality filters for telemetry data
- **Output Product Generators** - Additional product formats for mission support
- **Performance Optimizations** - Improvements to processing efficiency

### 2. Documentation Contributions

Help improve MMTC's documentation:

- Clarify configuration procedures
- Add examples of mission-specific implementations
- Create tutorials for common workflows
- Document best practices for telemetry processing

### 3. Testing Contributions

- Create test cases for edge conditions
- Develop integration tests with mission systems
- Test performance with large telemetry datasets

## Contribution Process

1. **Start a Discussion** - For significant changes, begin by opening a discussion on our issue tracker to ensure your planned work aligns with project goals.

2. **Fork & Branch** - Fork the MMTC repository and create a branch with a descriptive name related to your contribution (e.g., `add-vms-telemetry-plugin`, `improve-clock-drift-calculation`).

3. **Follow Coding Standards** - Adhere to the existing code style, including:
   - Java code conventions
   - Comprehensive JavaDoc comments
   - Unit tests for new functionality
   - Error handling consistent with existing patterns

4. **Create Pull Request** - Submit your changes through a pull request with:
   - Clear description of changes
   - Reference to any related issues
   - Documentation updates if applicable
   - Test results demonstrating functionality

5. **Code Review** - Work with the MMTC maintainers during the review process to address any feedback.

## Best Practices

### When Developing Plugins

- Implement the standard telemetry source interface
- Document telemetry format requirements
- Include example configuration

### When Modifying Core Components

- Ensure backward compatibility where possible
- Consider impacts on existing mission deployments
- Document changes in the architectural documentation

### When Contributing to Products

- Ensure compliance with SPICE standards for SCLK kernels
- Validate output with test datasets
- Document any format changes

## Communication Channels

- **Issue Tracker**: [MMTC Issue Tracker](https://github.com/nasa/mmtc/issues) (Replace with actual link)
- **Developer Mailing List**: mmtc-dev@jhuapl.edu (Replace with actual contact)
- **User Forum**: [MMTC User Forum](https://forum.nasa.gov/mmtc) (Replace with actual link)

## Testing Guidelines

Before submitting your contribution, ensure:

1. All unit tests pass
2. Your code maintains or improves test coverage
3. You've tested with representative telemetry data
4. You've validated any time correlation products against expected outputs

Thank you for contributing to MMTC! Your efforts help improve spacecraft operations for NASA and other missions worldwide.