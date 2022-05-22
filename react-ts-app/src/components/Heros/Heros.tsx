import React from 'react';
import 'src/globalStyles/mainStyles.scss';

interface HeroProps {
  className: string;
  title: string;
  imagePath: string;
}

class Hero extends React.Component<HeroProps> {
  render() {
    return (
      <section className={`hero-section ${this.props.className}`}>
        {this.props.title}
      </section>
    );
  }
}

export default Hero;