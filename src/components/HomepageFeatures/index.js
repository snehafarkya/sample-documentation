import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Protetk is built with developers in mind. It gives feasible accessibility to secure authentication without the usual complexity. The documentation is all they need to get started. 
      </>
    ),
  },
  {
    title: 'Secure by Default',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        The best part? All the security features are enabled by default. Be it OAuth, SAML, or OpenID Connect, Protekt has you covered. It ensures that users' data is safe and sound.
      </>
    ),
  },
  {
    title: 'Developer-Friendly Sandbox',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        The USP of Protekt is its free sandbox environment. Developers just have to stick to the documentation and they are good to go. Developers can validate authentication before pushing code to production.
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
