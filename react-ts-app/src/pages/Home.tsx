import React from 'react';
import NavHeader from 'src/components/NavHeader/NavHeader';
import styles from './Home.module.scss';
import 'src/globalStyles/mainStyles.scss';

function Home() {
  return (
    <div className="Home Body">
      <div className={styles.first_page}>
        <NavHeader />
        <section className={styles.hero}>
          <h1 className={styles.hero_title}>Developer<br />Designer<br />Musician</h1>
          <img className={styles.hero_image} src="/brayden-headshot.jpg" alt="" />
        </section>
      </div>
    </div>
  );
}

export default Home;