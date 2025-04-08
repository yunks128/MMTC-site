---
id: developer
title: Developer Documentation
sidebar_label: Developer Guide
sidebar_position: 4
---

# MMTC Developer Documentation

Welcome to the Developer Documentation for the Multi-Mission Time Correlation (MMTC) software! This section provides comprehensive information for developers who want to extend, modify, or integrate with this NASA AMMOS component developed by Johns Hopkins Applied Physics Laboratory (JHU/APL).

## Introduction

MMTC is a specialized Java application designed to perform time correlation between spacecraft clocks and ground time for space missions. It processes telemetry data to extract time information, calculates clock drift rates, and generates standardized time correlation products used by mission operations teams. This documentation will guide you through the MMTC codebase architecture, development workflows, and extension points.

## Development Environment Setup

The [Development Environment Setup](dev-environment) guide walks you through establishing your development environment for MMTC:

### What's Covered

- Installing Java 8 JDK (required for MMTC development)
- Setting up Gradle for building and dependency management
- Configuring SPICE libraries and JNI interfaces
- Setting up a test environment with sample telemetry data
- IDE configuration recommendations

## Architecture Overview

Understanding MMTC's [Architecture](architecture) is essential for effective development. This section explains the core components and their interactions within the system:

### What's Covered

- Core framework components for time correlation calculations
- Plugin architecture for telemetry sources
- Filter chain implementation for data quality assurance
- Product generation framework
- Configuration management system
- SPICE integration for time calculations

## Extension Points

MMTC is designed to be extensible through several [Extension Points](extension-points):

### What's Covered

- Creating custom telemetry source plugins beyond the standard AMPCS plugin
- Implementing new filter types for specialized data validation
- Developing additional output product generators
- Enhancing clock change rate computation methods
- Creating custom XML configuration parsers

## Building and Testing

The [Building and Testing](building-testing) section covers essential workflows for MMTC development:

### What's Covered

- Building MMTC using Gradle
- Running unit and integration tests
- Setting up test fixtures with simulated telemetry
- Test coverage requirements for contributions
- Packaging MMTC as RPM for RHEL 8/9 deployment
- Creating tar.gz distributions

## API Reference

The [API Reference](api-reference) provides detailed documentation of MMTC's key interfaces and classes:

### What's Covered

- Telemetry source plugin interfaces
- Filter implementation APIs
- Product generator interfaces
- Configuration parameter definitions
- Time conversion utilities
- Event logging framework

## Best Practices

When developing for MMTC, follow these [Best Practices](best-practices):

### What's Covered

- Handling spacecraft clock discontinuities
- Accounting for light-time corrections
- Managing leap seconds in time calculations
- Optimizing telemetry processing for large datasets
- Error handling and reporting standards
- Documentation requirements for code contributions

## Additional Resources

For more information, check out these resources:

- [SPICE Documentation](https://naif.jpl.nasa.gov/naif/documentation.html) - Essential for understanding time systems used in MMTC
- [CCSDS Time Code Formats](https://public.ccsds.org/Pubs/301x0b4e1.pdf) - Reference for spacecraft time code standards
- [AMMOS Documentation](https://ammos.nasa.gov/) - Information on the broader AMMOS framework
- [Issue Tracker](https://github.com/nasa/mmtc/issues) - For reporting bugs or suggesting enhancements
- [Developer Mailing List](mailto:mmtc-dev@jhuapl.edu) - For technical discussions about MMTC

We welcome your contributions to improve MMTC for current and future NASA missions. Your expertise helps ensure accurate time correlation for critical spacecraft operations.