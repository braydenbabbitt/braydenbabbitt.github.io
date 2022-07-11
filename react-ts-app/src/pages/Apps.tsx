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
        <Card external={true} imagePath='spotify-logo.png' title='Spotify Algorithms' description='An app for creating algorithms to manipulate Spotify playlists written in Python. This is a WIP and currently has no UI.' href='https://github.com/braydenbabbitt/spotify_algorithms' />
        <Card external={true} imagePath='random-quote-machine.png' title='Random Quote Machine' description='A simple app for generating a random quote and being able to share it written in ReactJS.' href='/apps/quotegenerator' />
      </div>
    </div>
  );
}

export default Apps;