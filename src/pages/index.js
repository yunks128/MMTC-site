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
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className={styles.heroTitle}>
          {siteConfig.title}
        </Heading>
        <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className="button button--primary button--lg" to="/docs">
            🚀 Get Started
          </Link>
          <Link className="button button--primary button--lg" to="/docs/download">
            📥 Download Now
          </Link>
          <Link className="button button--primary button--lg" to="/about">
            📬 Contact Us
          </Link>
        </div>
        <div className={styles.screenshotContainer}>
          <img
            src="/img/logo.svg"
            alt="MMTC Product Screenshot"
            className={styles.screenshot}
          />
        </div>
      </div>
    </header>
  );
}


function CustomerLogos() {
  return (
    <section className={styles.customerLogos}>
      <div className="container">
        <h2 className="sectionTitle">Trusted By</h2>
        <div className={styles.logos}>
          <img src="/img/customer1.png" alt="Customer 1" />
          <img src="/img/customer2.png" alt="Customer 2" />
          <img src="/img/customer3.png" alt="Customer 3" />
        </div>
      </div>
    </section>
  );
}


function Testimonials() {
  return (
    <section className={styles.testimonials}>
      <div className="container">
        <h2 className="sectionTitle">What Our Users Say</h2>
        <div className={styles.quotes}>
          <blockquote>
            <p>"MMTC has revolutionized our workflow!"</p>
            <cite>- Satisfied User</cite>
          </blockquote>
          <blockquote>
            <p>"The features are top-notch and incredibly useful."</p>
            <cite>- Happy Client</cite>
          </blockquote>
          <blockquote>
            <p>"Outstanding support and a fantastic product."</p>
            <cite>- Loyal Customer</cite>
          </blockquote>
        </div>
      </div>
    </section>
  );
}

function ProductVideo() {
  return (
    <section className={styles.productVideo}>
      <div className="container">
        <h2 className="sectionTitle">See MMTC in Action</h2>
        <div className={styles.videoWrapper}>
          <iframe
            width="100%"
            height="400"
            src="https://www.youtube.com/embed/your-video-id"
            title="MMTC Product Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}

function GetStarted() {
  return (
    <section className={styles.getStarted}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Get Started with MMTC</h2>
        <div className={styles.getStartedContent}>
          <div>
            <h3>For Users</h3>
            <Link to="/docs/user" className={styles.link}>
              Read the User Guide
            </Link>
          </div>
          <div>
            <h3>For Developers</h3>
            <Link to="/docs/developer" className={styles.link}>
              Read the Developer Guide
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
        <h2 className={styles.sectionTitle}>Learn More About MMTC</h2>
        <ul className={styles.learnMoreList}>
          <li>
            <Link to="https://slack.mmtc.com" className={styles.link}>
              Team Communication (Slack)
            </Link>
          </li>
          <li>
            <Link to="https://github.com/mmtc-org/mmtc/discussions" className={styles.link}>
              Discussion Thread (GitHub)
            </Link>
          </li>
          <li>
            <Link to="/blog" className={styles.link}>
              News and Updates
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}

function Sponsors() {
  return (
    <section className={styles.sponsors}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Our Sponsors</h2>
        <div className={styles.logos}>
          <img src="/img/sponsor1.png" alt="Sponsor 1" />
          <img src="/img/sponsor2.png" alt="Sponsor 2" />
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout title={`Welcome to ${siteConfig.title}`} description="Your go-to solution for project management and collaboration.">
      <HomepageHeader />
      <main>
        <CustomerLogos />
        <Testimonials />
        <ProductVideo />
        <HomepageFeatures />
        <GetStarted />
        <LearnMore />
        <Sponsors />
      </main>
    </Layout>
  );
}