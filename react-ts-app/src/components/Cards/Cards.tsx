import React from 'react';
import { Link } from "react-router-dom";
import styles from './Cards.module.scss';

interface CardProps {
  imagePath: string;
  title: string;
  description: string;
  href: string;
}

class Card extends React.Component<CardProps> {
  render() {
    return (
      <Link className={styles.card_link} to={this.props.href}>
        <div className={styles.card}>
          <img className={styles.preview} src={this.props.imagePath} alt="" />
          <div className={styles.info}>
            <h3 className={styles.title}>{this.props.title}</h3>
            <p className={styles.description}>{this.props.description}</p>
          </div>
        </div>
      </Link>
    );
  }
}

export default Card;