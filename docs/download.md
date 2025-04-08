```md
---
id: download
title: Download
sidebar_position: 2
---

# Download and Get Started with MMTC

Welcome to the MMTC download page! This guide will help you get the latest version of the MMTC software, verify the authenticity of your download, and provide guidance on setting up your environment.

## Download Links

You can download the latest version of MMTC from the following sources:

- **Download from Website**: [MMTC Download Page](https://mmtc.example.com/download)
- **GitHub Releases**: [MMTC GitHub Releases](https://github.com/your-org/mmtc/releases)
- **Package Manager**: 
  - Example for npm: `npm install mmtc`
  - Example for pip: `pip install mmtc`

> _Ensure that you download the software from trusted sources to avoid malicious versions._

## Available Versions

Here are the available versions of MMTC:

- **Latest Stable Release**: [v1.0.0](https://github.com/your-org/mmtc/releases/tag/v1.0.0)
- **Previous Releases**:
  - [v0.9.0](https://github.com/your-org/mmtc/releases/tag/v0.9.0)
  - [v0.8.0](https://github.com/your-org/mmtc/releases/tag/v0.8.0)
- **Nightly Builds**: [Get Nightly Builds](https://github.com/your-org/mmtc/actions)

> _Note: Nightly builds are less stable and are intended for testing purposes._

## Verify Download Authenticity

To ensure that the MMTC software you’ve downloaded is authentic and hasn’t been tampered with, we recommend verifying the integrity of the files using the provided checksums or signatures.

### Checksum Verification

After downloading, you can verify the integrity of the file using its checksum:

1. Download the checksum file corresponding to your download:
   - [SHA256 Checksum](https://mmtc.example.com/checksums/SHA256)
   - [MD5 Checksum](https://mmtc.example.com/checksums/MD5)

2. Run the following command to verify:
   ```bash
   sha256sum mmtc.zip
   ```
   Compare the output with the checksum provided to ensure they match.

### Signature Verification

If the software is signed, you can verify the signature as follows:

1. Download the PGP signature:
   - [PGP Signature](https://mmtc.example.com/signatures/mmtc.zip.sig)

2. Use GPG to verify the signature:
   ```bash
   gpg --verify mmtc.zip.sig mmtc.zip
   ```
   Ensure that the signature is valid and the file hasn’t been altered.

## Installation and Setup

Once you have downloaded and verified the software, follow our [Installation Guide](user/installation.md) for next steps and more detailed directions.

## Troubleshooting and Support

If you encounter any issues during the download, installation, or setup process, please refer to our [Support Page](https://mmtc.example.com/support) for troubleshooting tips and contact information.
```