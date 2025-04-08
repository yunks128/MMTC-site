import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <Heading as="h1" className={styles.heroTitle}>
              {siteConfig.title}
            </Heading>
            <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
            <div className={styles.buttons}>
              <Link className="button button--secondary button--lg" to="/docs">
                🚀 Get Started
              </Link>
              <Link className="button button--secondary button--lg" to="/docs/download">
                📥 Download Now
              </Link>
              <Link className="button button--secondary button--lg" to="/about">
                📬 Contact Us
              </Link>
            </div>
          </div>
          <div className={styles.heroImage}>
            <img
              src="img/logo.svg"
              alt="MMTC Logo"
              className={styles.logoImage}
            />
          </div>
        </div>
      </div>
    </header>
  );
}

function MissionHighlight() {
  return (
    <section className={styles.missionHighlight}>
      <div className="container">
        <div className={styles.highlightContainer}>
          <div className={styles.highlightContent}>
            <Heading as="h2" className={styles.highlightTitle}>
              Precision Timekeeping for Space Missions
            </Heading>
            <p className={styles.highlightText}>
              MMTC provides mission-critical time correlation between spacecraft and ground systems, 
              ensuring accurate operations across multiple space missions.
            </p>
            <Link className="button button--primary" to="/docs/mmtc-overview">
              Learn How It Works
            </Link>
          </div>
          <div className={styles.highlightStats}>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>10+</span>
              <span className={styles.statLabel}>Space Missions</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>99.99%</span>
              <span className={styles.statLabel}>Timing Accuracy</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>24/7</span>
              <span className={styles.statLabel}>Mission Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function GetStarted() {
  return (
    <section className={styles.getStarted}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>
          Get Started with MMTC
        </Heading>
        <div className={styles.getStartedGrid}>
          <div className={styles.getStartedCard}>
            <div className={styles.cardIcon}>📋</div>
            <Heading as="h3" className={styles.cardTitle}>For Users</Heading>
            <p className={styles.cardDescription}>
              Learn how to install, configure and operate MMTC for your mission's needs.
            </p>
            <Link to="/docs/user" className={styles.cardLink}>
              User Guide <span className={styles.arrowIcon}>→</span>
            </Link>
          </div>
          <div className={styles.getStartedCard}>
            <div className={styles.cardIcon}>⚙️</div>
            <Heading as="h3" className={styles.cardTitle}>For Developers</Heading>
            <p className={styles.cardDescription}>
              Explore the API, create plugins, and customize MMTC for specific mission requirements.
            </p>
            <Link to="/docs/developer" className={styles.cardLink}>
              Developer Guide <span className={styles.arrowIcon}>→</span>
            </Link>
          </div>
          <div className={styles.getStartedCard}>
            <div className={styles.cardIcon}>🧪</div>
            <Heading as="h3" className={styles.cardTitle}>Testing</Heading>
            <p className={styles.cardDescription}>
              Learn about testing procedures to validate your MMTC implementation.
            </p>
            <Link to="/docs/testing" className={styles.cardLink}>
              Testing Guide <span className={styles.arrowIcon}>→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function LearnMore() {
  return (
    <section className={styles.learnMore}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>
          Learn More About MMTC
        </Heading>
        <div className={styles.learnMoreContent}>
          <div className={styles.learnMoreLinks}>
            <div className={styles.linkGroup}>
              <Heading as="h3" className={styles.linkGroupTitle}>Resources</Heading>
              <ul className={styles.linkList}>
                <li>
                  <Link to="/docs/faqs" className={styles.link}>
                    <span className={styles.linkIcon}>❓</span> Frequently Asked Questions
                  </Link>
                </li>
                <li>
                  <Link to="/docs/developer/api" className={styles.link}>
                    <span className={styles.linkIcon}>📘</span> API Documentation
                  </Link>
                </li>
                <li>
                  <Link to="/blog" className={styles.link}>
                    <span className={styles.linkIcon}>📰</span> News and Updates
                  </Link>
                </li>
              </ul>
            </div>
            <div className={styles.linkGroup}>
              <Heading as="h3" className={styles.linkGroupTitle}>Community</Heading>
              <ul className={styles.linkList}>
                <li>
                  <Link to="https://github.com/mmtc-org/mmtc/discussions" className={styles.link}>
                    <span className={styles.linkIcon}>💬</span> Discussion Thread (GitHub)
                  </Link>
                </li>
                <li>
                  <Link to="https://slack.mmtc.com" className={styles.link}>
                    <span className={styles.linkIcon}>🔗</span> Team Communication (Slack)
                  </Link>
                </li>
                <li>
                  <Link to="/docs/contributing" className={styles.link}>
                    <span className={styles.linkIcon}>🤝</span> Contribution Guide
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.callToAction}>
            <p>Ready to improve your mission's time correlation?</p>
            <Link to="/docs/download" className="button button--primary button--lg">
              Get MMTC Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout 
      title={`Welcome to ${siteConfig.title}`} 
      description="Multi-Mission Time Correlation System - Maintaining precise time synchronization between spacecraft and ground systems."
    >
      <HomepageHeader />
      <main>
        <MissionHighlight />
        <HomepageFeatures />
        <GetStarted />
        <LearnMore />
      </main>
    </Layout>
  );
}