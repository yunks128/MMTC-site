---
id: download
title: Download MMTC
sidebar_position: 2
---

# Download MMTC

This page provides information on obtaining the Multi-Mission Time Correlation (MMTC) software, a NASA AMMOS component developed by Johns Hopkins Applied Physics Laboratory (JHU/APL) for spacecraft time correlation.

## System Requirements

Before downloading MMTC, ensure your system meets the following requirements:

- **Operating System**: Red Hat Enterprise Linux (RHEL) 8 or 9 (recommended)
- **Java Runtime**: Java 8 JDK/JRE
- **Memory**: Minimum 4GB RAM (8GB recommended for large datasets)
- **Disk Space**: At least 1GB available for installation and operational files
- **Additional Software**: NAIF SPICE libraries (included in installation packages)

## Distribution Formats

MMTC is available in the following distribution formats:

- **RPM Package**: For RHEL 8/9 environments (recommended for operational deployments)
- **Tar Archive (.tar.gz)**: Platform-independent distribution for other Linux environments

## Obtaining MMTC

As a NASA AMMOS component, MMTC is distributed through official NASA software channels. Depending on your organization's relationship with NASA/JPL, you can obtain MMTC through one of these methods:

### For NASA/JPL Missions and Partners

- **AMMOS Software Catalog**: Access the [AMMOS Software Catalog](https://ammos.nasa.gov/software-catalog) (requires NASA credentials)
- **JPL Software Release Authority**: Contact the [JPL SRA](mailto:jpl-sra@jpl.nasa.gov) for mission-specific access

### For Other Space Agencies and Collaborators

- **Interagency Agreement**: Access through existing space agency agreements with NASA
- **JHU/APL Software Repository**: Available to authorized partners of JHU/APL

### For Academic and Research Institutions

- **NASA Software Catalog**: Browse the [NASA Software Catalog](https://software.nasa.gov/) for availability
- **Software Usage Agreement**: Complete necessary agreements for research use

## Verification of Downloads

To verify the authenticity of your MMTC download:

### For RPM Packages

Verify the RPM signature using the NASA public key:

```bash
rpm --import NASA-AMMOS-PUBLIC-KEY.asc
rpm -K mmtc-1.5.0-1.el8.x86_64.rpm
```

### For Tar Archives

Verify the SHA-256 checksum:

```bash
sha256sum mmtc-1.5.0.tar.gz
```

Compare with the provided checksum in the `SHA256SUMS.txt` file that accompanies the download.

## Version Information

### Current Release

- **Version 1.5.0** (May 2024)
  - Enhanced support for deep space missions
  - Improved temperature compensation for oscillator drift
  - Additional telemetry filters for data quality

### Previous Releases

- **Version 1.4.2** (January 2024): Bug fixes and performance improvements
- **Version 1.4.0** (September 2023): Added support for RHEL 9
- **Version 1.3.0** (March 2023): Enhanced SPICE kernel generation

## Installation

After downloading MMTC, follow our [Installation Guide](installation) for detailed instructions on:

1. Installing the software packages
2. Setting up the required directory structure
3. Configuring the application for your mission
4. Verifying the installation

## Configuration Files

MMTC requires the following configuration files to be set up for your specific mission:

- `TimeCorrelationConfigProperties.xml`: Primary configuration file
- `GroundStationsMap.csv`: Maps DSN station IDs to SPICE identifiers
- `SclkPartitionMap.csv`: Defines spacecraft clock partitions
- `log4j2.properties`: Configures logging behavior

Sample configuration files are included in the distribution packages.

## Support and Documentation

If you encounter issues during download or installation:

- **Technical Support**: Contact [MMTC Support](mailto:mmtc-support@jhuapl.edu)
- **User Forums**: Join the [AMMOS User Community](https://ammos-community.jpl.nasa.gov) (requires registration)
- **Training**: View [recorded training sessions](https://ammos.nasa.gov/training) for MMTC configuration and usage

For comprehensive documentation, refer to the [User Guide](user) and [Technical Reference](technical) sections.