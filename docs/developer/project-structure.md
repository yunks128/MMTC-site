---
id: project-structure
title: Project Structure
sidebar_position: 2
---

# Project Structure

Understanding the structure of the MMTC project is key to navigating the codebase effectively. This document provides an overview of the key directories and files, explaining their roles within the project.

## Overview

Below is an overview of the MMTC project’s directory structure. Each section describes the purpose of a directory or file and highlights important considerations for developers.

```
/project-root
│
├── /src
│   ├── /components
│   ├── /containers
│   ├── /services
│   ├── /utils
│   ├── /styles
│   └── index.js
│
├── /public
│   ├── index.html
│   └── /assets
│
├── /config
│   ├── webpack.config.js
│   └── settings.json
│
├── /tests
│   ├── /unit
│   ├── /integration
│   └── setupTests.js
│
├── .env
├── .gitignore
├── README.md
└── package.json
```

## /src Directory

The `src` directory contains the source code for the MMTC application. This is where most of the development work will take place.

- **/components**: Contains reusable UI components that are used throughout the MMTC application. Each component should be self-contained, including its own styles and logic as needed.
- **/containers**: Contains components that are connected to the state management system (e.g., Redux, Context API). These components handle data fetching and state logic specific to MMTC functionalities.
- **/services**: Contains code related to external API calls, data fetching, and other services that interact with external systems relevant to MMTC.
- **/utils**: Contains utility functions and helpers that can be reused across different parts of the MMTC application.
- **/styles**: Contains global styles, theme files, and other style-related assets tailored for the MMTC project.
- **index.js**: The entry point of the MMTC application. This file typically sets up the application and renders it to the DOM.

## /public Directory

The `public` directory contains static files that are served directly by the web server. These files are not processed by the build system and include:

- **index.html**: The main HTML file that serves as the entry point for the web application.
- **/assets**: Contains images, fonts, and other static resources used in the MMTC application.

## /config Directory

The `config` directory contains configuration files for the build system and application settings.

- **webpack.config.js**: Configuration file for Webpack, which is used to bundle the application.
- **settings.json**: Contains various settings and configurations that can be adjusted as needed for the MMTC project.

## /tests Directory

The `tests` directory contains test files organized into subdirectories for unit and integration tests.

- **/unit**: Contains unit tests for individual components and functions.
- **/integration**: Contains integration tests that verify the interaction between different parts of the application.
- **setupTests.js**: Configuration file for setting up the testing environment.

## Root Files

- **.env**: Environment variables for the MMTC application.
- **.gitignore**: Specifies files and directories that should be ignored by Git.
- **README.md**: Documentation for the MMTC project, providing an overview and setup instructions.
- **package.json**: Contains metadata about the project and its dependencies.

This structure is designed to facilitate development and maintainability as the MMTC project evolves. Developers are encouraged to follow these conventions to ensure consistency across the codebase.