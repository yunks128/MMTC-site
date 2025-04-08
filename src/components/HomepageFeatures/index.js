import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Precise Time Correlation',
    svg: 'img/clock-sync.svg',
    description: (
      <>
        MMTC provides high-precision correlation between spacecraft clock (SCLK) values
        and ground time measurements (TDT/TT), ensuring accurate mission operations.
      </>
    ),
  },
  {
    title: 'Clock Drift Analysis',
    svg: 'img/drift-analysis.svg',
    description: (
      <>
        Track and analyze spacecraft clock drift rates over time, allowing for 
        predictive corrections and enhanced mission planning.
      </>
    ),
  },
  {
    title: 'Multi-Mission Support',
    svg: 'img/multi-mission.svg',
    description: (
      <>
        Adaptable to various spacecraft and mission types with a flexible plugin 
        architecture that integrates with existing mission operations systems.
      </>
    ),
  },
  {
    title: 'SPICE Integration',
    svg: 'img/spice-integration.svg',
    description: (
      <>
        Seamless integration with NASA NAIF SPICE for navigation and 
        ancillary information, providing enhanced time and position calculations.
      </>
    ),
  },
  {
    title: 'Comprehensive Output Products',
    svg: 'img/output-products.svg',
    description: (
      <>
        Generates industry-standard output products including SCLK kernels, 
        SCLK/SCET files, and detailed analysis tables for mission use.
      </>
    ),
  },
  {
    title: 'Quality Control Filtering',
    svg: 'img/quality-control.svg',
    description: (
      <>
        Advanced filtering capabilities ensure only high-quality telemetry data
        is used for time correlation, maintaining precision and reliability.
      </>
    ),
  },
];

function Feature({svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className={styles.featureCard}>
        <div className={styles.featureImageContainer}>
          <img src={svg} className={styles.featureSvg} alt={title} />
        </div>
        <div className={styles.featureContent}>
          <Heading as="h3" className={styles.featureTitle}>{title}</Heading>
          <p className={styles.featureDescription}>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.featuresHeader}>
          <Heading as="h2" className={styles.featuresTitle}>
            Key Features
          </Heading>
          <p className={styles.featuresSubtitle}>
            Discover how MMTC helps maintain precise spacecraft timekeeping
          </p>
        </div>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}