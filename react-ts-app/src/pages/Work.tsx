import React from 'react';
import NavHeader from 'src/components/NavHeader/NavHeader';
import Card from 'src/components/Cards/Cards';
import styles from './Work.module.scss';

function Work() {
  return (
    <div className="Work Body">
      <NavHeader />
      <div className={styles.card_list}>
        <Card iconStyle={false} imagePath='nouri-website.png' title='Nouri Website' description='I am the lead designer and developer for the Nouri website built in Webflow. Click to see the website.' href='https://nouri.ai/' />
        <Card iconStyle={false} imagePath='nouri-mobile.png' title='Nouri Mobile App' description='I am the lead designer, product manager, and project manager for the development of the Nouri mobile app. Click to download the app for free.' href='https://nouri.ai/download' />
        <Card iconStyle={false} imagePath='nouri-events.png' title='Nouri Events' description='I am the lead designer, product manager, and project manager for the development of the Nouri Events ticketing and registration platform. Click to see the web app.' href='https://nouri.ai/events' />
      </div>
    </div>
  );
}

export default Work;