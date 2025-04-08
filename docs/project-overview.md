```markdown
---
id: mmtc-overview
title: MMTC Project Overview
sidebar_position: 1
---

# MMTC: Multi-Mission Time Correlation

The Multi-Mission Time Correlation (MMTC) application is ground software that provides an automated means of correlating spacecraft time to ground time, along with associated functionality. MMTC is designed to be adaptable to any spacecraft and ground system, and is intended to be included in space mission ground data systems and to be run in a Mission Operations Center (MOC) or Mission Support Area (MSA). It produces time correlation products in standard, widely-used formats, including [NAIF SPICE](https://naif.jpl.nasa.gov/naif/) SCLK kernels.

## Project Structure

The MMTC project consists of 249 files, organized into various directories. Below is a summary of the file extensions and their counts:

- Shell Scripts: `.sh` (9)
- Markdown Files: `.md` (5)
- Kotlin Scripts: `.kts` (10)
- Batch Files: `.bat` (1)
- Text Files: `.txt` (2)
- New Files: `.new` (1)
- AsciiDoc Files: `.adoc` (1)
- YAML Files: `.yml` (1)
- Properties Files: `.properties` (1)
- Telemetry Source Files: `.telemetrysource` (3)
- Java Files: `.java` (110)
- Sample Files: `.sample` (13)
- TSC Files: `.tsc` (5)
- TLS Files: `.tls` (2)
- CSV Files: `.csv` (12)
- XML Files: `.xml` (39)
- Terraform Files: `.tf` (3)
- Coefficient Files: `.coeff` (1)
- TPC Files: `.tpc` (1)
- TM Files: `.tm` (1)
- XSD Files: `.xsd` (3)
- DTD Files: `.dtd` (1)
- Output Files: `.out` (5)

## Key Features

- **Automated Time Correlation**: MMTC automates the process of correlating spacecraft time with ground time.
- **Adaptability**: The software is designed to be adaptable to various spacecraft and ground systems.
- **Standard Formats**: Outputs time correlation products in widely-used formats, including NAIF SPICE SCLK kernels.
- **Comprehensive Testing**: Includes a suite of test resources to validate functionality and performance.

## Getting Started

To get started with the MMTC project, follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-repo/mmtc.git
   cd mmtc
   ```

2. **Build the Project**:
   Ensure you have the necessary dependencies installed, then build the project using your preferred build tool.

3. **Run the Application**:
   Execute the main application script to start using MMTC.

4. **Refer to Documentation**:
   For detailed usage instructions, refer to the `README.md` files located in the project directories.

## License

MMTC is licensed under the Apache License 2.0. See `LICENSE.md` for a copy of the license terms.

## Acknowledgments

This work was performed for the Jet Propulsion Laboratory, California Institute of Technology, sponsored by the United States Government under the Prime Contract 80NM0018D00004 between Caltech and NASA under subcontract number 1658085.
```