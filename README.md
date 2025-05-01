<!-- Header block for project -->
<hr>

<div align="center">

<h1 align="center">MMTC Website</h1>

</div>

<pre align="center">Website and Documentation for Multi-Mission Time Correlation (MMTC).</pre>

<!-- Header block for project -->

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Deployed-success)](https://yunks128.github.io/MMTC-site/) [![Made with Docusaurus](https://img.shields.io/badge/Made%20with-Docusaurus-blue)](https://docusaurus.io/) [![NASA](https://img.shields.io/badge/NASA-AMMOS-red)](https://ammos.nasa.gov/) [![SLIM](https://img.shields.io/badge/Best%20Practices%20from-SLIM-blue)](https://nasa-ammos.github.io/slim/)

MMTC (Multi-Mission Time Correlation) is a NASA AMMOS component developed by Johns Hopkins Applied Physics Laboratory (JHU/APL) that provides an automated system for correlating spacecraft clock (SCLK) values with ground time. This website hosts comprehensive documentation and resources for users and developers of the MMTC software.

[Documentation](https://yunks128.github.io/MMTC-site/docs) | [Developer Guide](https://yunks128.github.io/MMTC-site/docs/developer) | [User Guide](https://yunks128.github.io/MMTC-site/docs/user) | [FAQs](https://yunks128.github.io/MMTC-site/docs/faqs)

## Features

* Comprehensive documentation for both users and developers
* Detailed API references and guides
* Project overview and tutorials
* Installation and configuration instructions
* Troubleshooting guides and FAQs
* Mobile-responsive design with dark mode support
* Searchable content with organized sidebar navigation

## Contents

- [Features](#features)
- [Contents](#contents)
- [Repository Structure](#repository-structure)
- [Quick Start](#quick-start)
  - [Requirements](#requirements)
  - [Setup Instructions](#setup-instructions)
  - [Run Instructions](#run-instructions)
  - [Build Instructions](#build-instructions)
  - [Deployment](#deployment)
- [Changelog](#changelog)
- [Frequently Asked Questions (FAQ)](#frequently-asked-questions-faq)
- [Contributing](#contributing)
- [License](#license)
- [Support](#support)

## Repository Structure

```
/MMTC-site/
├── .github/                   # GitHub-specific files
│   └── PULL_REQUEST_TEMPLATE.md  # Template for pull requests
├── blog/                      # Blog posts for developer notes
│   ├── 2021-08-26-welcome/    # Blog post with assets
│   │   └── index.md           # Blog post content
│   └── YYYY-MM-DD-title.md    # Other blog posts
├── docs/                      # Documentation files (Markdown)
│   ├── developer/             # Developer documentation
│   │   ├── api.md             # API reference
│   │   ├── getting-started-dev.md  # Developer getting started
│   │   └── ...                # Other developer docs
│   ├── user/                  # User documentation
│   │   ├── installation.md    # Installation guide
│   │   ├── quick-start.md     # Quick start guide
│   │   └── ...                # Other user docs
│   ├── contributing.md        # Contributing guidelines
│   ├── faqs.md                # FAQ page
│   └── index.md               # Documentation home page
├── src/                       # Source code for the website
│   ├── components/            # React components
│   │   └── HomepageFeatures/  # Homepage feature components
│   │       ├── index.js       # Component implementation
│   │       └── styles.module.css  # Component styles
│   ├── css/                   # Global CSS styles
│   │   └── custom.css         # Custom CSS overrides
│   └── pages/                 # Static pages
│       ├── about.js           # About page
│       ├── index.js           # Homepage
│       └── ...                # Other pages
├── static/                    # Static assets
│   ├── img/                   # Images and icons
│   └── ...                    # Other static files
├── babel.config.js            # Babel configuration
├── CHANGELOG.md               # Project changelog
├── CODE_OF_CONDUCT.md         # Code of conduct
├── CONTRIBUTING.md            # Contributing guidelines
├── docusaurus.config.js       # Docusaurus configuration
├── GOVERNANCE.md              # Project governance model
├── LICENSE                    # License file
├── package.json               # Node.js dependencies
├── README.md                  # This file
└── sidebars.js                # Sidebar configuration
```

## Quick Start

This guide provides a quick way to get started with the MMTC documentation website. Please see our [docs](https://yunks128.github.io/MMTC-site/docs) for comprehensive information about the MMTC software itself.

### Requirements

* Node.js 14.0 or higher
* Yarn package manager
* Git

### Setup Instructions

1. Clone the repository to your local machine:
   ```
   git clone https://github.com/yunks128/MMTC-site.git
   cd MMTC-site
   ```
2. Install the dependencies:
   ```
   yarn
   ```

### Run Instructions

1. Start the local development server:
   ```
   yarn start
   ```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build Instructions

1. Build the static content:
   ```
   yarn build
   ```

This command generates static content into the `build` directory and can be served using any static content hosting service.

### Deployment

The project is configured to be deployed to GitHub Pages. To deploy the site:

1. Ensure that GitHub Pages is enabled for your repository. You can enable it by going to the repository settings on GitHub and selecting the branch you want to use for GitHub Pages, typically `gh-pages` or `main`.
   
2. Deploy to GitHub Pages:

   - Deploy using SSH:
     ```
     USE_SSH=true yarn deploy
     ```

   - Deploy without SSH:
     ```
     GIT_USER=<Your GitHub username> yarn deploy
     ```

3. For more detailed information on deploying with GitHub Actions, please refer to the [Docusaurus documentation](https://docusaurus.io/docs/deployment#triggering-deployment-with-github-actions).

## Changelog

See our [CHANGELOG.md](CHANGELOG.md) for a history of our changes.

## Frequently Asked Questions (FAQ)

For frequently asked questions about MMTC, please refer to our [FAQs page](https://yunks128.github.io/MMTC-site/docs/faqs) in the documentation.

## Contributing

Interested in contributing to our project? Please see our [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines on how to contribute.

For guidance on how to interact with our team, please see our code of conduct located at: [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md)

## License

MMTC is released under the Apache License 2.0. See our: [LICENSE](LICENSE) for details.

## Support

For questions regarding the MMTC software or documentation, please file an issue on this repository or contact the MMTC development team at mmtc-support@jhuapl.edu.

This work was performed for the Jet Propulsion Laboratory, California Institute of Technology, sponsored by the United States Government under the Prime Contract 80NM0018D00004 between Caltech and NASA under subcontract number 1658085.