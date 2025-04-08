---
sidebar_position: 3
id: api
title: MMTC Application Programming Interface (API)
sidebar_label: API Reference
---

# MMTC API Reference

This document provides detailed information about the MMTC (Multi-Mission Time Correlation) Java API, designed to allow mission teams to integrate time correlation capabilities into custom applications, process telemetry data programmatically, and generate standard time correlation products for spacecraft operations.

## Overview

MMTC provides a Java-based API that enables:
- Programmatic extraction of time correlation information from spacecraft telemetry
- Conversion between different time systems (SCLK, TDT, UTC)
- Generation of time correlation products (SCLK kernels, SCLK/SCET files)
- Integration with mission-specific telemetry processing systems

## Core Packages

### gov.nasa.jpl.ammos.mmtc.core

The core package contains the primary interfaces and classes for time correlation:

```java
import gov.nasa.jpl.ammos.mmtc.core.TimeCorrelation;
import gov.nasa.jpl.ammos.mmtc.core.TimeCorrelationManager;
```

### gov.nasa.jpl.ammos.mmtc.telemetry

Provides interfaces for accessing and processing telemetry:

```java
import gov.nasa.jpl.ammos.mmtc.telemetry.TelemetrySource;
import gov.nasa.jpl.ammos.mmtc.telemetry.TelemetrySample;
```

### gov.nasa.jpl.ammos.mmtc.filter

Contains filter implementations for telemetry quality checking:

```java
import gov.nasa.jpl.ammos.mmtc.filter.Filter;
import gov.nasa.jpl.ammos.mmtc.filter.ContactFilter;
import gov.nasa.jpl.ammos.mmtc.filter.DataRateFilter;
```

### gov.nasa.jpl.ammos.mmtc.product

Provides interfaces for generating time correlation products:

```java
import gov.nasa.jpl.ammos.mmtc.product.ProductGenerator;
import gov.nasa.jpl.ammos.mmtc.product.SclkKernelGenerator;
```

## Key Interfaces

### TimeCorrelationManager

Central interface for managing the time correlation process:

```java
public interface TimeCorrelationManager {
    /**
     * Performs time correlation using telemetry from the specified time range
     * @param startTime Start of telemetry query range (TDT)
     * @param endTime End of telemetry query range (TDT)
     * @return List of time correlations generated
     */
    List<TimeCorrelation> performTimeCorrelation(double startTime, double endTime);
    
    /**
     * Generates standard time correlation products
     * @param correlations Time correlations to use
     * @return Map of product types to generated product files
     */
    Map<String, File> generateProducts(List<TimeCorrelation> correlations);
}
```

### TelemetrySource

Interface for telemetry data providers:

```java
public interface TelemetrySource {
    /**
     * Retrieves telemetry samples within the specified time range
     * @param startTime Start of query range (TDT)
     * @param endTime End of query range (TDT)
     * @return List of telemetry samples containing time information
     */
    List<TelemetrySample> getTelemetrySamples(double startTime, double endTime);
    
    /**
     * Closes resources associated with the telemetry source
     */
    void close();
}
```

### Filter

Interface for validating telemetry samples:

```java
public interface Filter {
    /**
     * Applies filtering criteria to a telemetry sample
     * @param sample The telemetry sample to evaluate
     * @return true if the sample passes the filter, false otherwise
     */
    boolean apply(TelemetrySample sample);
    
    /**
     * Gets the name of the filter
     * @return Filter name
     */
    String getName();
}
```

### ProductGenerator

Interface for time correlation product generation:

```java
public interface ProductGenerator {
    /**
     * Generates a time correlation product
     * @param correlations Time correlations to use in the product
     * @param outputPath Path where the product should be written
     * @return The generated product file
     */
    File generateProduct(List<TimeCorrelation> correlations, Path outputPath);
    
    /**
     * Gets the type of product this generator creates
     * @return Product type identifier
     */
    String getProductType();
}
```

## Java Plugin Development

### Creating a Custom Telemetry Source

To create a custom telemetry source for your mission's specific telemetry format:

