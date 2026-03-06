import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'No-Code API to MCP Translation',
    Svg: require('@site/static/img/feature-translation.svg').default,
    description: (
      <>
        Transform existing REST, GraphQL, and gRPC APIs into MCP-compatible
        endpoints without rewriting your backend services.
      </>
    ),
  },
  {
    title: 'Security Built In',
    Svg: require('@site/static/img/feature-security.svg').default,
    description: (
      <>
        Configure API key or OAuth access, backend secrets, and policy-driven
        filtering to safely expose MCP servers in production.
      </>
    ),
  },
  {
    title: 'Flexible Deployment',
    Svg: require('@site/static/img/feature-deployment.svg').default,
    description: (
      <>
        Run in cloud or hybrid mode with gateway groups, then scale and update
        MCP endpoint exposure through configuration plans and expositions.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
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
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
