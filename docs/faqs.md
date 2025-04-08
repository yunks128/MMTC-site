---
id: faqs
title: Frequently Asked Questions (FAQs)
sidebar_position: 6
---

# Frequently Asked Questions (FAQs)

Welcome to the Frequently Asked Questions section for MMTC. This page addresses common questions about the Multi-Mission Time Correlation software's functionality, configuration, and usage in spacecraft operations.

## General Questions

### 1. What is MMTC?

**Answer**:  
MMTC (Multi-Mission Time Correlation) is a NASA AMMOS component developed by Johns Hopkins Applied Physics Laboratory (JHU/APL) that performs time correlation between spacecraft clocks and ground time for space missions. It processes telemetry data to extract time information, calculates clock drift rates, and generates standardized products used by mission operations teams to ensure accurate timing across spacecraft systems.

### 2. Why is time correlation important for spacecraft operations?

**Answer**:  
Accurate time correlation is critical for spacecraft operations because:
- It ensures commands execute at the intended time
- It allows precise reconstruction of when science data was collected
- It helps identify anomalies in the spacecraft clock
- It's essential for correlating data across multiple instruments or spacecraft
- It enables accurate navigation and pointing of instruments

### 3. What are the system requirements for MMTC?

**Answer**:  
MMTC requires the following:
- **Operating System**: Red Hat Enterprise Linux (RHEL) 8 or 9
- **Runtime Environment**: Java 8 JDK/JRE
- **Memory**: Minimum 4GB RAM (8GB recommended for processing large telemetry datasets)
- **Disk Space**: At least 1GB for installation and operational files
- **Dependencies**: NAIF SPICE libraries (included in installation packages)

For detailed requirements, refer to the [Installation Guide](installation).

## Technical Questions

### 4. What types of time correlation products does MMTC generate?

**Answer**:  
MMTC generates several standard time correlation products:
- **SCLK Kernels**: SPICE-compatible files mapping spacecraft clock to ground time
- **SCLK/SCET Files**: Map spacecraft clock to UTC time for ground systems
- **Time History Files**: Record the history of time correlations
- **Summary Tables**: Document correlation parameters and statistics
- **Raw Telemetry Tables**: Store received telemetry data with time information
- **Uplink Command Files**: Optional products for updating spacecraft time

### 5. How does MMTC handle spacecraft clock drift?

**Answer**:  
MMTC offers several methods for computing clock change rates:
- **Predicted**: Computes rates based on current and past time correlations
- **Interpolated**: Computes and updates previous correlations (default method)
- **Assigned**: Uses a manually specified drift rate value
- **No-Drift**: Fixed at 1.0 (assumes perfect clock)

The method can be selected in the configuration based on mission requirements and spacecraft clock characteristics.

### 6. Can MMTC be used with any spacecraft?

**Answer**:  
Yes, MMTC is designed to be mission-independent and can be configured for different spacecraft and ground systems. It uses a plugin architecture for telemetry sources and can be adapted to various telemetry formats through configuration. The software expects CCSDS-compliant telemetry frames or packets, which is the standard for most space missions.

### 7. How does MMTC integrate with SPICE?

**Answer**:  
MMTC uses NAIF SPICE libraries for time calculations and generates SCLK kernels that are compatible with SPICE. These kernels can be used by other mission tools that rely on SPICE for time conversions. MMTC handles the complexities of creating properly formatted SPICE kernels that account for spacecraft clock characteristics such as partitions and drift rates.

## Configuration and Usage

### 8. How do I configure MMTC for my mission?

**Answer**:  
MMTC is configured using several XML and CSV files:
1. **TimeCorrelationConfigProperties.xml**: Primary configuration file defining processing parameters
2. **GroundStationsMap.csv**: Maps ground station IDs to SPICE identifiers
3. **SclkPartitionMap.csv**: Defines spacecraft clock partitions
4. **log4j2.properties**: Configures logging behavior

Detailed configuration instructions are available in the [Configuration Guide](configuration).

### 9. How do I run MMTC in an operational environment?

**Answer**:  
To run MMTC in an operational environment:
1. Ensure configuration files are properly set up for your mission
2. Use the command-line interface to invoke MMTC with appropriate start/stop times:
   ```bash
   java -jar mmtc.jar --config=/path/to/config --start="2024-07-01T00:00:00" --stop="2024-07-02T00:00:00"
   ```
3. Integrate the generated products into your mission's ground data system
4. Set up automated execution through scheduling systems if needed

For detailed operational workflows, see the [Operations Guide](operations).

### 10. How can I validate MMTC's time correlation results?

**Answer**:  
You can validate MMTC's results by:
- Comparing new correlation products with previous versions
- Using the visualization tools included with MMTC to inspect correlation trends
- Cross-checking key time points with known spacecraft events
- Verifying that the residuals (differences between predicted and actual correlations) are within expected ranges
- Using the data quality filters to ensure only good telemetry samples are used

The [Validation Guide](validation) provides detailed procedures for verifying correlation accuracy.

## Troubleshooting

### 11. MMTC is rejecting telemetry data. What should I check?

**Answer**:  
If MMTC is rejecting telemetry data, check:
- That telemetry contains valid SCLK and ERT (Earth Receive Time) values
- That the telemetry frame format matches the expected format in your configuration
- The filter settings in your configuration file - they may be too restrictive
- The telemetry source plugin configuration for your specific ground system
- Log files for specific error messages that identify the rejection reason

### 12. Where can I find additional support?

**Answer**:  
For additional support:
- Consult the comprehensive [User Guide](user) and [Technical Reference](technical)
- Contact the MMTC support team at [mmtc-support@jhuapl.edu](mailto:mmtc-support@jhuapl.edu)
- For NASA missions, access the [AMMOS User Community](https://ammos-community.jpl.nasa.gov)
- Check for known issues in the [Release Notes](release-notes)
- Request mission-specific support through your NASA/JPL point of contact