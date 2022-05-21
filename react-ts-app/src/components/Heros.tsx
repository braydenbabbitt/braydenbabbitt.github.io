import React from 'react';
import 'src/globalStyles/mainStyles.scss';

interface HeroProps {
  title: string;
  imagePath: string;
}

class Hero extends React.Component<HeroProps> {
  render() {
    return (
      <section className="hero-section">
        <h1 className="hero-title"></h1>
      </section>
    );
  }
}

export default Hero;