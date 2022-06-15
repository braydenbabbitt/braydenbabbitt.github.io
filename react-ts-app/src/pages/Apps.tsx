import React from 'react';
import Card from 'src/components/Cards/Cards';
import NavHeader from 'src/components/NavHeader/NavHeader';
import styles from './Apps.module.scss';

function Apps() {
  return (
    <div className="Apps Body">
      <NavHeader />
      <div className={styles.card_list}>
        <Card external={true} imagePath='timer-image.png' title='Countdown Timer' description='A simple countdown timer written in Flutter' href='/apps/timer' />
      </div>
    </div>
  );
}

export default Apps;