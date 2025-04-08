"use strict";(self.webpackChunkslim_docsite_template=self.webpackChunkslim_docsite_template||[]).push([[4835],{5222:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var r=i(4848),t=i(8453);const s={id:"mmtc-overview",title:"MMTC Project Overview",sidebar_position:1},l="MMTC: Multi-Mission Time Correlation",o={id:"mmtc-overview",title:"MMTC Project Overview",description:"The Multi-Mission Time Correlation (MMTC) application is a NASA AMMOS component developed by Johns Hopkins Applied Physics Laboratory (JHU/APL) that provides an automated system for correlating spacecraft clock (SCLK) values with ground time. MMTC is designed to be mission-independent and adaptable to different spacecraft and ground systems, intended for operation in Mission Operations Centers (MOCs) or Mission Support Areas (MSAs).",source:"@site/docs/project-overview.md",sourceDirName:".",slug:"/mmtc-overview",permalink:"/MMTC-site/docs/mmtc-overview",draft:!1,unlisted:!1,editUrl:"https://github.com/NASA-AMMOS/MMTC/tree/main/docs/project-overview.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"mmtc-overview",title:"MMTC Project Overview",sidebar_position:1},sidebar:"mmtcSidebar",previous:{title:"Introduction",permalink:"/MMTC-site/docs/"},next:{title:"Download MMTC",permalink:"/MMTC-site/docs/download"}},a={},c=[{value:"Purpose and Functionality",id:"purpose-and-functionality",level:2},{value:"System Architecture",id:"system-architecture",level:2},{value:"Architectural Diagram",id:"architectural-diagram",level:3},{value:"Key Components",id:"key-components",level:3},{value:"Technical Specifications",id:"technical-specifications",level:3},{value:"Data Flow",id:"data-flow",level:2},{value:"Operational Workflow",id:"operational-workflow",level:2},{value:"Clock Change Rate Computation",id:"clock-change-rate-computation",level:2},{value:"Configuration System",id:"configuration-system",level:2},{value:"Project Structure",id:"project-structure",level:2},{value:"Primary Components:",id:"primary-components",level:3},{value:"File Distribution:",id:"file-distribution",level:3},{value:"Installation and Deployment",id:"installation-and-deployment",level:2},{value:"License and Acknowledgments",id:"license-and-acknowledgments",level:2},{value:"Getting Started",id:"getting-started",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",mermaid:"mermaid",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"mmtc-multi-mission-time-correlation",children:"MMTC: Multi-Mission Time Correlation"})}),"\n",(0,r.jsx)(n.p,{children:"The Multi-Mission Time Correlation (MMTC) application is a NASA AMMOS component developed by Johns Hopkins Applied Physics Laboratory (JHU/APL) that provides an automated system for correlating spacecraft clock (SCLK) values with ground time. MMTC is designed to be mission-independent and adaptable to different spacecraft and ground systems, intended for operation in Mission Operations Centers (MOCs) or Mission Support Areas (MSAs)."}),"\n",(0,r.jsx)(n.h2,{id:"purpose-and-functionality",children:"Purpose and Functionality"}),"\n",(0,r.jsx)(n.p,{children:"MMTC serves several critical functions in spacecraft operations:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Time Correlation"}),": Associates spacecraft clock values with Terrestrial Dynamical Time (TDT) and calculates clock drift rates to enable accurate time mapping between spacecraft and ground systems."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Telemetry Processing"}),": Extracts timing information from spacecraft telemetry data, applying quality filters to ensure reliable correlation."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Product Generation"}),": Creates standard time correlation products used by mission operations teams and science data processing:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["SCLK Kernels for ",(0,r.jsx)(n.a,{href:"https://naif.jpl.nasa.gov/naif/",children:"NAIF SPICE"})]}),"\n",(0,r.jsx)(n.li,{children:"SCLK/SCET (Spacecraft Event Time) files"}),"\n",(0,r.jsx)(n.li,{children:"Uplink Command files for clock updates"}),"\n",(0,r.jsx)(n.li,{children:"Various analysis tables and reports"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Clock Drift Monitoring"}),": Tracks spacecraft oscillator performance over time, crucial for long-duration missions."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"system-architecture",children:"System Architecture"}),"\n",(0,r.jsx)(n.p,{children:"MMTC is built as a Java command-line application with a modular architecture. Below is an architectural diagram illustrating how MMTC fits into the broader mission operations environment and how its internal components interact."}),"\n",(0,r.jsx)(n.h3,{id:"architectural-diagram",children:"Architectural Diagram"}),"\n",(0,r.jsx)(n.mermaid,{value:'%%{init: {\n  \'theme\': \'default\',\n  \'themeVariables\': {\n    \'fontSize\': \'16px\',\n    \'fontFamily\': \'Arial\',\n    \'nodeTextColor\': \'#000\'\n  },\n  \'flowchart\': {\n    \'curve\': \'basis\',\n    \'useMaxWidth\': true\n  }\n}}%%\n\ngraph TD\n\n    %% Mission Operations Environment\n    subgraph "Mission Operations Environment"\n        MOT["Mission Operations Team<br><title>Operates the spacecraft and monitors health</title>"]\n        DSN["Deep Space Network<br><title>Handles uplink/downlink between ground and spacecraft</title>"]\n        SC["Spacecraft<br><title>Receives commands and sends telemetry</title>"]\n        GDS["Ground Data System<br><title>Processes data and handles command sequences</title>"]\n        SDP["Science Data Processing<br><title>Processes time products and generates science outputs</title>"]\n        NAIF["NAIF SPICE System<br><title>Receives SCLK kernels for spacecraft timing</title>"]\n        \n        SC --\x3e|Telemetry| DSN\n        DSN --\x3e|Downlink| GDS\n        GDS --\x3e|Commands| DSN\n        DSN --\x3e|Uplink| SC\n    end\n\n    %% MMTC Application\n    subgraph "MMTC Application"\n        CLI["Command Line Interface<br><title>User interface to operate MMTC</title>"]\n        TelSrc["Telemetry Source<br><title>Aggregates telemetry from multiple plugins</title>"]\n        TimeCorr["Time Correlation Engine<br><title>Performs clock correlation and conversion</title>"]\n        ProdGen["Product Generation<br><title>Generates time products, summaries, and kernels</title>"]\n        Config["Configuration System<br><title>Manages parameter and system configurations</title>"]\n        \n        CLI --\x3e|Parameters| TimeCorr\n        TelSrc --\x3e|Time Samples| TimeCorr\n        TimeCorr --\x3e|Correlations| ProdGen\n        Config --\x3e|Settings| TimeCorr\n        Config --\x3e|Settings| TelSrc\n        Config --\x3e|Settings| ProdGen\n    end\n\n    %% Telemetry Source Components\n    subgraph "Telemetry Source"\n        AMPCS["AMPCS Plugin<br><title>Extracts telemetry from AMPCS pipeline</title>"]\n        RawTable["Raw Telemetry Table<br><title>Direct access to raw telemetry database</title>"]\n        CustomSrc["Custom Source Plugins<br><title>Other user-defined telemetry sources</title>"]\n        \n        AMPCS --\x3e TelSrc\n        RawTable --\x3e TelSrc\n        CustomSrc --\x3e TelSrc\n    end\n\n    %% Time Correlation Engine Components\n    subgraph "Time Correlation Engine"\n        SampleProc["Sample Processor<br><title>Initial processing of time samples</title>"]\n        FilterChain["Filter Chain<br><title>Applies filters to clean and qualify data</title>"]\n        ClockModel["Clock Model<br><title>Builds correlation model for time conversion</title>"]\n        TimeConv["Time Conversion<br><title>Generates SCET/SCLK pairs and histories</title>"]\n        \n        SampleProc --\x3e FilterChain\n        FilterChain --\x3e ClockModel\n        ClockModel --\x3e TimeConv\n        TimeConv --\x3e TimeCorr\n    end\n\n    %% Product Generation Components\n    subgraph "Product Generation"\n        SCLKKernel["SCLK Kernel Generator<br><title>Generates SCLK kernels for NAIF</title>"]\n        SCLKSCETFile["SCLK/SCET Generator<br><title>Generates correlation data files</title>"]\n        TimeHistory["Time History Generator<br><title>Generates time history plots/files</title>"]\n        SummaryTable["Summary Table Generator<br><title>Generates summary views of time quality</title>"]\n        UplinkCmd["Uplink Command Generator<br><title>Creates time-based command constraints</title>"]\n        \n        SCLKKernel --\x3e ProdGen\n        SCLKSCETFile --\x3e ProdGen\n        TimeHistory --\x3e ProdGen\n        SummaryTable --\x3e ProdGen\n        UplinkCmd --\x3e ProdGen\n    end\n\n    %% Filter Components\n    subgraph "Filters"\n        ContactFilter["Contact Filter<br><title>Filters telemetry during DSN contact periods</title>"]\n        DataRateFilter["Data Rate Filter<br><title>Filters based on telemetry volume</title>"]\n        ERTSCLKFilter["ERT/SCLK Filter<br><title>Aligns Earth Received Time with SCLK</title>"]\n        TempFilter["Temperature Filter<br><title>Filters data by spacecraft thermal conditions</title>"]\n        \n        ContactFilter --\x3e FilterChain\n        DataRateFilter --\x3e FilterChain\n        ERTSCLKFilter --\x3e FilterChain\n        TempFilter --\x3e FilterChain\n    end\n\n    %% External connections\n    GDS --\x3e|Telemetry Data| TelSrc\n    ProdGen --\x3e|SCLK Kernels| NAIF\n    ProdGen --\x3e|Time Products| SDP\n    ProdGen --\x3e|Uplink Commands| GDS\n    MOT --\x3e|Operates| CLI\n    MOT --\x3e|Configures| Config\n'}),"\n",(0,r.jsx)(n.h3,{id:"key-components",children:"Key Components"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Core Framework"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Time correlation engine for computing spacecraft-to-ground time relationships"}),"\n",(0,r.jsx)(n.li,{children:"Configuration management system for mission-specific adaptations"}),"\n",(0,r.jsx)(n.li,{children:"Product generation framework for creating standardized outputs"}),"\n",(0,r.jsx)(n.li,{children:"Time system conversion utilities for handling different time references"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Telemetry Source Plugins"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"AMPCS (AMMOS Mission Data Processing and Control System) plugin for NASA missions"}),"\n",(0,r.jsx)(n.li,{children:"Raw Telemetry Table source for direct telemetry access"}),"\n",(0,r.jsx)(n.li,{children:"Extensible interface for mission-specific plugins through a well-defined API"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Quality Filters"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Contact Filter: Validates clock drift rates during spacecraft contacts"}),"\n",(0,r.jsx)(n.li,{children:"ERT/SCLK Filters: Ensures consistency and monotonicity in timing data"}),"\n",(0,r.jsx)(n.li,{children:"Data Rate Filters: Validates telemetry rate and identifies anomalies"}),"\n",(0,r.jsx)(n.li,{children:"Temperature-based filters: Compensates for oscillator temperature effects on clock drift"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Output Product Generators"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"SCLK Kernel Generator: Creates SPICE-compatible time correlation kernels"}),"\n",(0,r.jsx)(n.li,{children:"SCLK/SCET Generator: Produces mapping files between spacecraft and Earth time"}),"\n",(0,r.jsx)(n.li,{children:"Time History File Generator: Records correlation evolution over mission lifetime"}),"\n",(0,r.jsx)(n.li,{children:"Summary Table Generator: Creates reports on correlation quality and statistics"}),"\n",(0,r.jsx)(n.li,{children:"Uplink Command Generator: Prepares spacecraft clock update commands"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Rollback Management"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Provides capabilities to revert to previous versions of correlation products"}),"\n",(0,r.jsx)(n.li,{children:"Maintains archive of historical correlation data"}),"\n",(0,r.jsx)(n.li,{children:"Supports comparison between multiple correlation periods"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"technical-specifications",children:"Technical Specifications"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Implementation Language"}),": Java 8"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"External Dependencies"}),":","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"NAIF SPICE libraries (via JNI interface)"}),"\n",(0,r.jsx)(n.li,{children:"Log4j2 for logging"}),"\n",(0,r.jsx)(n.li,{children:"Apache Commons for utilities"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Build System"}),": Gradle"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Package Format"}),": RPM for RHEL 8/9 and tar.gz archive"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Configuration Format"}),": XML and CSV files"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Memory Requirements"}),": 4GB minimum, 8GB recommended for large datasets"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"data-flow",children:"Data Flow"}),"\n",(0,r.jsx)(n.p,{children:"MMTC processes data through the following workflow:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Data Acquisition"}),": Telemetry containing spacecraft clock (SCLK) and Earth Receive Time (ERT) values is retrieved from the configured telemetry source."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Filtering & Validation"}),": Telemetry samples undergo multiple filtering stages to ensure quality:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Validation of data format and completeness"}),"\n",(0,r.jsx)(n.li,{children:"Elimination of outliers and inconsistent samples"}),"\n",(0,r.jsx)(n.li,{children:"Verification of telemetry rates and patterns"}),"\n",(0,r.jsx)(n.li,{children:"Assessment of clock stability metrics"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Correlation Computation"}),": Using validated samples, MMTC:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Calculates the relationship between SCLK and ground time (TDT)"}),"\n",(0,r.jsx)(n.li,{children:"Applies light-time corrections based on spacecraft position"}),"\n",(0,r.jsx)(n.li,{children:"Determines clock drift rate and stability"}),"\n",(0,r.jsx)(n.li,{children:"Handles spacecraft clock partitions and discontinuities"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Product Generation"}),": Based on computed correlations, MMTC creates:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"SCLK kernels for SPICE integration"}),"\n",(0,r.jsx)(n.li,{children:"SCLK/SCET files for ground system time mapping"}),"\n",(0,r.jsx)(n.li,{children:"Analysis tables for performance monitoring"}),"\n",(0,r.jsx)(n.li,{children:"Uplink command files for potential clock adjustments"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"operational-workflow",children:"Operational Workflow"}),"\n",(0,r.jsx)(n.p,{children:"MMTC follows a standard operational process in mission environments:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Configuration"}),": Mission-specific parameters are set in XML configuration files"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Telemetry Query"}),": MMTC queries specified telemetry source with start/stop times"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Data Filtering"}),": Telemetry samples undergo quality filtering using configurable criteria"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Correlation Computation"}),": Time correlation and clock drift are calculated using selected algorithms"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Product Generation"}),": Standard output products are created for mission consumption"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Deployment"}),": Products are distributed to mission systems according to operational procedures"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Monitoring"}),": Correlation quality and clock performance are continuously monitored"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"clock-change-rate-computation",children:"Clock Change Rate Computation"}),"\n",(0,r.jsx)(n.p,{children:"MMTC offers several methods for computing spacecraft clock change rates:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Predicted"}),": Computes based on current and past time correlations, projecting future behavior"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Interpolated"}),": Computes and updates previous correlations (default method)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Assigned"}),": Uses manually specified values from mission operations input"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"No-Drift"}),": Fixed at 1.0 (assumes perfect clock, useful for testing)"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"The selection of method depends on mission phase, spacecraft characteristics, and operational requirements."}),"\n",(0,r.jsx)(n.h2,{id:"configuration-system",children:"Configuration System"}),"\n",(0,r.jsx)(n.p,{children:"MMTC is configured via several files:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"TimeCorrelationConfigProperties.xml"}),": Main configuration defining:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Telemetry source configuration"}),"\n",(0,r.jsx)(n.li,{children:"Filter parameters and thresholds"}),"\n",(0,r.jsx)(n.li,{children:"Output product specifications"}),"\n",(0,r.jsx)(n.li,{children:"Clock model parameters"}),"\n",(0,r.jsx)(n.li,{children:"Processing options"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"GroundStationsMap.csv"}),": Maps DSN station IDs to SPICE identifiers"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"SclkPartitionMap.csv"}),": Defines SCLK partitions and reset points"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"log4j2.properties"}),": Configures logging levels and destinations"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"project-structure",children:"Project Structure"}),"\n",(0,r.jsx)(n.p,{children:"The MMTC codebase is organized into several key areas:"}),"\n",(0,r.jsx)(n.h3,{id:"primary-components",children:"Primary Components:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Core Framework"}),": Java classes for time correlation calculations and system orchestration"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Telemetry Handling"}),": Code for processing spacecraft data from various sources"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Plugin Architecture"}),": Extensible system for integration with different telemetry sources"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Time Conversion Utilities"}),": Functions for converting between time formats (SCLK, TDT, UTC, etc.)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Product Generation"}),": Creates SCLK kernels and other output files to mission specifications"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"file-distribution",children:"File Distribution:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Java Source Files (",(0,r.jsx)(n.code,{children:".java"}),"): Core application code organized in a standard package hierarchy"]}),"\n",(0,r.jsxs)(n.li,{children:["XML Files (",(0,r.jsx)(n.code,{children:".xml"}),"): Configuration templates and examples for different mission scenarios"]}),"\n",(0,r.jsxs)(n.li,{children:["CSV Files (",(0,r.jsx)(n.code,{children:".csv"}),"): Mapping tables and sample data for ground stations and SCLK partitions"]}),"\n",(0,r.jsxs)(n.li,{children:["Shell Scripts (",(0,r.jsx)(n.code,{children:".sh"}),"): Startup and utility scripts for operational use"]}),"\n",(0,r.jsx)(n.li,{children:"Test Resources: Various file types for validation and testing, including sample telemetry"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"installation-and-deployment",children:"Installation and Deployment"}),"\n",(0,r.jsx)(n.p,{children:"MMTC is distributed in two formats:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"RPM Package"}),": For RHEL 8/9 environments (recommended for operational deployments)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Tar Archive (.tar.gz)"}),": Platform-independent distribution for other Linux environments"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Installation creates a standard directory structure for:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Configuration files customized for the mission"}),"\n",(0,r.jsx)(n.li,{children:"Output products organized by type and date"}),"\n",(0,r.jsx)(n.li,{children:"Log files with configurable verbosity"}),"\n",(0,r.jsx)(n.li,{children:"Temporary data for processing large telemetry sets"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"license-and-acknowledgments",children:"License and Acknowledgments"}),"\n",(0,r.jsx)(n.p,{children:"MMTC is released under the Apache License 2.0 and was developed by Johns Hopkins University Applied Physics Laboratory for NASA/JPL."}),"\n",(0,r.jsx)(n.p,{children:"This work was performed for the Jet Propulsion Laboratory, California Institute of Technology, sponsored by the United States Government under the Prime Contract 80NM0018D00004 between Caltech and NASA under subcontract number 1658085."}),"\n",(0,r.jsx)(n.h2,{id:"getting-started",children:"Getting Started"}),"\n",(0,r.jsxs)(n.p,{children:["For installation instructions, see the ",(0,r.jsx)(n.a,{href:"download",children:"Download"})," page."]}),"\n",(0,r.jsxs)(n.p,{children:["For configuration guidance, refer to the ",(0,r.jsx)(n.a,{href:"configuration",children:"Configuration"})," section."]}),"\n",(0,r.jsxs)(n.p,{children:["For operational procedures, consult the ",(0,r.jsx)(n.a,{href:"user",children:"User Guide"}),"."]})]})}function m(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>o});var r=i(6540);const t={},s=r.createContext(t);function l(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);