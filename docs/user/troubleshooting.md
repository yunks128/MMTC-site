---
id: troubleshooting
title: Troubleshooting
sidebar_position: 6
---

# Troubleshooting Guide for MMTC

Welcome to the Troubleshooting Guide for MMTC! This document provides solutions to common issues that users might encounter while installing, configuring, or running MMTC. Use this guide to quickly identify and resolve problems.

## Installation Issues

### 1. Installation Fails Due to Missing Dependencies

**Problem**: The installation process fails because required dependencies are not installed or are incorrectly configured.

**Solution**:
1. **Check the Prerequisites**: Ensure that all required software and tools are installed, including:
   - Python 3.8+
   - Node.js 14+
   - PostgreSQL 12+
   - npm or Yarn
2. **Verify Versions**: Confirm that the versions of the installed tools meet the minimum requirements specified in the [Installation Guide](/docs/user/installation.md).
3. **Reinstall Dependencies**: Run the following commands to reinstall the necessary dependencies:
   ```bash
   # For Node.js projects
   npm install
   # or
   yarn install

   # For Python projects
   pip install -r requirements.txt
   ```

### 2. Permission Denied Errors During Installation

**Problem**: You receive "permission denied" errors when trying to install the software or its dependencies.

**Solution**:
1. **Use Sudo**: If you're on a Unix-based system, prepend `sudo` to your installation command:
   ```bash
   sudo npm install -g mmtc
   sudo pip install mmtc
   ```
2. **Check File Permissions**: Ensure that you have the necessary permissions to write to the installation directories. You may need to adjust the permissions using `chmod` or change ownership using `chown`.

3. **Install in User Directory**: For Node.js projects, you can avoid using `sudo` by installing packages in your user directory:
   ```bash
   npm install --prefix ~/.npm-global
   export PATH=$PATH:~/.npm-global/bin
   ```

## Configuration Issues

### 3. Configuration File Not Found

**Problem**: The application fails to start because it cannot locate the configuration file.

**Solution**:
1. **Check Configuration Path**: Ensure that the configuration file is located in the expected directory. By default, MMTC looks for the configuration file at `/etc/mmtc/config.yaml`.
2. **Create a Default Configuration**: If the configuration file is missing, you can create a default one by copying the sample configuration:
   ```bash
   cp /path/to/mmtc/sample-config.yaml /etc/mmtc/config.yaml
   ```
3. **Verify Configuration Syntax**: Ensure that the configuration file is correctly formatted. Use a YAML validator to check for syntax errors.

### 4. Application Crashes on Startup

**Problem**: The application crashes immediately after starting.

**Solution**:
1. **Check Logs**: Review the application logs for any error messages that can provide insight into the issue. Logs are typically located at `/var/log/mmtc.log`.
2. **Increase Memory Limits**: If the application is running out of memory, consider increasing the memory limits in your environment or optimizing the application's resource usage.
3. **Update Dependencies**: Ensure that all dependencies are up to date. Run the following command:
   ```bash
   npm update
   pip install --upgrade -r requirements.txt
   ```

For further assistance, please refer to the [MMTC Documentation](https://mmtc.example.com/docs) or contact support.