```java
import gov.nasa.jpl.ammos.mmtc.telemetry.TelemetrySource;
import gov.nasa.jpl.ammos.mmtc.telemetry.TelemetrySample;

public class MyMissionTelemetrySource implements TelemetrySource {
    
    @Override
    public List<TelemetrySample> getTelemetrySamples(double startTime, double endTime) {
        // Implementation specific to your mission's telemetry system
        List<TelemetrySample> samples = new ArrayList<>();
        
        // Connect to your telemetry database or files
        // Extract SCLK and ERT values
        // Create TelemetrySample objects
        
        return samples;
    }
    
    @Override
    public void close() {
        // Clean up resources
    }
}
```

### Creating a Custom Filter

To implement a mission-specific filter for telemetry validation:

```java
import gov.nasa.jpl.ammos.mmtc.filter.Filter;
import gov.nasa.jpl.ammos.mmtc.telemetry.TelemetrySample;

public class MyMissionSpecificFilter implements Filter {
    
    @Override
    public boolean apply(TelemetrySample sample) {
        // Custom filtering logic
        return sample.getQualityIndicator() > 0.95;
    }
    
    @Override
    public String getName() {
        return "MyMissionQualityFilter";
    }
}
```

## Time Conversion Utilities

MMTC provides utilities for converting between different time systems:

```java
import gov.nasa.jpl.ammos.mmtc.util.TimeConverter;

// Convert from SCLK to TDT
double sclkValue = 123456789.0;
double tdtValue = TimeConverter.sclkToTDT(sclkValue, spacecraftId);

// Convert from TDT to UTC
String utcTime = TimeConverter.tdtToUTC(tdtValue);
```

## Configuration

The MMTC API uses an XML-based configuration system:

```java
import gov.nasa.jpl.ammos.mmtc.config.ConfigurationManager;

// Load configuration
ConfigurationManager config = ConfigurationManager.loadFromFile(
    new File("TimeCorrelationConfigProperties.xml")
);

// Create a properly configured TimeCorrelationManager
TimeCorrelationManager manager = TimeCorrelationManagerFactory.create(config);
```

## Complete Example

Here's a complete example of using the MMTC API to perform time correlation and generate products:

```java
import gov.nasa.jpl.ammos.mmtc.core.TimeCorrelationManager;
import gov.nasa.jpl.ammos.mmtc.core.TimeCorrelation;
import gov.nasa.jpl.ammos.mmtc.config.ConfigurationManager;
import gov.nasa.jpl.ammos.mmtc.util.TimeConverter;
import java.io.File;
import java.nio.file.Paths;
import java.util.List;
import java.util.Map;

public class MMTCExample {
    public static void main(String[] args) {
        try {
            // Load configuration
            ConfigurationManager config = ConfigurationManager.loadFromFile(
                new File("TimeCorrelationConfigProperties.xml")
            );
            
            // Create manager
            TimeCorrelationManager manager = TimeCorrelationManagerFactory.create(config);
            
            // Convert time range from UTC to TDT for API call
            double startTimeTDT = TimeConverter.utcToTDT("2024-07-01T00:00:00Z");
            double endTimeTDT = TimeConverter.utcToTDT("2024-07-02T00:00:00Z");
            
            // Perform time correlation
            List<TimeCorrelation> correlations = manager.performTimeCorrelation(
                startTimeTDT, endTimeTDT
            );
            
            System.out.println("Generated " + correlations.size() + " time correlations");
            
            // Generate products
            Map<String, File> products = manager.generateProducts(correlations);
            
            // Report on generated products
            for (Map.Entry<String, File> entry : products.entrySet()) {
                System.out.println("Generated " + entry.getKey() + ": " + 
                                  entry.getValue().getAbsolutePath());
            }
            
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
```

## API Limitations

- The MMTC API is designed for Java applications and does not provide REST endpoints
- External systems must use Java integration or command-line invocation
- CCSDS-compliant telemetry is expected for standard plugins
- All time calculations use SPICE libraries and follow NASA/JPL conventions

## Additional Resources

- [SPICE API Documentation](https://naif.jpl.nasa.gov/pub/naif/toolkit_docs/Java/index.html)
- [Java JNI Documentation](https://docs.oracle.com/javase/8/docs/technotes/guides/jni/)
- [CCSDS Time Code Format](https://public.ccsds.org/Pubs/301x0b4e1.pdf)

For implementation questions or technical support, contact the MMTC development team at your organization.