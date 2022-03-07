import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Este livro é para você',
    Svg: require('../../static/img/Code Development _Outline.svg').default,
    description: (
      <>
        Que deseja aprender Flutter e quer um conteúdo de qualidade e estruturado.
      </>
    ),
  },
  {
    title: 'Comece por aqui',
    Svg: require('../../static/img/Mobile Phone_Outline.svg').default,
    description: (
      <>
        Idealizado para servir como guia à qualquer pessoa interessada em escrever os seus primeiros aplicativos com Flutter.
      </>
    ),
  },
  {
    title: 'Open source',
    Svg: require('../../static/img/Team building _Outline.svg').default,
    description: (
      <>
        Ele é gratuito, open source e estará sempre aberto à críticas e sugestões.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
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
