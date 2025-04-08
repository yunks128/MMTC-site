import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Real-Time Data Processing',
    Svg: () => <img src="/img/200x200.png" alt="Real-Time Data Processing" />, // Placeholder image
    description: (
      <>
        MMTC offers real-time data processing capabilities, allowing users to analyze and visualize data as it streams in.
      </>
    ),
  },
  {
    title: 'User-Friendly Interface',
    Svg: () => <img src="/img/200x200.png" alt="User-Friendly Interface" />, // Placeholder image
    description: (
      <>
        Our platform features an intuitive interface designed for ease of use, enabling users to navigate and utilize tools effortlessly.
      </>
    ),
  },
  {
    title: 'Advanced Analytics',
    Svg: () => <img src="/img/200x200.png" alt="Advanced Analytics" />, // Placeholder image
    description: (
      <>
        Leverage advanced analytics tools to gain insights and make data-driven decisions with confidence.
      </>
    ),
  },
  {
    title: 'Customizable Dashboards',
    Svg: () => <img src="/img/200x200.png" alt="Customizable Dashboards" />, // Placeholder image
    description: (
      <>
        Create and customize dashboards to visualize the metrics that matter most to your organization.
      </>
    ),
  },
  {
    title: 'Seamless Integration',
    Svg: () => <img src="/img/200x200.png" alt="Seamless Integration" />, // Placeholder image
    description: (
      <>
        Easily integrate with existing systems and tools to streamline workflows and enhance productivity.
      </>
    ),
  },
  {
    title: 'Robust Security Features',
    Svg: () => <img src="/img/200x200.png" alt="Robust Security Features" />, // Placeholder image
    description: (
      <>
        MMTC prioritizes security with robust features to protect your data and ensure compliance with industry standards.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4', styles.feature)}>
      <div>
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className={styles.featureContent}>
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.sectionTitleContainer}>
          <h2 className="sectionTitle">Key Features of MMTC</h2>
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
